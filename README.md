The public website for RiftTally, an unofficial, fan-made Riftbound collection tracker for iPhone. It has a home page, a privacy policy, terms of service, and a support page. GitHub Pages serves it from `main` at the repo root: https://michael-huang87.github.io/rifttally/

The app name, contact email, App Store link (empty until launch) and policy date are set once in `_config.yml`, and every page reads them from there.

Preview locally with Jekyll 3.10, the version GitHub Pages runs, then check links and take screenshots (needs `playwright` or `playwright-core`):

```sh
jekyll serve                                                 # http://localhost:4000
node check-site.mjs http://localhost:4000/ /tmp/site-shots   # fails on any broken link or image
```

Links are relative, so the site works under this repo path or a custom domain. `robots.txt` only takes effect at a host root, so crawlers ignore it until the site has a custom domain.

RiftTally was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project. This product uses TCGplayer data but is not endorsed or certified by TCGplayer.
