---
title: "Q&A Study Guide — Arjun MDS Portfolio Project"
---

<div style="text-align:center; margin-bottom: 2rem;">

# Q&A Study Guide

## Arjun Motor Driving School — Portfolio Project

### Full Stack Web App + Software Project Management

_Adapted from PSI Engineering Systems Q&A Guide_

</div>

---

## Assignment 1 — Environment Setup & Requirement Gathering

### Unit I: Introduction to Project Management

---

**Q1. What was the problem statement that led to the development of the Arjun MDS web application?**

Arjun Motor Driving School had no digital platform to showcase its services, display instructor credentials, or allow potential students to get in touch. Before development, proper environment setup and requirement gathering was essential.

---

**Q2. What development tools were installed for the Arjun MDS project, and what is the purpose of each?**

| Tool              | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| VS Code           | Code editor — primary IDE for writing frontend code            |
| Node.js (v18 LTS) | JavaScript runtime — required to run Vite and npm              |
| Git               | Version control — tracks code changes and enables rollback     |
| Vite              | Build tool — provides fast HMR and optimised production builds |
| Browser DevTools  | Debugging — inspects layout, console errors, and network       |

---

**Q3. What technologies were selected for the Arjun MDS web application and why?**

| Layer     | Technology                 | Reason                                                   |
| --------- | -------------------------- | -------------------------------------------------------- |
| Frontend  | React 19 (Vite)            | Component reuse, fast HMR, large ecosystem               |
| Styling   | Bootstrap 5.3 (CDN)        | Responsive grid, navbar, utility classes out of the box  |
| Animation | Framer Motion 12           | Smooth entrance and scroll animations                    |
| Icons     | Lucide React + React Icons | Consistent, lightweight icon sets                        |
| i18n      | Custom JS objects          | Lightweight bilingual (EN/MR) without extra dependencies |

---

**Q4. How was the project initialised? What commands were used and what packages were installed?**

```bash
npm create vite@latest arjun-mds-portfolio -- --template react
npm install framer-motion lucide-react react-icons
```

Bootstrap 5.3 is loaded via CDN in `index.html` — no npm package needed.

---

**Q5. What functional requirements were gathered for the Arjun MDS application?**

- Hero section with instructor tagline, trust stats, and CTA buttons
- About section with instructor credentials and experience
- Services section listing driving training and RTO-related services
- Testimonials section with student reviews and ratings
- Journey/timeline section showing career milestones
- Gallery section with training photos
- Contact section with address, phone, email, map, and contact form
- Bilingual support (English and Marathi)
- Light and dark theme toggle

---

**Q6. What non-functional requirements were identified for the Arjun MDS application?**

- Responsive across all screen sizes (mobile, tablet, desktop)
- Fast load times via Vite production build and CDN-loaded Bootstrap
- Bilingual font switching (DM Sans/Playfair Display for EN, Noto Serif Devanagari for MR)
- Smooth animations without layout shift
- Accessible navigation with proper aria labels

---

**Q7. Define a project and explain its key characteristics.**

A project is a temporary, unique endeavour undertaken to create a specific product, service, or result. It has a defined beginning and end, and is distinct from ongoing operations. Key characteristics:

- **Temporary** — every project has a definite start and finish date
- **Unique** — the outcome is different from all other products or services
- **Progressive elaboration** — details are developed incrementally
- **Purpose-driven** — executed to achieve specific goals or objectives
- **Resource-constrained** — operates within limits of time, cost, and scope
- **Cross-functional** — typically involves people from multiple disciplines

---

**Q8. What is the Project Life Cycle? Explain the five PMBOK Process Groups with their key activities and outputs.**

The Project Life Cycle describes the phases a project passes through from initiation to closure.

| Process Group            | Key Activities                                              | Outputs                                  |
| ------------------------ | ----------------------------------------------------------- | ---------------------------------------- |
| Initiating               | Define project, identify stakeholders, obtain authorization | Project Charter, Stakeholder Register    |
| Planning                 | Define scope, schedule, cost, risk, quality plans           | Project Mgmt Plan, WBS, Schedule         |
| Executing                | Coordinate team, manage comms, procure resources            | Deliverables, Work Performance Data      |
| Monitoring & Controlling | Track progress, manage changes, control scope/schedule/cost | Change Requests, Performance Reports     |
| Closing                  | Finalize deliverables, release resources, lessons learned   | Final Product/Service, Closure Documents |

---

**Q9. What are the core responsibilities of a Project Manager?**

The Project Manager (PM) is responsible for leading the project team to achieve project objectives. Core responsibilities:

- Defining project goals and creating the project management plan
- Building and managing the project team
- Identifying, assessing, and mitigating risks
- Communicating progress to stakeholders and sponsors
- Managing changes to scope, schedule, and budget
- Ensuring quality standards are met throughout the project
- Closing the project and documenting lessons learned

---

**Q10. Who are stakeholders in a project? List and explain the role of each type.**

Stakeholders are individuals or groups who affect or are affected by the project.

| Stakeholder         | Role                                                       |
| ------------------- | ---------------------------------------------------------- |
| Project Sponsor     | Provides funding, removes barriers, champions the project  |
| Customer / Client   | Defines requirements, accepts deliverables, gives feedback |
| Project Team        | Executes tasks, provides estimates, reports progress       |
| Functional Managers | Supply resources, resolve conflicts, support the PM        |
| End Users           | Use the final product; their needs drive requirements      |
| Regulatory Bodies   | Impose compliance, standards, and legal requirements       |

---

**Q11. What is the Triple Constraint in project management? Explain Scope, Time, and Cost and how they are interrelated.**

The Triple Constraint (Iron Triangle) represents the three interdependent limitations of every project. A change in any one constraint affects the other two:

- **Scope** — The work required to deliver the project. Expanding scope without adjusting time or cost leads to quality degradation.
- **Time** — The schedule and deadlines. Compressing time often requires more resources (cost) or reduced scope.
- **Cost** — The budget allocated. Cutting cost may force scope reduction or schedule extension.
- **Quality** — Often added as a fourth constraint; balancing the three above determines the achievable quality level.

A skilled project manager continuously monitors these constraints and makes informed trade-off decisions to keep the project on track.

---

## Assignment 2 — Design and Development of Static Frontend Pages

### Unit II: Project Planning and Estimation

---

**Q1. Which pages were developed in the static frontend and what technologies were used?**

Pages developed: **Home, About, Services, Journey, Testimonial, Gallery, Contact.**

Technologies used: React 19 (Vite) for components, Bootstrap 5.3 (CDN) for responsive layout and utility classes, Framer Motion 12 for scroll-triggered and entrance animations, and per-component CSS files for custom styling.

---

**Q2. How does the Homepage (Home.jsx) render repeated UI elements and handle bilingual content?**

- A local `translations` object is defined at the top of `Home.jsx` with `"en"` and `"mr"` keys. The active language is selected with:

  ```js
  const t = translations[lang] || translations.en;
  ```

  The `lang` prop is passed down from `App.jsx`.

- Trust stats (23+ years, 1000+ students, 4.9+ rating) are rendered directly in JSX as a `<ul>` list using the translated strings from `t`.

- The tagline uses JSX values inside the translation object, wrapping highlighted words in `<span className="highlight-color">` so the same translation key works for both languages with styled output.

- The `key={lang}` attribute on the text container triggers a CSS fade-in animation (`page-wrapper` class) whenever the language changes.

---

**Q3. Explain the scroll-aware transparent Navbar logic implemented in Navigation.jsx.**

- `scrolled` state is initialised to `false`. A `useEffect` adds a scroll event listener: `window.scrollY > 50` sets `scrolled` to `true`, otherwise `false`.
- The navbar `className` switches between `"navbar-transparent"` and `"navbar-solid"` based on the `scrolled` state.
- The top info bar (location, phone, hours, email) also gets a `"top-bar-disappear"` class when scrolled, hiding it on scroll.
- The cleanup function removes the event listener on unmount:
  ```js
  return () => window.removeEventListener("scroll", handleScroll);
  ```
- Mobile navbar collapse is handled by direct DOM manipulation:
  ```js
  document.getElementById("navbarNav").classList.remove("show");
  ```
  This is called via `closeNavbar()` on every nav link click.

---

**Q4. How was responsive design implemented in the Arjun MDS project? Give examples of class usage.**

Bootstrap 5.3's grid and utility classes handle responsiveness:

- `col-12 col-md-7` / `col-12 col-md-4` — full width on mobile, split on desktop (Home hero layout)
- `d-none d-md-flex` — top info bar hidden on mobile, shown on desktop
- `navbar-expand-lg` — hamburger menu on small screens, full nav on large
- `flex-row` / `flex-column` with Bootstrap flex utilities for button layout
- Custom media queries in `index.css` at `max-width: 786px` adjust section padding and `scroll-margin-top` for the fixed navbar height

---

**Q5. What is the CSS color and font scheme used in the Arjun MDS frontend?**

| Property           | Value                                                                    |
| ------------------ | ------------------------------------------------------------------------ |
| Accent / Highlight | `#FFB3A2` (soft coral/peach) — used for `.btn-arjun` and `.highlight-bg` |
| Section BG 1       | Radial gradient from pure white to `#fcf9f2` (bone white)                |
| Section BG 2       | `rgb(253, 244, 242)` (very light pink)                                   |
| Fonts (English)    | DM Sans, Playfair Display, Plus Jakarta Sans (Google Fonts)              |
| Fonts (Marathi)    | Noto Serif Devanagari (Google Fonts)                                     |
| Font switching     | Controlled via `lang-en` / `lang-mr` classes on `document.body`          |

---

**Q6. What is Project Scope Management and what is a Work Breakdown Structure (WBS)? Explain its levels and rules.**

Scope Management ensures the project includes all the work required — and only that work — to complete the project successfully. The key tool is the **WBS**: a hierarchical decomposition of the total scope into manageable work packages.

- **Level 1** — Project (top-level deliverable)
- **Level 2** — Major phases or deliverables (e.g., Design, Development, Testing)
- **Level 3** — Sub-deliverables or features
- **Level 4+** — Work packages (smallest unit; assigned to team members)
- Each WBS element has a unique identifier (e.g., 1.2.3) for traceability
- **The 100% Rule**: the WBS must capture 100% of the project scope — no more, no less

---

**Q7. Explain Function Point Analysis (FPA) as a software effort estimation technique.**

FPA measures software size based on functionality delivered to the user, independent of programming language or technology.

- Count Unadjusted Function Points (UFP) from: External Inputs, External Outputs, External Inquiries, Internal Logical Files, External Interface Files
- Apply Value Adjustment Factor (VAF) based on 14 general system characteristics (e.g., performance, reusability, complexity)
- **Adjusted FP = UFP × (0.65 + 0.01 × VAF)**
- **Effort = FP × Productivity Rate** (hrs/FP based on language and team)

---

**Q8. Explain the Use Case Point (UCP) method for effort estimation.**

Estimates effort based on use cases and actors in a UML model:

- Classify actors as Simple (1 pt), Average (2 pts), Complex (3 pts) → UAW
- Classify use cases: Simple ≤5 (5 pts), Average 6–10 (10 pts), Complex >10 (15 pts) → UUCW
- **UUCP = UAW + UUCW**
- Apply Technical Complexity Factor (TCF) and Environmental Factor (EF)
- **UCP = UUCP × TCF × EF**; Effort = UCP × Productivity (20 hrs/UCP typical)

---

**Q9. Explain COCOMO-II and its three sub-models.**

| Sub-Model               | When Used                               | Formula / Approach                    |
| ----------------------- | --------------------------------------- | ------------------------------------- |
| Application Composition | Early prototyping / RAD                 | Object Points × Productivity Rate     |
| Early Design            | After requirements, before architecture | PM = A × Size^B × EM (5 multipliers)  |
| Post-Architecture       | Detailed design phase                   | PM = A × Size^B × EM (17 multipliers) |

Key parameters: A = 2.94, B (scale factors), EM (effort multipliers: reliability, complexity, team capability). Size measured in KSLOC or Function Points.

---

**Q10. What is a Gantt chart and what is it used for in project scheduling?**

A Gantt chart is a horizontal bar chart that displays project activities against a time axis. Each bar represents an activity; its length represents duration. Dependencies between activities are shown with arrows. Gantt charts are ideal for:

- Communicating the schedule to stakeholders
- Tracking planned vs. actual progress
- Identifying resource conflicts and overlaps
- Showing milestones as diamond markers

---

**Q11. Explain the Critical Path Method (CPM). How are Early Start, Late Start, Float, and the Critical Path calculated?**

CPM is a deterministic scheduling technique that uses single-point (fixed) duration estimates.

- Calculates ES, EF, LS, LF for each activity using forward and backward passes
- **Float / Slack = LS − ES** (or LF − EF). Activities with zero float are on the Critical Path
- The Critical Path is the longest path through the network — it determines project duration
- Compressing the critical path (crashing or fast-tracking) shortens the project

---

**Q12. What is PERT? How does it differ from CPM and what formula is used to calculate expected duration?**

PERT (Program Evaluation and Review Technique) is probabilistic — it uses three time estimates per activity, suited for uncertain projects.

- **Optimistic (O)** — best-case duration
- **Most Likely (M)** — realistic duration
- **Pessimistic (P)** — worst-case duration
- **Expected Duration: tE = (O + 4M + P) / 6**
- **Variance: σ² = ((P − O) / 6)²**

**CPM vs PERT:** CPM uses fixed single estimates for well-understood activities; PERT uses probabilistic estimates when durations are uncertain.

---

## Assignment 3 — Design & Development of Interactive Frontend Form

### Unit III: Risk and Quality Management

---

**Q1. What is the contact form in the Arjun MDS project? Where is it located and what fields does it contain?**

The contact form is located in `Contact.jsx`. It is rendered inside a Bootstrap modal that appears when the user clicks the "Contact Form" button. It captures user input and opens Gmail compose in a new tab using a mailto URL — no backend API call is made.

**Form fields:** Name (text), Email (email), Message (textarea).

---

**Q2. How are controlled inputs implemented in the contact form using React state?**

```js
const [form, setForm] = useState({ name: "", email: "", message: "" });

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
```

Each input has `name`, `value={form[fieldName]}`, and `onChange={handleChange}`. The spread operator copies existing state and only updates the changed field — this single handler works for all inputs.

---

**Q3. How is the contact form submitted and how is the data sent?**

The form does not use a backend API. Instead, `handleSendMail()` constructs a Gmail compose URL with the form data encoded as query parameters:

```js
const subject = encodeURIComponent(`Message from ${form.name}`);
const body = encodeURIComponent(form.message);
const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1
  &to=amolmojad1484@gmail.com&su=${subject}&body=${body}`;
window.open(gmailURL, "_blank");
```

`encodeURIComponent` ensures special characters in the message don't break the URL. The page does not reload; the modal stays open.

---

**Q4. How is the modal (contact form overlay) shown and hidden?**

```js
const [show, setShow] = useState(false);
```

- Clicking the "Contact Form" badge calls `setShow(true)`, rendering the modal with `className="modal fade show d-block"`
- Clicking the backdrop (outer div) calls `setShow(false)` via `onClick`
- `e.stopPropagation()` on the inner `modal-dialog` prevents the backdrop click from firing when clicking inside the form
- The close button (`btn-close`) also calls `setShow(false)`

---

**Q5. How is basic form validation handled before sending?**

Inside `handleSendMail()`, a simple guard checks all fields:

```js
if (!form.name || !form.email || !form.message) {
  alert("Please fill all fields");
  return;
}
```

If any field is empty, an alert is shown and the function returns early without opening Gmail. The browser's native `email` input type handles basic email format checking.

---

**Q6. How is the Google Maps embed implemented in the Contact section?**

A standard HTML `<iframe>` is used with a Google Maps embed URL:

```jsx
<iframe
  src="https://www.google.com/maps?q=Arjun+Driving+School+Nashik&output=embed"
  width="100%"
  height="400"
  loading="lazy"
  title="Location"
/>
```

`loading="lazy"` defers the iframe load until it is near the viewport, improving initial page load performance.

---

**Q7. What is risk identification in software project management? List and explain the key techniques used.**

Risk identification is the process of finding, recognising, and recording risks that could affect the project. Common techniques:

- **Brainstorming** — team generates a broad list of potential risks
- **Delphi Technique** — experts anonymously provide risk inputs through multiple rounds
- **SWOT Analysis** — Strengths, Weaknesses, Opportunities, Threats
- **Checklist Analysis** — uses historical data from previous similar projects
- **Cause-and-Effect (Ishikawa) Diagrams** — trace risks back to root causes
- **Risk Breakdown Structure (RBS)** — hierarchical categorisation of risk sources

---

**Q8. Differentiate between Qualitative and Quantitative Risk Analysis. What tools are used in each?**

**Qualitative Risk Analysis:**
Prioritises risks by assessing their probability and impact on a descriptive scale (Low / Medium / High). The Probability-Impact (P-I) Matrix maps each risk to a risk rating (Red = High, Yellow = Medium, Green = Low).

**Quantitative Risk Analysis:**

- **Expected Monetary Value (EMV)** = Probability × Impact (in currency)
- **Monte Carlo Simulation** — runs thousands of scenarios to produce a probability distribution for project cost and schedule outcomes
- **Decision Tree Analysis** — models choices and their probabilistic outcomes
- **Sensitivity Analysis (Tornado Diagram)** — identifies which risks have the greatest impact on project objectives

---

**Q9. What are the four risk mitigation strategies? Explain each with an example.**

| Strategy | Definition                                     | Example                                               |
| -------- | ---------------------------------------------- | ----------------------------------------------------- |
| Avoid    | Eliminate the threat by changing the plan      | Use a proven library instead of building from scratch |
| Transfer | Shift the impact to a third party              | Purchase insurance; outsource high-risk module        |
| Mitigate | Reduce probability or impact                   | Add automated testing to reduce defect risk           |
| Accept   | Acknowledge the risk; take no proactive action | Allocate a contingency reserve in the budget          |

---

**Q10. Differentiate between Software Quality Assurance (SQA) and Quality Control (QC). What activities fall under each?**

**Quality Assurance (QA)** is process-oriented — it ensures that the right processes are being followed to prevent defects.
**Quality Control (QC)** is product-oriented — it inspects deliverables to find and fix defects.

| Category          | Activities                                                                     |
| ----------------- | ------------------------------------------------------------------------------ |
| Quality Assurance | Process audits, process improvement, standards adherence, reviews, training    |
| Quality Control   | Code reviews, testing (unit/integration/system/UAT), inspections, walkthroughs |
| Defect Prevention | Root cause analysis, process tailoring, checklists                             |
| Defect Detection  | Static analysis, dynamic testing, peer reviews                                 |

---

**Q11. Explain the ISO quality standards relevant to software projects.**

- **ISO 9001:2015** — Quality Management System (QMS); defines requirements for consistent products and services that meet customer and regulatory requirements
- **ISO/IEC 25010** — Software Product Quality Model; defines quality characteristics: Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability
- **ISO/IEC 12207** — Software lifecycle processes standard
- **ISO/IEC 27001** — Information Security Management System (ISMS)

---

**Q12. What is CMMI? Explain its five maturity levels.**

CMMI (Capability Maturity Model Integration) is a process-improvement framework with five maturity levels:

| Level | Name                   | Description                                                   |
| ----- | ---------------------- | ------------------------------------------------------------- |
| 1     | Initial                | Processes are unpredictable, poorly controlled, and reactive  |
| 2     | Managed                | Projects are planned, performed, measured, and controlled     |
| 3     | Defined                | Processes are well-characterised, understood, and proactive   |
| 4     | Quantitatively Managed | Process performance is controlled using statistical methods   |
| 5     | Optimizing             | Continuous process improvement based on quantitative feedback |

---

**Q13. What is a Risk Register? Explain all its key fields and their purpose.**

A Risk Register is a living document that captures all identified risks and their details throughout the project lifecycle.

| Field             | Description                                    |
| ----------------- | ---------------------------------------------- |
| Risk ID           | Unique identifier (e.g., R-001)                |
| Risk Description  | Clear statement of the risk event              |
| Category          | Technical / Schedule / Resource / External     |
| Probability       | Likelihood: Low (1) / Medium (2) / High (3)    |
| Impact            | Effect on objectives: Low / Medium / High      |
| Risk Score        | Probability × Impact                           |
| Risk Owner        | Person responsible for monitoring and response |
| Response Strategy | Avoid / Transfer / Mitigate / Accept           |
| Response Plan     | Specific actions to implement the strategy     |
| Status            | Open / In Progress / Closed                    |

---

## Assignment 4 — Frontend Architecture & Project Monitoring

### Unit IV: Project Monitoring and Tools

> _Note: The Arjun MDS project is a pure frontend static portfolio with no backend API or database. Project-specific questions are answered in the context of the frontend architecture._

---

**Q1. How is the application entry point set up in main.jsx? Explain each line.**

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- `createRoot` — React 19's concurrent rendering API, replaces `ReactDOM.render`
- `document.getElementById('root')` — mounts the app into `<div id="root">` in `index.html`
- `StrictMode` — enables additional runtime warnings during development
- `index.css` — global styles (section utilities, fonts, button classes) loaded before any component

---

**Q2. How is global state managed in App.jsx? What state exists and how is it applied to the DOM?**

`App.jsx` manages two pieces of state via `useState`:

**1. `lang` ("en" | "mr") — toggled by `toggleLang()`**

```js
useEffect(() => {
  document.body.classList.remove("lang-en", "lang-mr");
  document.body.classList.add(lang === "mr" ? "lang-mr" : "lang-en");
}, [lang]);
```

This drives CSS-based font switching via the body class.

**2. `theme` ("light" | "dark") — toggled by `toggleTheme()`**

```js
useEffect(() => {
  document.documentElement.setAttribute("data-bs-theme", theme);
}, [theme]);
```

This uses Bootstrap 5.3's built-in dark mode by setting the `data-bs-theme` attribute on `<html>`.

Both `lang` and `theme` are passed as props to all child components.

---

**Q3. How is the bilingual translation system implemented across components?**

No external i18n library is used. Each component defines a local translations object:

```js
const translations = {
  en: { heading: "My Services", ... },
  mr: { heading: "माझ्या सेवा", ... }
}
const t = translations[lang] || translations.en
```

The `lang` prop is passed from `App.jsx`. The fallback to `translations.en` ensures the component never breaks if an unsupported lang value is passed. Translations can contain JSX values (e.g. `<span className="highlight-color">` inside taglines). There is also a shared `src/translation.js` file, though most components maintain their own local translation objects.

---

**Q4. How is the ServiceCard animation implemented?**

`ServiceCard` uses `setInterval` inside `useEffect` to cycle through list items with a fade in/out effect on a 2.5-second interval. The Services page also has a separate image carousel that rotates background images on a 3-second interval. Both intervals are cleared in the `useEffect` cleanup function to prevent memory leaks when the component unmounts.

---

**Q5. How is Bootstrap loaded and used in this project?**

Bootstrap 5.3 is loaded via CDN in `index.html` — not installed as an npm package:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-..."
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```

The JS bundle includes Popper.js, which powers the navbar collapse toggle. Bootstrap utility classes (`container`, `row`, `col-*`, `d-flex`, `gap-*`, etc.) are used throughout all components for layout and spacing.

---

**Q6. What activities are involved in project progress and performance tracking?**

Monitoring and controlling ensures the project stays aligned with the project management plan. Key tracking activities:

- **Status Meetings** — regular team check-ins to report completed tasks and blockers
- **Milestone Tracking** — measuring delivery of key deliverables on schedule
- **Variance Analysis** — comparing planned vs. actual for scope, schedule, and cost
- **Work Performance Reports** — dashboards, burndown charts, and status reports communicated to stakeholders
- **Change Control** — formal process for evaluating, approving, and integrating changes

---

**Q7. What is Earned Value Management (EVM)? Define all EVM metrics with their formulas and interpretation.**

EVM is an integrated performance measurement technique that combines scope, schedule, and cost data to assess project health objectively.

| Term                   | Formula                     | Meaning                         |
| ---------------------- | --------------------------- | ------------------------------- |
| Planned Value (PV)     | Budget × % Planned Complete | Budgeted cost of work scheduled |
| Earned Value (EV)      | Budget × % Actual Complete  | Budgeted cost of work performed |
| Actual Cost (AC)       | (Actual spend)              | Actual cost incurred            |
| Cost Variance (CV)     | EV − AC                     | Positive = under budget         |
| Schedule Variance (SV) | EV − PV                     | Positive = ahead of schedule    |
| CPI                    | EV / AC                     | >1 good, <1 over budget         |
| SPI                    | EV / PV                     | >1 ahead, <1 behind             |
| EAC                    | BAC / CPI                   | Estimate At Completion          |
| ETC                    | EAC − AC                    | Estimate To Complete            |
| VAC                    | BAC − EAC                   | Variance At Completion          |

---

**Q8. Compare MS Project, JIRA, and Trello as project management tools. When is each used?**

**MS Project:** Full-featured desktop PM tool. Supports Gantt charts, resource levelling, critical path, baseline tracking, and EVM. Ideal for large, complex projects with defined schedules and budgets.

**JIRA:** Issue and project tracking tool by Atlassian. Widely used for Agile teams — supports Scrum boards, Kanban boards, sprint planning, backlog management, epics/stories/tasks, and custom workflows. Integrates with CI/CD pipelines and development tools.

**Trello:** Visual, card-based Kanban tool. Simple and intuitive — boards, lists, and cards represent tasks. Suitable for small teams and personal productivity. Supports Power-Ups (integrations) for added functionality.

---

**Q9. What does a Communications Management Plan define? What types of project reports are commonly produced?**

A Communications Management Plan defines:

| Element            | Description                                       |
| ------------------ | ------------------------------------------------- |
| Stakeholder        | Who needs information                             |
| Information Needed | What type (status, decisions, risks)              |
| Frequency          | When / how often (daily, weekly, milestone-based) |
| Format             | How (email, dashboard, meeting, report)           |
| Owner              | Who is responsible for sending the communication  |

Common report types: Status Report, Progress Report, Variance Report, Forecast Report, Exception Report (issues only), and Lessons Learned Report.

---

## Assignment 5 — Full Project Integration and Deployment

### Unit V: Agile and Contemporary Practices

---

**Q1. How is the single-page layout structured and how does navigation work without a routing library?**

All sections (Home, About, Testimonial, Services, Journey, Gallery, Contact) are rendered as stacked `<section>` elements inside `App.jsx`. There is no React Router or any routing library.

Navigation uses anchor links:

```jsx
<a href="#services">My Services</a>
```

Each section has a matching `id` attribute. The CSS property `scroll-margin-top: 66px` (56px on mobile) on `.cus-section` accounts for the fixed navbar height so sections don't scroll under it.

---

**Q2. How is the theme toggle implemented and applied across the entire application?**

```js
const [theme, setTheme] = useState("light");
useEffect(() => {
  document.documentElement.setAttribute("data-bs-theme", theme);
}, [theme]);
const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
```

Setting `data-bs-theme` on `<html>` activates Bootstrap 5.3's built-in dark mode, which automatically inverts Bootstrap component colours (navbar, cards, modals, etc.) without any additional CSS.

---

**Q3. How is the language toggle implemented and how does it affect fonts?**

```js
const [lang, setLang] = useState("en");
useEffect(() => {
  document.body.classList.remove("lang-en", "lang-mr");
  document.body.classList.add(lang === "mr" ? "lang-mr" : "lang-en");
}, [lang]);
```

CSS rules target these body classes to switch font families:

```css
body.lang-mr {
  font-family: "Noto Serif Devanagari", serif;
}
body.lang-en {
  font-family: "DM Sans", sans-serif;
}
```

All four font families are preloaded via Google Fonts in `index.html` so the switch is instant with no network delay.

---

**Q4. How are the language and theme toggle buttons wired in Navigation.jsx?**

`Navigation` receives `toggleLang` and `toggleTheme` as props from `App.jsx`:

```js
export default function Navigation({ toggleLang, toggleTheme, lang })
```

The language button calls `toggleLang` directly on click:

```jsx
<button className="togglebtn" onClick={toggleLang}>
  <img src="...language.svg" alt="language" />
</button>
```

The theme toggle button exists in the code but is currently commented out. The `lang` prop is also used to select the correct translated nav labels (About Me / माझ्याबद्दल, Services / सेवा, etc.).

---

**Q5. How was the Arjun MDS project built for production and where can it be deployed?**

```bash
npm run build   # outputs optimised static files to dist/
```

Vite performs tree-shaking, code splitting, and asset hashing automatically.

| Layer    | Platform                                                     |
| -------- | ------------------------------------------------------------ |
| Frontend | Vercel (auto-detects Vite, runs `npm run build`)             |
| Frontend | Netlify (same auto-detection)                                |
| Frontend | GitHub Pages (requires base path config in `vite.config.js`) |

No backend server is needed — the entire application is static HTML/CSS/JS.

---

**Q6. What is the Agile Manifesto? State its four core values and summarise the 12 Agile Principles.**

The Agile Manifesto (2001) defines four core values:

- Individuals and interactions **over** processes and tools
- Working software **over** comprehensive documentation
- Customer collaboration **over** contract negotiation
- Responding to change **over** following a plan

The 12 Agile Principles emphasise:

- Early and continuous delivery of valuable software
- Welcoming changing requirements, even late in development
- Deliver working software frequently (weeks rather than months)
- Close daily cooperation between business people and developers
- Projects built around motivated individuals; trust them to get the job done
- Face-to-face conversation is the most efficient form of communication
- Working software is the primary measure of progress
- Sustainable development — maintain a constant pace indefinitely
- Continuous attention to technical excellence and good design
- Simplicity — maximising the amount of work not done
- Self-organising teams produce the best architectures and designs
- Regular reflection and adaptation to become more effective

---

**Q7. Explain the three Scrum roles and their responsibilities.**

| Role               | Responsibilities                                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Product Owner (PO) | Owns the Product Backlog; prioritises features by business value; represents the customer; accepts or rejects sprint output |
| Scrum Master (SM)  | Servant-leader; facilitates Scrum ceremonies; removes impediments; coaches the team on Agile/Scrum practices                |
| Development Team   | Cross-functional, self-organising team (3–9 members); collectively responsible for delivering the sprint goal               |

---

**Q8. Explain the five Scrum ceremonies — their frequency, duration, and purpose.**

| Ceremony             | Frequency            | Duration  | Purpose                                                         |
| -------------------- | -------------------- | --------- | --------------------------------------------------------------- |
| Sprint Planning      | Start of sprint      | ≤ 4 hrs   | Select backlog items; define sprint goal; create sprint backlog |
| Daily Scrum          | Every day            | 15 min    | Sync team: done, planned, blockers                              |
| Sprint Review        | End of sprint        | ≤ 2 hrs   | Demo working software to stakeholders; collect feedback         |
| Sprint Retrospective | End of sprint        | ≤ 1.5 hrs | Inspect process; identify improvements for next sprint          |
| Backlog Refinement   | Mid-sprint (ongoing) | ≤ 2 hrs   | Estimate, detail, and re-prioritise backlog items               |

---

**Q9. What are the Scrum artifacts? Explain each and include Burndown Chart and Velocity.**

| Artifact        | Description                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| Product Backlog | Ordered list of everything needed in the product; owned by the PO; continuously refined                             |
| Sprint Backlog  | Subset of Product Backlog committed to for the sprint + the plan for delivering the sprint goal                     |
| Increment       | Sum of all completed backlog items in a sprint; must meet the Definition of Done (DoD) and be potentially shippable |
| Burndown Chart  | Tracks remaining work in the sprint over time; ideal line vs. actual                                                |
| Velocity        | Average story points completed per sprint; used for release planning                                                |

---

**Q10. What is Kanban? Explain its core principles and how it differs from Scrum.**

Kanban is a visual workflow management method originating from Toyota's lean manufacturing. Core principles:

- **Visualise the workflow** — columns represent states (To Do, In Progress, Done)
- **Limit Work in Progress (WIP)** — each column has a WIP limit to prevent overloading
- **Manage flow** — optimise the speed and smoothness of work items
- **Explicit policies** — define clear criteria for moving items between columns
- **Continuous improvement** — use metrics (cycle time, throughput) to improve
- Unlike Scrum, Kanban has no fixed iterations or mandatory roles

---

**Q11. What is Extreme Programming (XP)? List and explain its core practices.**

XP is an Agile methodology focused on technical excellence and frequent releases in short development cycles.

| Practice               | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| Pair Programming       | Two developers at one computer; one writes, other reviews in real time |
| Test-Driven Dev (TDD)  | Write failing tests first, then write code to pass                     |
| Continuous Integration | Integrate code frequently; automated builds and tests on every commit  |
| Refactoring            | Continuously improve code structure without changing behaviour         |
| Small Releases         | Deliver working software in very short increments                      |
| On-site Customer       | Customer representative embedded with the team                         |
| Collective Ownership   | Any developer can change any part of the codebase                      |
| Coding Standards       | Shared conventions ensure consistency                                  |

---

**Q12. What is DevOps? Explain key DevOps practices and the tools used for each. How does the DevOps lifecycle align with Agile?**

DevOps bridges development and operations teams through cultural practices, automation, and tooling to enable faster, more reliable software delivery.

| Practice                     | Description                             | Common Tools                       |
| ---------------------------- | --------------------------------------- | ---------------------------------- |
| Continuous Integration (CI)  | Auto build and test on every commit     | Jenkins, GitHub Actions, GitLab CI |
| Continuous Delivery (CD)     | Auto deploy tested code to staging      | ArgoCD, Spinnaker                  |
| Infrastructure as Code (IaC) | Provision and manage infra using code   | Terraform, Ansible, CloudFormation |
| Containerisation             | Package apps with dependencies          | Docker, Kubernetes                 |
| Monitoring & Alerting        | Observe system health in production     | Prometheus, Grafana, Datadog       |
| Shift-Left Testing           | Integrate testing early in the pipeline | Selenium, Jest, SonarQube          |

The DevOps lifecycle (Plan → Code → Build → Test → Release → Deploy → Operate → Monitor) aligns with Agile iterations to create a continuous feedback loop between development, delivery, and operations.

---
