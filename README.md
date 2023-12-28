# r3ply.com

This is the website for the r3ply commenting system.

## Usage

Start by visiting the [project's GitHub repository](https://github.com/asimpletune/zola-tailwindcss), and then click use the template and "create a new repository".

![Create a new repository](https://zola-tailwind.spenc.es/screenshot.png)

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

There's a Cloudflare D1 database that stores the information for the waitlist.

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
