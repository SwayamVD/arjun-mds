# Arjun Motor Driving School — Portfolio Website

A professional portfolio website for **Amol Mojad**, a certified driving instructor with 23+ years of experience, operating under the brand **Arjun Motor Driving School** in Nashik, Maharashtra.

---

## Client Info

| Field            | Details                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| Name             | Amol Mojad                                                                                                     |
| School           | Arjun Motor Driving School                                                                                     |
| Phone            | 9850263331                                                                                                     |
| Email            | amolmojad@gmail.com                                                                                            |
| Address          | Shop No 16, Gaurav Plaza, Near Vandana Park, Wadala Parthardi Road, Indira Nagar, Nashik - 422009, Maharashtra |
| Availability     | Mon–Sat: 6am – 9pm                                                                                             |
| Experience       | 23+ Years                                                                                                      |
| Students Trained | 1000+                                                                                                          |
| Google Rating    | 5.0 ⭐ (319 ratings)                                                                                           |
| JustDial Rating  | 4.9 ⭐ (606 ratings)                                                                                           |
| Google Maps      | [Arjun Driving School](https://maps.app.goo.gl/83JL1wmBmFFbbve47)                                              |
| JustDial         | [JustDial Listing](https://jsdl.in/DT-4662YI6E6U2)                                                             |

---

## Services Offered

**Practical Driving Training**

- City traffic practice
- Highway driving techniques
- Reverse & parallel parking
- Hill start control
- Defensive driving skills
- Road safety & traffic rule awareness

**RTO Related Work**

- Learning License (LL) application
- Permanent Driving License
- License renewal & duplicate license
- RC transfer & ownership change
- Vehicle insurance assistance
- Address change in RC
- Vehicle registration support
- Appointment booking & document guidance

---

## Instructor Journey

| Period         | Location | Role                                      |
| -------------- | -------- | ----------------------------------------- |
| 2016 – Present | Nashik   | Founded Arjun Motor Driving School        |
| 2004 – 2015    | Nashik   | Worked with an established driving school |
| 2000 – 2003    | Thane    | Trained under a senior driving instructor |

---

## Tech Stack

| Category      | Technology           | Version     |
| ------------- | -------------------- | ----------- |
| UI Library    | React                | 19.2.0      |
| Build Tool    | Vite                 | 7.3.1       |
| Vite Plugin   | @vitejs/plugin-react | 5.1.1       |
| Animation     | Framer Motion        | 12.34.2     |
| Icons         | Lucide React         | 0.575.0     |
| Icons         | React Icons          | 5.5.0       |
| CSS Framework | Bootstrap            | 5.3.8 (CDN) |
| Linting       | ESLint               | 9.39.1      |
| Module System | ES Modules (ESM)     | —           |

### Fonts (Google Fonts CDN)

- DM Sans
- Playfair Display
- Noto Serif Devanagari (for Marathi language support)

---

## Project Structure

```
arjun-mds-portfolio/
├── public/
│   └── images/              # Static images (logo, shop, instructor, service backgrounds)
├── src/
│   ├── assets/
│   │   └── gallery/         # Gallery images (banner, guidelines, teaching, tools, traffic signs)
│   ├── components/
│   │   ├── Badge            # Reusable icon badge component
│   │   ├── Footer           # Site footer with quick links & social
│   │   ├── Navigation       # Sticky navbar with lang & theme toggle
│   │   └── ServiceCard      # Animated service card with cycling points
│   ├── pages/
│   │   └── portfolio/
│   │       ├── Home         # Hero section with stats & CTA
│   │       ├── About        # Instructor bio & specializations
│   │       ├── Testimonial  # Scrolling review cards
│   │       ├── Services     # Service cards with background carousel
│   │       ├── Journey      # Career timeline
│   │       ├── Gallery      # Framer Motion image carousel
│   │       └── Contact      # Contact details + Google Maps embed
│   ├── App.jsx              # Root component, theme & lang state
│   ├── translation.js       # Shared i18n translation object (structured by section)
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML shell with Bootstrap & font CDN links
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Key Features

- **Bilingual** — English and Marathi with a single toggle button; body class (`lang-en` / `lang-mr`) applied for font-level control
- **Dark / Light theme** — toggled via `data-bs-theme` on `<html>`, powered by Bootstrap 5
- **Responsive** — mobile-first layout using Bootstrap grid; separate mobile hero background image
- **Animated gallery** — Framer Motion carousel with peek cards
- **Auto-scrolling testimonials** — two columns of review cards
- **Service background carousel** — auto-cycling images every 3s
- **Google Maps embed** — live location iframe in Contact section
- **SEO meta tags** — description, keywords, author, robots in `index.html`
- **Structured i18n** — `translation.js` exports a section-scoped object (`translations.en.home`, `translations.mr.home`, etc.) for clean per-component access

---

## Page Order (as rendered in App.jsx)

```
Navigation → Home → About → Testimonial → Services → Journey → Gallery → Contact → Footer
```

---

## Scripts

```bash
npm run dev       # Start development server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Deployment

Hosted on **Vercel** (static site). All images referenced in CSS must use absolute paths starting with `/` (e.g. `/images/shop-mb.jpg`) since Vite serves the `public/` folder at the root. Relative paths like `public/images/...` work locally but fail in production on Linux/case-sensitive filesystems.

---

## ESLint Config

- Extends `@eslint/js` recommended rules
- React Hooks plugin (`eslint-plugin-react-hooks`)
- React Refresh plugin (`eslint-plugin-react-refresh`)
- `no-unused-vars` error, ignoring `UPPER_CASE` patterns
- Targets ES2020, browser globals, JSX source type module

---

## Contact & Social

| Platform  | Link                                                   |
| --------- | ------------------------------------------------------ |
| WhatsApp  | [Chat](https://web.whatsapp.com/send?phone=9850263331) |
| JustDial  | [Profile](https://jsdl.in/DT-4662YI6E6U2)              |
| Facebook  | [Page](https://jsdl.in/DT-4662YI6E6U2)                 |
| Instagram | [Profile](https://jsdl.in/DT-4662YI6E6U2)              |
