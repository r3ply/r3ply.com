interface Env {
  R3PLY_DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  switch (context.request.method) {
    case "POST": return handleWaitlistSubmission(context.request, context.env.R3PLY_DB)
    default: return new Response("Method not allowed", { status: 405 })
  }
}

function handleWaitlistSubmission(request: Request, r3ply_db: D1Database): Promise<Response> {
  const url = new URL(request.url)
  url.pathname = "thanks"
  return request.formData()
    .then(form_data => {
      const entries = Object.fromEntries(form_data)
      let ts = Date.now()
      let cf = request.cf
      let cfRay = request.headers.get('cf-ray')
      let xRealIp = request.headers.get('x-real-ip')
      let stmt = r3ply_db
        .prepare('INSERT INTO waitlist'
          + '(email, ts, cf_ray, x_real_ip, cf_continent, cf_country, cf_city, is_eu, bot_mgmt_score, cf_json)'
          + 'VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)')
        .bind(entries.email, ts, cfRay, xRealIp, cf.continent, cf.country, cf.city, cf.isEUCountry, cf.botManagement["score"], JSON.stringify(cf))
      return stmt.run()
        .then(result => Response.redirect(url.toString(), 302))
        .catch(e => {
          console.error(JSON.stringify(e))
          let db_err_stmt = r3ply_db
            .prepare('INSERT INTO waitlist_error'
              + '(email, ts, cf_ray, e_msg, e_cause_msg, bot_mgmt_score, cf_json)'
              + 'VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)')
            .bind(entries.email, ts, cfRay, e.message, e.cause.message, cf.botManagement["score"], JSON.stringify(cf))
          return db_err_stmt.run()
        })
        .then(_ => Response.redirect(url.toString(), 302))
    })
    .catch(e => {
      console.error(JSON.stringify(e))
      return Response.redirect(url.toString(), 302)
    })
}