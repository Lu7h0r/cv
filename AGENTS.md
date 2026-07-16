# AGENTS.md — cv-abx

Guía para agentes trabajando en el CV bilingüe de Alex Bautista (`cv.abautixta.com`).

## Proyecto

| Campo | Valor |
|-------|-------|
| Repo | `Lu7h0r/cv` → `/Users/abautixta/Dev/cv-abx/` |
| Live | https://cv.abautixta.com |
| Stack | HTML estático + CSS + JS vanilla (sin build) |
| Idiomas | EN/ES — paridad total en `DATA` |

## Arquitectura

| Archivo / carpeta | Rol |
|-------------------|-----|
| `cv.js` | Fuente de verdad del contenido (`DATA` + renderer) |
| `cv.css` | Layout, tema, `@media print` (US Letter) |
| `cv.html` | Preview local |
| `index.html` | Entry point en cPanel (shell modular → `cv.js`) |
| `logos/` | Logos de clientes locales (18 archivos) |
| `cpanel-deploy/` | Paquete listo para upload (gitignored, ~31 archivos) |
| `vercel.json` | Legacy — **no es el hosting de prod** |

## Deploy (prod = cPanel, no Vercel)

1. Editar `cv.js` (y assets si aplica).
2. Preview: `python3 -m http.server 8080` → http://localhost:8080/cv.html
3. Commit + push a `main` en GitHub.
4. Regenerar `cpanel-deploy/` (copiar `index.html`, `cv.js`, `cv.css`, `logos/`, imágenes raíz, `.htaccess`).
5. Subir **contenido** de `cpanel-deploy/` al document root de cPanel (no la carpeta).
6. Sync secundario: `/Users/abautixta/Dev/abx-lab/Documentation/deploy/` (copia manual).

Ver `cpanel-deploy/DEPLOY.md` para checklist cPanel.

## Estructura del CV

- **Featured Projects** — capacidades arquitectónicas de alto nivel (NDA-safe).
- **Experience** — case studies con contexto de empleador.
- **Client showcase B2B Magento (5):** apdprinting, wholesalepocketfolders, canadascorecards, prestofolders, presentationfolders.
- **Roles:** Devir = rol principal; Wholesale Pocket Folders = contractor independiente; uTravel = proyecto independiente.
- **Inglés:** "Technical English" / "Inglés técnico" — sin inflar nivel.
- **AI sidebar:** Cursor, Claude Code, Codex, MCP, AI Agents, Prompt Engineering.

## Convenciones

- Todo el contenido vive en `DATA` dentro de `cv.js` — no duplicar en HTML.
- Logos siempre locales en `logos/` — **nunca** hotlinkear favicons externos.
- Cambios pequeños y aislados; probar toggle EN/ES y botón PDF antes de deploy.
- Commits: Conventional Commits en inglés; sin `Co-Authored-By`.

## No hacer

- No asumir Vercel como prod (cPanel + Cloudflare + LiteSpeed).
- No commitear `cpanel-deploy/` (está en `.gitignore`).
- No subir a cPanel: `.git`, `.cursor`, `README.md`, `vercel.json`, `cv.html`.
- No inventar nivel de inglés ni detalles NDA en proyectos.
- No sobrescribir el CV con contenido de terceros — repo restaurado en `98980c5` (Feb 2026).

## Comandos

```bash
cd /Users/abautixta/Dev/cv-abx
python3 -m http.server 8080
# http://localhost:8080/cv.html
```
