interface Env {
  R3PLY_DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url)
  url.pathname = "thanks"
  return context.request.formData()
    .then(form_data => {
      const entries = Object.fromEntries(form_data)
      let ts = Date.now()
      let cf = context.request.cf
      let cfRay = context.request.headers.get('cf-ray')
      let xRealIp = context.request.headers.get('x-real-ip')
      let stmt = context.env.R3PLY_DB.prepare('INSERT INTO waitlist'
        + '(email, ts, cf_ray, x_real_ip, cf_continent, cf_country, cf_city, is_eu, bot_mgmt_score, cf_json)'
        + 'VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)')
        .bind(entries.email, ts, cfRay, xRealIp, cf.continent, cf.country, cf.city, cf.isEUCountry, cf.botManagement["score"], JSON.stringify(cf))
      return stmt.run()
        .then(result => Response.redirect(url.toString(), 302))
        .catch(e => {
          console.error("ERROR")
          console.error({ error: e })
          let db_err_stmt = context.env.R3PLY_DB.prepare('INSERT INTO waitlist_error'
            + '(email, ts, cf_ray, e_msg, e_cause_msg, bot_mgmt_score, cf_json)'
            + 'VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)')
            .bind(entries.email, ts, cfRay, e.message, e.cause.message, cf.botManagement["score"], JSON.stringify(cf))
          return db_err_stmt.run()
        })
        .then(_ => Response.redirect(url.toString(), 302))
    })
    .catch(e => {
      console.error({ error: e, errorMessage: e.message, errorStack: e.stack });
      return Response.redirect(url.toString(), 302)
    })
}