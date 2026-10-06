# Ammar Yasir Naich — portfolio

Static recruiter portfolio for an AI / Machine Learning Engineer. One homepage, four case studies, and a CV download.

The live site at [ammaryasirnaich.github.io](https://ammaryasirnaich.github.io/) is a separate Jekyll project. This folder does not replace it.

## Develop

```bash
npm install
npm run dev
```

## Check

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` writes a static export to `out/` (`output: "export"`, trailing slashes on).

## Publish later

GitHub Pages can host `out/` for free at `https://ammaryasirnaich.github.io/`. The workflow in `.github/workflows/pages.yml` runs only when you dispatch it by hand.

Do not push this project onto `ammaryasirnaich/ammaryasirnaich.github.io` until you intend to replace the current site. Dispatching that workflow on the live repository would overwrite it.
