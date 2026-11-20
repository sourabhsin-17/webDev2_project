# CampusBite — Responsive Fixes & Lighthouse Practical

A complete student project package for the visible requirements in the BTBC124 worksheet: mobile-first layout, responsive breakpoints, intrinsic CSS Grid comparison, a deliberately broken starter page, and a corrected final page.

## Folder guide

- `q1-mobile-first/` — Q1 base layout: mobile-first, one-column menu grid, no media queries.
- `q2-q3-responsive/` — Q2 breakpoint version plus `intrinsic-grid.css` as the Q3 alternative.
- `q4-broken-starter/` — Q4 intentionally flawed starter page for the initial Lighthouse audit.
- `final-fixed/` — corrected responsive page to audit after fixes.

## Run the pages in VS Code

1. Extract the ZIP.
2. Open the extracted `CampusBite-Complete` folder in VS Code.
3. Install the VS Code extension **Live Server** if needed.
4. Open the `index.html` in the folder you want to test.
5. Right-click and choose **Open with Live Server**.

Do not open the Q4 broken page as your final submission. It is intentionally broken for comparison.

## Q1 — Mobile-first base layout

Open `q1-mobile-first/index.html`. Its CSS has no media queries and uses a one-column card grid, a 90%-width container, flexible images, rem-based sizing, and roomy full-width navigation links. Test at 320px and 390px in Chrome DevTools. Check that no horizontal page scrolling occurs.

## Q2 — Content-driven breakpoints

Open `q2-q3-responsive/index.html` with `style.css`. The chosen breakpoints are:

- `600px`: navigation can fit horizontally and the hero content and image can sit side-by-side.
- `900px`: three menu cards per row and more generous desktop spacing become comfortable.

These are layout-driven choices. The exact best values should be confirmed by resizing the browser gradually and recording where the content begins to feel cramped.

## Q3 — Intrinsic Grid comparison

In `q2-q3-responsive/style.css`, the media-query grid is:
`repeat(2, minmax(0, 1fr))` at 600px and `repeat(3, minmax(0, 1fr))` at 900px.

For the intrinsic alternative, replace the `.menu-grid` rule with the rule in `intrinsic-grid.css`:
`repeat(auto-fit, minmax(220px, 1fr))`.

Keep the media queries for the navigation and banner. Compare both versions at 390px, 768px and 1280px. Record actual observations in your submission. The intrinsic grid controls card count automatically; the banner and navigation still change design and therefore need media queries.

## Q4 — Broken starter and Lighthouse

`q4-broken-starter/` intentionally contains five deliberate issues:
1. Missing viewport meta tag.
2. `.container { width: 1200px; }` with no responsive maximum.
3. `.banner img { width: 1000px; }` with no responsive maximum.
4. `body { font-size: 12px; color: #b8b8b8; }` (small, low-contrast text).
5. `.nav-links a { padding: 2px; margin-right: 4px; }` (small tap targets).

### Run the initial audit

1. Start the Q4 broken page with Live Server.
2. Open Chrome DevTools → Lighthouse.
3. Choose **Mobile** and the categories Performance, Accessibility, Best Practices and SEO.
4. Run the audit and save a screenshot/export of the report.
5. Record your actual scores in `AUDIT-RESULTS.md`.

### Run the final audit

1. Start `final-fixed/index.html`.
2. Repeat the same Lighthouse settings and conditions.
3. Save the final report and record the actual scores in `AUDIT-RESULTS.md`.
4. Compare the results. Lighthouse scores vary with browser version, device emulation, network and machine load. This package does not claim an audit score that has not actually been measured.

## Important comparison table

Use the template in `AUDIT-RESULTS.md`. Fill it with your own observed values; do not invent scores or screenshots.

## GitHub upload

1. Sign in at https://github.com/.
2. Click **New repository** and name it `CampusBite`.
3. Create the repository.
4. In the repository choose **Add file → Upload files**.
5. Upload the contents of this project folder (folders included), then commit.

Alternatively, use VS Code Terminal from this folder:

```bash
git init
git add .
git commit -m "Complete CampusBite responsive design practical"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/CampusBite.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Create the empty repository on GitHub first.

## Notes

- Food photos are hosted by Unsplash; internet access is needed for them.
- Menu items, prices and the email address are sample content. Replace them if your instructor gave specific content.
- This project implements the visible worksheet requirements. The supplied worksheet screenshot cuts off part of Q4 and does not show any questions below it; check the original complete worksheet for additional requirements.
