# Dipsinh Yadav — Portfolio Site

No build step, no paid tools. Files:
- `index.html`
- `style.css`
- `script.js`
- `Dipsinh_Yadav_Resume.pdf` — your actual résumé, wired up to the "Download résumé" button
- `photo.jpg` — **you need to add this one yourself** (see below)

## Add your photo before publishing

The hero section expects a file named exactly **`photo.jpg`** in the same folder as `index.html`.

1. Pick a clear, front-facing photo from your phone's gallery.
2. Rename it to `photo.jpg` (any photo app or your phone's file manager can rename files —
   or just re-save/export it with that name).
3. A portrait-orientation photo (taller than wide) will fit the layout best.
4. Drop it into this folder before you upload everything to GitHub, or upload it separately
   into the same repo afterward.

If you'd rather use a different filename or a `.png`, just open `index.html`, find the line
`<img src="photo.jpg" ...>`, and change `photo.jpg` to your filename.

## Publish it free with GitHub Pages (all on your phone)

1. Go to **github.com**, sign in (or create a free account), tap the **+** → **New repository**.
   Name it e.g. `dipsinh-portfolio`. Keep it Public. Create it.
2. In the empty repo, tap **"Add file" → "Upload files"**, and upload `index.html`, `style.css`,
   `script.js`, `Dipsinh_Yadav_Resume.pdf`, and your `photo.jpg` from this folder.
3. Commit the upload.
4. Go to the repo's **Settings → Pages**.
5. Under "Build and deployment", set **Source** to **Deploy from a branch**, branch **main**,
   folder **/(root)**. Save.
6. Wait ~1 minute, then your site is live at:
   `https://<your-username>.github.io/dipsinh-portfolio/`

## Editing later

Open the repo on github.com in Chrome, press the `.` key (or change the URL from
`github.com/...` to `github.dev/...`) to open the full code editor in your browser.
Edit a file, then use the source-control icon to commit — GitHub Pages redeploys
automatically within a minute or two.

## Notes

- Fonts (Source Serif 4, IBM Plex Sans) load free from Google Fonts — no download needed.
- No contact form backend is wired up; the Email and Phone buttons use `mailto:` and `tel:`
  links, which open the visitor's own email/phone app directly — zero cost, zero setup.
- Update the phone number, email, and copy directly in `index.html` any time.
