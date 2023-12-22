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
npm run

# starts a local server
# that watches/rebuilds
npm run serve
```

## Multilingual

The site is currently written in English and Italian.

Translations are set in [config.toml](/config.toml). The keys are used via the `trans(key=, lang=)` filter included with Zola. There is also a combination of rewrite and redirect rules upstream on the cloudflare side of things that enables setting the default language based on peoples accepted-languages headers, as well as if they explicitly change the language in the nav. How this is precisely done will have to be documented another day, but always /<language code>, e.g. `/it/` will work and override everything else.