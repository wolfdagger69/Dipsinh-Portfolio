# Dipsinh Yadav — Portfolio Site (v2: Sales Leader → Senior Manager)

This is a redesign of your portfolio, repositioned around your Team Leader /
sales-leadership resume and your goal of moving into a Senior Manager role.

## What changed from the first version

**Content**
- Headline and summary now speak to leadership and sales impact, not quality/audit.
- Added a "Career target: Senior Manager" stat in the hero stat strip.
- Experience bullets updated to match your latest résumé (more leadership/KPI language).
- Skills regrouped into: People Management & Leadership · Sales & Client Relations ·
  Data & Analytics.
- Download button now points at your updated résumé PDF (converted from the .docx
  you sent).

**Design**
- New palette: warm linen background, deep pine text, with gold + teal + coral used
  as deliberate accents (achievement, growth, energy) instead of the plain grey/ink
  look before.
- New type pairing: **Fraunces** (a lively, expressive serif) for headlines, **Manrope**
  for body text.
- One bold animated gradient glow behind the hero — the "lively" moment — everything
  else stays calm so it doesn't feel busy.
- Timeline now highlights your current role in teal to show it's your active,
  most-senior position — a visual "you are here."
- Skills cards use soft color-tinted gradients instead of flat white boxes.
- Buttons and nav CTA are pill-shaped for a more energetic feel.

## v3: single-file editing, theme switcher, résumé viewer

Borrowed three ideas from the `masterPortfolio` template's approach (its
`portfolio.js` single data file, its `theme.js` palette switching, and its
in-page résumé route) and adapted them to this plain HTML/CSS/JS site —
no React, no build step, no GitHub token required.

### Files
- `index.html` — page structure and headline copy
- `style.css` — all visual design, including the theme color tokens
- `content.js` — **all repeating content** (stats, experience, skills,
  education, contact links, résumé filename) in one place
- `theme.js` — the color palettes and the logic that applies them
- `script.js` — renders `content.js` into the page, plus nav / theme
  button / résumé modal / scroll-reveal behavior
- `Dipsinh_Yadav_Resume.pdf`
- `photo.jpg` — carry over your existing photo (not re-uploaded here)

### How to update your content (the main thing you'll do)
Open `content.js` and edit the plain-English fields — for example, to add
a new job, copy one block inside the `experience` array and fill in
`dateRange`, `title`, `org`, and `bullets`. Save, refresh, done. You do
**not** need to touch `index.html` for new jobs, skills, education lines,
or contact methods — `script.js` rebuilds those sections from this file
automatically on page load.

The headline, hero paragraph, and section titles stay directly in
`index.html` since they change rarely.

### How to change the résumé file
1. Replace `Dipsinh_Yadav_Resume.pdf` with your new file (any name).
2. Open `content.js` and update `resume.file` to the new filename.
Both the download button and the in-page viewer pick it up automatically.

### How to change the color theme
`theme.js` defines named palettes (`paper`, `slate`, `ink`) using the same
token names already in `style.css`. The little circular button in the
header cycles through them live, and remembers the visitor's choice.
To add your own palette, copy one of the existing blocks in `theme.js`,
give it a new name, and set new hex values for all nine tokens. To change
the *default* theme everyone sees first, reorder the keys in the `themes`
object — whichever is listed first loads by default.

### Résumé viewer
Clicking "View résumé" opens your PDF in an in-page modal (no new tab,
no download prompt) — recruiters can preview it in one click. "Download
résumé" still works as before for anyone who wants the file itself.

## Updating your live site

Your site already exists on GitHub (`Dipsinh-Portfolio` repo) and deploys via Netlify.
To update it:

1. Open your `Dipsinh-Portfolio` repo on github.com.
2. Upload these files, replacing the old ones: `index.html`, `style.css`, `script.js`,
   `content.js`, `theme.js`, `Dipsinh_Yadav_Resume.pdf`. When GitHub asks about
   overwriting existing files with the same name, confirm.
3. Your existing `photo.jpg` is already in the repo — you don't need to re-upload it,
   the site points at the same filename.
4. Commit the changes.
5. Netlify is already linked to this repo, so it will auto-redeploy within a minute —
   no extra steps needed on Netlify's side.

Refresh `https://dipsinh-yadav-portfolio.netlify.app/` after a minute to see it live.
