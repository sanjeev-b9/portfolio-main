# Sanjeevulu Bomma — Portfolio

A one-page React portfolio built with Vite and styled-components.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Vercel detects Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

## SEO before production

The project includes:
- Title and meta description
- SEO keywords and author metadata
- Robots directives
- Canonical URL
- Open Graph metadata
- Twitter card metadata
- `Person` JSON-LD structured data
- `robots.txt`
- `sitemap.xml`
- Favicon and social-share image
- Vercel security/cache headers

Before deploying, replace every occurrence of:

`https://YOUR-DOMAIN.vercel.app`

with the actual Vercel/custom domain.

After deployment, submit:

`https://YOUR-DOMAIN.vercel.app/sitemap.xml`

to Google Search Console.

## Resume

The original resume is included as `public/resume.pdf`, so the Resume button opens it directly.

## Personal links

The resume labels LinkedIn and GitHub but does not contain their actual URLs. Add the real profile URLs before production if you want them exposed in navigation and structured data.


## Portfolio positioning

The design is intentionally positioned as a professional portfolio for a currently employed senior engineer:
- No artificial project numbering
- No startup/freelancer-style "Have a product to build?" CTA
- Current employer is presented clearly
- Contact CTA is framed around career opportunities and professional networking
- Resume remains the primary recruiter action
