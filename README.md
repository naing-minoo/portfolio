# Naing Min Oo — Portfolio

A single-page professional portfolio for Naing Min Oo, a Senior Product Manager and Technical Delivery Manager based in Cambridge, UK.

The site presents selected product case studies, career experience, technical and product-management skills, and a contact form. It is deployed to Vercel at [portfolio-naingminoo.vercel.app](https://portfolio-naingminoo.vercel.app).

## Technology

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- `next-themes` for system-aware light and dark themes
- A local system-font stack with no build-time font download
- Formspree for contact-form delivery
- Vercel Analytics and Speed Insights

## Local development

Use Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

Run both commands before deploying. The production build also validates TypeScript and generates the sitemap, robots file, web app manifest, and social-sharing image.

## Project structure

```text
src/
├── app/
│   ├── layout.tsx          # Global metadata, structured data, analytics
│   ├── page.tsx            # One-page section composition
│   ├── globals.css         # Tailwind import and global styles
│   ├── opengraph-image.tsx # Generated social-sharing image
│   ├── manifest.ts         # Web app manifest
│   ├── robots.ts           # Search crawler rules
│   └── sitemap.ts          # Search sitemap
└── components/             # Portfolio sections and shared UI
```

The homepage sections are composed in `src/app/page.tsx`. Most portfolio copy and project data live near the top of their corresponding component files.

## Updating content

- Profile introduction and headline: `src/components/Hero.tsx`
- Biography and career snapshot: `src/components/About.tsx`
- Skills: `src/components/Skills.tsx`
- Case studies: `src/components/Projects.tsx`
- Employment and education: `src/components/Experience.tsx`
- Contact details and Formspree endpoint: `src/components/Contact.tsx`
- SEO metadata and structured data: `src/app/layout.tsx`

When the deployment URL changes, update `siteUrl` in `src/app/layout.tsx` and the URLs in `src/app/sitemap.ts` and `src/app/robots.ts`.

## Deployment

The repository includes `vercel.json` and is configured for a standard Vercel Next.js deployment. No application secrets are required; the public Formspree form identifier is part of the client-side contact form by design.

## Accessibility and motion

The interface supports keyboard navigation, visible focus states, semantic labels for interactive controls, and the operating system's reduced-motion preference. Light and dark appearance follow the user's system preference until changed with the theme control.
