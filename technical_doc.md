# Technical Documentation — Arjun Motor Driving School Portfolio

## Stack

- **React 19** with Vite 7 as the build tool
- **Bootstrap 5.3** loaded via CDN (CSS + JS bundle) — used for layout, grid, navbar, and utility classes
- **Framer Motion 12** for animations
- **Lucide React** and **React Icons** for icons
- No routing library — single-page layout with anchor-based scroll navigation (`#home`, `#about`, etc.)

## Project Structure

All pages are rendered as stacked sections inside `App.jsx`. There's no client-side routing. The component tree is flat:

```
App
├── Navigation
├── Home
├── About
├── Testimonial
├── Services
├── Journey
├── Gallery
├── Contact
└── Footer
```

Reusable components: `Badge`, `ServiceCard`. Each component has a co-located `.css` file.

## State Management

No external state library. `App.jsx` manages two pieces of state via `useState`:

- `lang` — current language (`"en"` or `"mr"`), toggled via `toggleLang`
- `theme` — current theme (`"light"` or `"dark"`), toggled via `toggleTheme`

Theme is applied by setting `data-bs-theme` on `document.documentElement` (Bootstrap's built-in dark mode attribute). Language is applied by toggling `lang-en` / `lang-mr` classes on `document.body`, which drives CSS-based font switching.

Both `lang` and `theme` are passed down as props to all page components and `Navigation`.

## Internationalisation

Custom implementation — no i18n library. Each component defines a local `translations` object keyed by `"en"` and `"mr"`. The active language is selected with:

```js
const t = translations[lang] || translations.en;
```

There's also a `src/translation.js` file that holds shared translation strings, though most components still keep their own local translation objects.

Translations support JSX values (e.g. `<span className="highlight-color">` inside taglines).

Language-specific fonts are loaded via Google Fonts and switched via the body class:

- English: `DM Sans`, `Playfair Display`, `Plus Jakarta Sans`
- Marathi: `Noto Serif Devanagari`

## Styling

- Per-component CSS files alongside each `.jsx` file
- Bootstrap utility classes for responsive layout
- CSS custom properties and `@keyframes` for fade/slide animations
- Media queries at `786px` and `576px` breakpoints for mobile adjustments
- Two section background utility classes (`section-bg1`, `section-bg2`) defined in `index.css`

## Notable Behaviour

- **Navbar transparency**: `Navigation` tracks `window.scrollY` via a `scroll` event listener. Below 50px the navbar is transparent; above it switches to a solid style (`navbar-solid` class).
- **ServiceCard animation**: List items inside `ServiceCard` cycle with a fade in/out effect on a 2.5s interval using `setInterval` inside `useEffect`.
- **Services image carousel**: Rotates background images on a 3-second interval.
- **Navbar collapse on link click**: Direct DOM manipulation (`classList.remove("show")`) to close the Bootstrap mobile navbar after a nav link is clicked.

## Build & Dev

```bash
npm run dev       # Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

Vite config is minimal — only the `@vitejs/plugin-react` plugin is used, no custom aliases or build overrides.
