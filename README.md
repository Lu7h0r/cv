# Alex Bautista — CV

Bilingual (EN/ES) data-driven CV for Alex Bautista. Static HTML/CSS/JS — no build step.

## Live

- **Vercel:** [cv.abautixta.com](https://cv.abautixta.com)
- **Deploy mirror:** `abx-lab/Documentation/deploy/` (shared hosting)

## Local preview

```bash
cd /Users/abautixta/Dev/cv-abx
python3 -m http.server 8080
# open http://localhost:8080/cv.html
```

## Structure

| File | Purpose |
|------|---------|
| `cv.html` | Entry point |
| `cv.js` | Data + renderer (`DATA` object) |
| `cv.css` | Layout, print/PDF styles |
| `logos/` | Client logos (local, no hotlink) |
| `vercel.json` | Static deploy config |

## Edit workflow

1. Update content in `cv.js` → `DATA`
2. Preview locally and test print/PDF (button bottom-right)
3. Commit + push to `main` (Vercel auto-deploys)
4. Sync changed files to `abx-lab/Documentation/deploy/`

## Print / PDF

Use the **PDF** button or browser print (`Cmd+P`). Optimized for US Letter via `@media print` in `cv.css`.
