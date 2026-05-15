# Porto Peace Haven — Guest Guide Website

A premium, mobile-first, multilingual static guest guide for Porto Peace Haven.

---

## Quick Start

Open `index.html` directly in any browser — no build step required.

---

## Folder Structure

```
porto-peace-haven/
├── index.html          ← Complete single-page site (all 12 sections)
├── styles.css          ← Full stylesheet (29 sections, mobile-first)
├── script.js           ← Language switcher, QR codes, nav, clipboard
├── README.md           ← This file
└── assets/
    ├── favicon.svg     ← SVG favicon (dark blue + gold "P")
    └── images/         ← Add your photos here (see list below)
```

---

## Deployment

### Option 1 — Netlify (recommended, free)

1. Go to [netlify.com](https://netlify.com) and create a free account
2. Drag and drop the entire `porto-peace-haven/` folder onto the Netlify dashboard
3. Your site is live instantly at a URL like `https://random-name.netlify.app`
4. Optionally connect a custom domain in Netlify settings

### Option 2 — Cloudflare Pages (free)

1. Push the folder to a GitHub repository
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect your GitHub repo
4. Leave build settings blank (static site, no build command needed)
5. Deploy

### Option 3 — GitHub Pages (free)

1. Create a public GitHub repository
2. Upload all files to the repo root
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site will be at `https://yourusername.github.io/repo-name`

---

## After Deployment — Update SITE_URL

Open `script.js` and update line 8:

```javascript
const SITE_URL = 'https://YOUR-SITE-URL.netlify.app'; // ← Replace this
```

This generates the guest guide QR code in the Essential Info section.

---

## Placeholder Checklist

Search `index.html` for the following and replace them before going live:

| Placeholder | What to replace |
|---|---|
| `https://wa.me/351XXXXXXXXX` | Your WhatsApp number (format: 351 + number, no +) |
| `tel:+351XXXXXXXXX` | Your urgent/call-back phone number |
| `mailto:your@email.com` | Your email address |
| `https://g.page/r/PLACEHOLDER/review` | Your Google review link |
| `[e.g. 15:00]` (check-in time) | Your actual check-in time |
| `[e.g. 11:00]` (check-out time) | Your actual check-out time |
| `[Metro stop name…]` | Nearest metro stop and walking time |
| `[Nearest bus stop + lines]` | Nearest bus stop and line numbers |
| All `[Name & address]` in Nearby section | Real local businesses |
| `[Hospital name & address]` in Emergency | Nearest hospital |
| `[Local taxi company number]` | Local taxi number |
| Rubbish/bin location note | Where to take full bin bags |
| Recycling info | Local recycling instructions |

Items styled in **blue dashed borders** (`.ph` class) are placeholders visible in the rendered page — remove or replace all of them.

Items styled in **orange dashed borders** (`.host-note` class) are host-facing reminders — delete these before showing to guests.

---

## Adding Room Photos

Replace the coloured placeholder blocks with your actual photos by uncommenting the `<img>` tags in `index.html`:

```html
<!-- Find this comment and replace: -->
<div class="room-photo-ph ribeira-ph">...</div>

<!-- With: -->
<img src="assets/images/ribeira-room.jpg" alt="Ribeira room at Porto Peace Haven" class="room-photo">
```

### Suggested Image Filenames

```
assets/images/
├── hero-porto.jpg          ← Hero background (1920×1080 minimum)
├── ribeira-preview.jpg     ← Ribeira room card (800×600)
├── ribeira-room.jpg        ← Ribeira room detail (1200×800)
├── douro-preview.jpg       ← Douro room card
├── douro-room.jpg          ← Douro room detail
├── atlantico-preview.jpg   ← Atlântico room card
├── atlantico-room.jpg      ← Atlântico room detail
├── nearby-supermarket.jpg  ← Nearby places images
├── nearby-pharmacy.jpg
├── nearby-hospital.jpg
├── nearby-cafe.jpg
├── nearby-atm.jpg
├── nearby-laundry.jpg
├── porto-sunset.jpg        ← Porto guide images
├── porto-photo-spots.jpg
├── porto-rainy.jpg
├── porto-classic.jpg
├── porto-food.jpg
└── porto-beach.jpg
```

**Free image sources:**
- [Unsplash](https://unsplash.com) — search "Porto", "Ribeira", "Douro river" etc. (free, no attribution required)
- [Pexels](https://pexels.com) — similar terms
- Your own photos (always best!)

To add a hero background photo, uncomment the `<img>` in the hero section and add an overlay:

```html
<div class="hero-bg">
  <img src="assets/images/hero-porto.jpg" alt="" class="hero-bg-img">
  <div class="hero-gradient" style="opacity: 0.65"></div>
</div>
```

---

## Languages

The site supports 6 languages with a dropdown switcher:

- 🇬🇧 English
- 🇵🇹 Português
- 🇫🇷 Français
- 🇪🇸 Español
- 🇩🇪 Deutsch
- 🇮🇹 Italiano

All translations live in `script.js` in the `translations` object. To add or edit a translation:

```javascript
const translations = {
  en: {
    hero_tagline: 'Your peaceful home in the heart of Porto',
    // ... all keys
  },
  pt: {
    hero_tagline: 'O seu lar tranquilo no coração do Porto',
    // ...
  },
  // ...
};
```

To add a new language, add a new key with all the same translation keys.

---

## SEO

The site uses `<meta name="robots" content="noindex">` to prevent search engine indexing (appropriate for a private guest guide). If you want it indexed, remove that line from `<head>` in `index.html`.

**Current meta tags:**
```html
<title>Porto Peace Haven · Guest Guide</title>
<meta name="description" content="Your complete guest guide for Porto Peace Haven – Wi-Fi, house rules, room info, local tips and everything you need for a perfect stay in Porto, Portugal.">
```

---

## Wi-Fi QR Code

The Wi-Fi QR code is generated automatically from the credentials in `script.js`:

```javascript
const WIFI_SSID     = 'PORTO PEACE HAVEN';
const WIFI_PASSWORD = 'CAHMCTUM';
```

Update these if your credentials ever change.

---

## Customisation

All colours are CSS custom properties in `styles.css`:

```css
:root {
  --ribeira:   #1B2A4A;  /* Dark blue */
  --douro:     #B87E28;  /* Warm gold */
  --atlantico: #4E8FA8;  /* Light blue */
  --gold:      #C8922A;  /* Accent gold */
  --sand:      #EDE6DC;  /* Background sand */
}
```

Fonts are loaded from Google Fonts:
- **Headings:** Cormorant Garamond (serif, editorial)
- **Body:** DM Sans (clean, readable)

---

## Technical Notes

- Pure HTML/CSS/JS — no build tools, no framework, no dependencies
- QR codes generated client-side via [qrcodejs](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js) (CDN)
- Language preference stored in `localStorage`
- Fully accessible: semantic HTML, ARIA labels, focus styles, `prefers-reduced-motion` support
- Print styles included
- Works offline after first load (all assets local except fonts + QR library CDN)

---

*Made with care for Porto Peace Haven guests · Porto, Portugal*
