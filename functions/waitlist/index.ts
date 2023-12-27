interface Env {
  R3PLY_DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  let ts = Date.now()
  let cf = context.request.cf
  let cfRay = context.request.headers.get('cf-ray')
  let xRealIp = context.request.headers.get('x-real-ip')
  const ps = context.env.R3PLY_DB
    .prepare('INSERT INTO waitlist'
      + '(email, ts, cf_ray, x_real_ip, cf_continent, cf_country, cf_city, is_eu, bot_mgmt_score, cf_json)'
      + 'VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)')
  let stmt = ps.bind("bob@example.com", ts, cfRay, xRealIp, cf.continent, cf.country, cf.city, cf.isEUCountry, cf.botManagement["score"], JSON.stringify(cf))
  return stmt.run().then(result => Response.json({}))
}