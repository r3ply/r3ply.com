CREATE TABLE IF NOT EXISTS waitlist (
  email           text PRIMARY KEY,
  ts              integer NOT NULL,
  cf_ray          text,
  x_real_ip       text,
  cf_continent    text,
  cf_country      text,
  cf_city         text,
  is_eu           integer,
  bot_mgmt_score  integer,
  cf_json         text
);