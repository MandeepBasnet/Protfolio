# Mandeep Basnet — Portfolio

Personal portfolio built with Next.js (App Router) and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

All content lives in `src/data/` — you shouldn't need to touch components to update the site:

| File | What it holds |
| --- | --- |
| `profile.js` | Name, role, tagline, email, social links, stats |
| `skills.js` | Skill groups |
| `projects.js` | Projects (`featured: true` puts one in the top grid) |
| `milestones.js` | Experience timeline |

## Structure

```
src/
  app/          layout, page, global styles
  components/   one component per section + shared pieces (Section, Tag, Icons)
  data/         site content
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — no configuration needed.
