The public website for RiftTally, an unofficial, fan-made Riftbound collection tracker for iPhone. It has a home page, a privacy policy, terms of service, and a support page. GitHub Pages serves it from `main` at the repo root: https://rifttally.com/ (the custom domain is set by the `CNAME` file, and DNS is at Porkbun).

The app name, contact email, App Store link (empty until launch) and policy date are set once in `_config.yml`, and every page reads them from there.

Preview locally with Jekyll 3.10, the version GitHub Pages runs, then check links and take screenshots (needs `playwright` or `playwright-core`):

```sh
jekyll serve                                                 # http://localhost:4000
node check-site.mjs http://localhost:4000/ /tmp/site-shots   # fails on any broken link or image
```

Links are relative, so the site also works under a repo path when previewed elsewhere.

RiftTally was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project. This product uses TCGplayer data but is not endorsed or certified by TCGplayer.
