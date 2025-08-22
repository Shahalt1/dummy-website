# Dummy Website

A minimal, dependency‑free landing page template built with semantic HTML, modern CSS, and a pinch of vanilla JS. Includes a hero, logo strip, simple portfolio grid, and a contact call‑to‑action.

- Live site: https://shahalt1.github.io/dummy-website/
- Stack: plain HTML + CSS + JS (no build step)

## Quick Start

Choose either approach:

1) Open directly

- Double‑click `index.html` to open in your browser.

2) Serve locally (recommended)

- Using Python: `python3 -m http.server 8080`
- Using Node (if installed): `npx serve .`
- Then visit http://localhost:8080 (or the URL shown).

## Project Structure

```
dummy-website/
├─ index.html     # Markup and page sections
├─ styles.css     # Design system + layout + components
└─ script.js      # Small enhancements (nav, smooth scroll, reveals)
```

Key sections in `index.html`:

- Header: logo and a responsive nav with a mobile toggle
- Hero: headline, subtitle, and primary/secondary CTAs
- Logos: simple strip to showcase backed companies
- Portfolio: grid of example companies with tags
- Contact: footer CTA with email
- Footer: basic site footer with links and current year

## Customization

Colors and tokens (in `styles.css`):

```css
:root {
  --bg: #ffffff;
  --text: #1e293b;
  --primary: #3b82f6;     /* link color */
  --primary-600: #2563eb; /* button color */
  --accent: #10b981;      /* subtle accents */
}
```

Hero content (in `index.html`):

```html
<!-- Replace headline + subtitle -->
<h1 class="hero-title">Backing bold founders building category‑defining companies</h1>
<p class="hero-subtitle">We partner early and support for the long run…</p>
```

Logos (in `index.html`): replace image URLs with your own logos, or local files:

```html
<img src="/path/to/logo.png" alt="Your Company" width="150" height="150">
```

Portfolio items (duplicate an `article.company` block):

```html
<article class="company reveal">
  <div class="company-logo">N</div>
  <div class="company-body">
    <h3>NewCo</h3>
    <p>One‑line description of what you do.</p>
    <span class="chip">Category</span>
  </div>
  <!-- Optional: link the card by wrapping in <a> or adding a button -->
  
</article>
```

Contact email (in `index.html`):

```html
<a class="btn btn-lg" href="mailto:you@example.com">you@example.com</a>
```

System font vs Google Fonts: the template includes Inter from Google Fonts. To use only system fonts, remove the two `<link rel="preconnect">` tags and the Google Fonts `<link>` from the `<head>`.

## Features

- Responsive layout with CSS grid and fluid typography
- Accessible markup: skip link, labeled nav, focus styles
- Mobile nav toggle with proper `aria-expanded`
- Smooth scrolling for same‑page links
- IntersectionObserver‑based reveal‑on‑scroll for portfolio cards
- No build tooling, works offline as a static site

## Development Notes

- JS lives in `script.js` and is intentionally small and framework‑free.
- CSS variables at `:root` act as a mini design system; tweak to re‑theme quickly.
- The favicon uses an inline emoji data URL to avoid managing assets.

## Deployment

Any static hosting works (GitHub Pages, Netlify, Vercel, S3, etc.).

GitHub Pages quick steps:

1. Push this folder to a GitHub repository.
2. In the repo, go to Settings → Pages.
3. Set Source to the `main` branch, root directory.
4. Save — Pages will publish at `https://<user>.github.io/<repo>/`.

## Example Tweaks

Change the primary button color:

```css
:root { --primary-600: #7c3aed; } /* violet */
```

Add a new nav link (header `nav-list` in `index.html`):

```html
<li><a href="#team">Team</a></li>
```

Create a new section (add under `<main>`):

```html
<section id="team" class="section">
  <div class="container grid-3 team-grid">
    <div class="person">
      <div class="avatar">A</div>
      <h3>Ada Lovelace</h3>
      <p class="muted">Investments</p>
    </div>
    <!-- more people -->
  </div>
  
</section>
```

## License

MIT — use, modify, and deploy freely. Attribution appreciated but not required.
