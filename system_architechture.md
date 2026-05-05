# System Architecture — Arjun Motor Driving School Portfolio

## Overview

A single-page portfolio website for **Arjun Motor Driving School** (Nashik, Maharashtra), built with React 19 + Vite. It is a fully static, client-side application with no backend, no database, and no routing library. Navigation is anchor-based (`#section-id`). The site supports two languages (English and Marathi) and two themes (light and dark).

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 19.2 |
| Build Tool | Vite 7.3.1 |
| CSS Framework | Bootstrap 5.3.8 (CDN) |
| Animation | Framer Motion 12.34 |
| Icons | Lucide React 0.575, React Icons 5.5 |
| Fonts | Google Fonts (DM Sans, Playfair Display, Noto Serif Devanagari) |
| Linting | ESLint 9.39 |
| Module System | ES Modules (ESM) |
| Deployment | Vercel (static hosting) |

---

## 2. Entry Point and Bootstrap Flow

```
index.html
  └── <div id="root">
  └── <script src="/src/main.jsx">
        └── ReactDOM.createRoot().render(<StrictMode><App /></StrictMode>)
              └── App.jsx  <- global state lives here
```

`index.html` loads Bootstrap CSS, Google Fonts, and the favicon via `<head>`. Vite handles bundling and HMR.

---

## 3. Application Shell — App.jsx

`App.jsx` is the root component. It owns all global state and composes the full page layout in a fixed order.

### Global State

| State | Type | Default | Purpose |
|---|---|---|---|
| `lang` | `"en" or "mr"` | `"en"` | Active language |
| `theme` | `"light" or "dark"` | `"light"` | Active color theme |

### Side Effects

- `lang` change adds `lang-en` or `lang-mr` class to `document.body` (drives font switching via CSS)
- `theme` change sets `data-bs-theme` on `document.documentElement` (drives Bootstrap dark mode)

### Page Composition Order

```
<div class="page-wrapper">
  <Navigation />     <- sticky top, receives toggleLang, toggleTheme, lang
  <Home />
  <About />
  <Testimonial />
  <Services />
  <Journey />
  <Gallery />
  <Contact />
  <Footer />
</div>
```

All page components receive `lang` as a prop. `Navigation` additionally receives `toggleLang` and `toggleTheme` callbacks.

---

## 4. Routing Strategy

No client-side router. The entire site is one scrollable page. Navigation links use anchor hrefs (`#home`, `#about`, `#services`, etc.) which scroll to the corresponding `<section id="...">`.

---

## 5. State Management

No external state library. State flows strictly top-down via props.

```
App.jsx
  ├── lang ──────────────────────────────────────────────────────┐
  │                                                               v
  ├── toggleLang  --> Navigation.jsx                    All page components
  ├── toggleTheme --> Navigation.jsx                    use lang to pick
  └── theme --------> document.documentElement          the right translation
                       [data-bs-theme]
```

Local component state is used for UI interactions only:

| Component | Local State | Purpose |
|---|---|---|
| `Navigation` | `scrolled` | Transparent to solid navbar on scroll |
| `ServiceCard` | `currentIndex`, `fade` | Cycling bullet point animation |
| `Gallery` | `currentIndex` | Carousel slide position |
| `Contact` | `show`, `form` | Modal visibility and form field values |

---

## 6. Internationalization (i18n)

No i18n library. Custom prop-driven translation pattern used throughout.

### Pattern

Each component defines a local `translations` object keyed by `"en"` and `"mr"`:

```js
const translations = {
  en: { heading: "Gallery", ... },
  mr: { heading: "गॅलरी", ... },
};
const t = translations[lang] || translations.en;
```

`src/translation.js` exports shared strings for the Home section (partially used; most components define their own inline).

### Font Switching

Language-specific fonts are applied via CSS class on `<body>`:

- `lang-en` → DM Sans, Playfair Display
- `lang-mr` → Noto Serif Devanagari

Translations can contain JSX (e.g., `<span className="highlight-color">`) for styled keywords.

---

## 7. Component Architecture

### Reusable Components (src/components/)

**Badge.jsx**
Generic icon badge. Accepts `iconpath` (SVG URL) and `color` (maps to CSS class `badge-{color}`). Used for social links, contact icons, gender avatars, service icons, and rating logos.

**ServiceCard.jsx**
Animated card for a single service. Cycles through `points[]` array every 2.5s with a fade-in/fade-out transition using `setInterval` + `useState`.

**Navigation.jsx**
Sticky top navbar. Scroll listener on `window` sets `scrolled` state — below 50px the navbar is transparent, above it becomes solid. Contains language toggle and theme toggle buttons. Collapses on mobile (Bootstrap navbar). Closes mobile menu on link click.

**Footer.jsx**
Three-column footer: brand info, quick links (anchor hrefs + external Instructor Login link to `arjun-mds-admin.vercel.app`), social badges (JustDial, Facebook, Instagram).

---

### Page Components (src/pages/portfolio/)

**Home.jsx** — `#home`
Hero section. Displays instructor shop image, bilingual tagline with highlighted keywords, description, trust indicators (23+ years experience, certified instructor, RTO approved, 1000+ students, 4.9+ reviews), and two CTA buttons (My Services, Call Now).

**About.jsx** — `#about`
Instructor bio section. Shows instructor name (Amol Mojad), description paragraph, and specialization badges (Training, Licence Assistance, All RTO Paper Clearance) using the `Badge` component. Displays instructor portrait image.

**Testimonial.jsx** — `#testimonials`
Two-column auto-scrolling review section. Each column duplicates its 3 reviews (`[...reviews, ...reviews]`) to create a seamless infinite CSS scroll animation (`scroll-up` keyframe). Shows Google (5.0 / 319 ratings) and JustDial (4.9 / 606 ratings) rating cards with external links.

**Services.jsx** — `#services`
Two services: Practical Driving Training and All RTO Related Work. Desktop: background image carousel (auto-rotates every 3s) with overlapping `ServiceCard` components. Mobile: accordion-style stacked list. Uses `ServiceCard` for animated bullet cycling.

**Journey.jsx**
Vertical timeline of 3 career milestones in reverse chronological order:
- 2016–Present: Arjun Motor Driving School (own school)
- 2004–2015: Nashik (established school)
- 2000–2003: Thane (training under senior instructor)

**Gallery.jsx** — `#gallery`
Image carousel with 5 gallery items (local assets from `src/assets/gallery/`). Uses Framer Motion `AnimatePresence` + `motion.div` for slide transitions. Shows one featured image + 3 peek cards. Navigation via ArrowLeft / ArrowRight (Lucide icons). `useCallback` used for stable handler references.

**Contact.jsx** — `#contact`
Contact details grid (phone, email, address, availability) using `Badge` icons. Google Maps embed (iframe). Contact Form button opens a custom modal. Form submits via `mailto:` — opens Gmail compose in a new tab with pre-filled subject and body.

---

## 8. Styling Architecture

Each component has a co-located `.css` file. No CSS modules, no CSS-in-JS, no Tailwind.

### Layers

1. Bootstrap 5.3 (CDN) — grid, utilities, navbar, dark mode via `data-bs-theme`
2. `src/index.css` — global resets, CSS variables, font definitions, utility classes
3. `src/App.css` — page-wrapper and layout globals
4. Per-component CSS — component-specific styles

### Key CSS Patterns

| Class / Pattern | Purpose |
|---|---|
| `.cus-section` / `.cus-section-2` | Section padding and alignment |
| `.section-bg1` / `.section-bg2` | Background gradient variants |
| `.highlight-color` | Accent color for keywords |
| `.highlight-underline` | Animated underline on headings |
| `backdrop-filter: blur()` | Glass-morphism cards |
| `@keyframes scrollUp` | Infinite testimonial scroll |
| `@keyframes fadeIn` | Service point fade animation |
| `.lang-en` / `.lang-mr` on body | Font family switching |
| `[data-bs-theme="dark"]` | Bootstrap dark mode |

### Responsive Breakpoints

- `768px` (Bootstrap `md`) — primary layout switch (single column to multi-column)
- `576px` (Bootstrap `sm`) — fine-tuned mobile adjustments

---

## 9. Asset Strategy

| Asset Type | Location | Access |
|---|---|---|
| Gallery images | `src/assets/gallery/` | Imported as ES modules, bundled by Vite |
| Public images (shop, instructor, service BGs) | `public/images/` | Served at `/images/...` absolute paths |
| SVG icons | External SVG CDN (svgrepo.com) | Loaded via `<img src>` at runtime |
| Brand logo / favicon | `public/images/` | Referenced in `index.html` |

---

## 10. Build and Dev Pipeline

```
npm run dev      -> Vite dev server with HMR
npm run build    -> Production build to dist/
npm run preview  -> Serve dist/ locally
npm run lint     -> ESLint check
```

`vite.config.js` is minimal — only the `@vitejs/plugin-react` plugin (enables Fast Refresh). Production output is deployed as a static site on Vercel.

---

## 11. External Integrations

| Integration | How Used |
|---|---|
| Google Maps | Embedded iframe in Contact section |
| Google Fonts | CDN link in `index.html` |
| Bootstrap CSS | CDN link in `index.html` |
| SVG Repo | Icon images loaded at runtime via `<img>` |
| Gmail Compose | `mailto:` URL opened via `window.open()` in Contact form |
| JustDial | External link in Testimonial and Footer |
| Facebook / Instagram | External links in Footer |
| Vercel (Admin) | Footer "Instructor Login" links to `arjun-mds-admin.vercel.app` |

---

## 12. Full Data Flow

```
User Interaction
      |
      v
Navigation.jsx
  |-- toggleLang()  --> App.jsx: setLang("en"|"mr")
  |                         |
  |                         |-- lang prop --> all page components
  |                         └-- body.classList --> CSS font switch
  |
  └-- toggleTheme() --> App.jsx: setTheme("light"|"dark")
                              |
                              └-- documentElement[data-bs-theme] --> Bootstrap theme

Page Component (e.g. Services.jsx)
  |-- receives lang prop
  |-- picks translations[lang]
  └-- renders bilingual content

ServiceCard.jsx
  └-- setInterval (2.5s) --> cycles points[] with fade animation

Gallery.jsx
  └-- Arrow click --> setCurrentIndex --> Framer Motion slide transition

Contact.jsx
  |-- "Contact Form" click --> setShow(true) --> modal renders
  |-- form inputs --> setForm({...})
  └-- "Send message" --> window.open(gmailURL) --> Gmail compose tab
```

---

## 13. Directory Structure

```
/
├── index.html                   <- HTML shell, CDN links, meta tags, SEO
├── vite.config.js               <- Vite + React plugin config
├── package.json                 <- Dependencies and scripts
├── eslint.config.js             <- ESLint rules
├── public/
│   └── images/                  <- Static images (served at /images/...)
└── src/
    ├── main.jsx                 <- React DOM entry point
    ├── App.jsx                  <- Root component, global state
    ├── App.css                  <- Global layout styles
    ├── index.css                <- CSS variables, resets, fonts
    ├── translation.js           <- Shared Home section translations
    ├── assets/
    │   └── gallery/             <- Gallery images (Vite-bundled)
    ├── components/
    │   ├── Badge.jsx / .css     <- Icon badge
    │   ├── Navigation.jsx / .css <- Sticky navbar
    │   ├── Footer.jsx / .css    <- Site footer
    │   └── ServiceCard.jsx / .css <- Animated service card
    └── pages/
        └── portfolio/
            ├── Home.jsx / .css
            ├── About.jsx / .css
            ├── Testimonial.jsx / .css
            ├── Services.jsx / .css
            ├── Journey.jsx / .css
            ├── Gallery.jsx / .css
            └── Contact.jsx / .css
```
