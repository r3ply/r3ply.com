# r3ply.com

This is the website for the [r3ply](https://r3ply.com) commenting system. For more information about r3ply, please visit the website.

## Usage

Here's how you do stuff:

```zsh
# installs everything
# that you need
npm install

# build builds once,
# output in `./public`
npm run build

# starts a local server (on :1111)
# that watches/rebuilds
# for zola and tailwind only
npm run serve

# starts a local server (on :8788)
# that proxies the server from `npm run serve`
# but also enables cloudflare pages stuff
# (this is what you want for local development)
npm run dev
```

## Multilingual

The site is currently written in English and Italian.

Translations are set in [config.toml](/config.toml). The keys are used via the `trans(key=, lang=)` filter included with Zola. There is also a combination of rewrite and redirect rules upstream on the cloudflare side of things that enables setting the default language based on peoples accepted-languages headers, as well as if they explicitly change the language in the nav. How this is precisely done will have to be documented another day, but always /<language code>, e.g. `/it/` will work and override everything else.

## Waitlist

There's a Cloudflare D1 database that stores the information for the waitlist. There are two tables:

1. `waitlist` which holds the waitlist information
2. `waitlist_error` which holds an errors that occurred in the process

### Production dev

There are two databases `r3ply` (for production) and `r3ply_staging` (for staging). Their tables should be already be provisioned, but you can re-create them by running the following command (from the project root):

```bash
# in production:
npx wrangler d1 execute r3ply --file functions/waitlist/create.sql

# in staging
npx wrangler d1 execute r3ply_staging --file functions/waitlist/create.sql
```

Additionally, you can query them by running the following command (and adjust as needed)

```bash
# in production
npx wrangler d1 execute r3ply --command "select email from waitlist"

# in staging
npx wrangler d1 execute r3ply_staging --command "select email from waitlist"
```

### Local dev

[Cloudflare Docs](https://developers.cloudflare.com/d1/learning/local-development/)

There's a [wrangler.toml](./wrangler.toml) file at the project root for local development with Cloudflare Pages.

Here are some helpful SQL commands.

```bash
# drops the sql tables
npm run tables-drop

# creates the sql tables
npm run tables-create

# drops and creates the sql tables
npm run tables-reset

# runs an arbitrary sql command
npm run sql -- "SELECT * from waitlist"
```
