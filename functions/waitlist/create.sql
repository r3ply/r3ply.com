CREATE TABLE IF NOT EXISTS waitlist (
  email           TEXT PRIMARY KEY,
  ts              integer NOT NULL,
  cf_ray          TEXT,
  x_real_ip       TEXT,
  cf_continent    TEXT,
  cf_country      TEXT,
  cf_city         TEXT,
  is_eu           integer,
  bot_mgmt_score  integer,
  cf_json         TEXT
);

CREATE TABLE IF NOT EXISTS waitlist_error(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  ts INTEGER NOT NULL,
  cf_ray TEXT,
  e_msg TEXT,
  e_cause_msg TEXT,
  bot_mgmt_score TEXT,
  cf_json TEXT
);