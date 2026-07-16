# CLAUDE.md — cv-abx

Contexto para Claude Code al editar el CV de Alex Bautista.

## Qué es esto

CV bilingüe estático (EN/ES) sin build step. Contenido en `cv.js` → objeto `DATA`. Prod en **cPanel** (`cv.abautixta.com`), no Vercel.

| Path | Uso |
|------|-----|
| `/Users/abautixta/Dev/cv-abx/` | Repo git (`Lu7h0r/cv`) |
| `cpanel-deploy/` | Paquete upload cPanel (gitignored) |
| `abx-lab/Documentation/deploy/` | Copia secundaria manual |

## Cómo editar `cv.js`

1. Abrí `cv.js` y localizá `const DATA = { ... }`.
2. Cada sección tiene pares `en` / `es` — **siempre** actualizar ambos.
3. Experiencia nueva → array `experience`; proyecto destacado → `featuredProjects`.
4. Logo de cliente → archivo en `logos/` y referencia local (ruta relativa).
5. Preview: `python3 -m http.server 8080` → http://localhost:8080/cv.html
6. Verificá: toggle idioma, impresión/PDF (botón inferior derecho).

### Tono NDA (Featured Projects vs Experience)

| Sección | Qué va | Qué NO va |
|---------|--------|-----------|
| **Featured Projects** | Capacidades, stack, escala, outcome genérico | Nombres internos, métricas confidenciales, arquitectura propietaria |
| **Experience** | Empleador, rol, fechas, bullets con contexto | Secretos de cliente, credenciales, datos financieros |

Ejemplo correcto: "Led Magento 2 B2B platform migration for multi-store wholesale client" — sin revelar internals.

## Sync post-edición

```
cv-abx/  ──git push──►  GitHub (Lu7h0r/cv)
    │
    ├──► cpanel-deploy/     (regenerar + subir a cPanel)
    └──► abx-lab/Documentation/deploy/  (copia manual)
```

Archivos a sincronizar: `index.html`, `cv.js`, `cv.css`, `logos/`, imágenes raíz, `.htaccess`.

## Deploy checklist (cPanel)

- [ ] Contenido de `cpanel-deploy/` en document root (no la carpeta)
- [ ] Carpeta `logos/` completa subida
- [ ] No subir `cv.html`, `vercel.json`, `.git`, `README.md`
- [ ] Hard refresh (Cmd+Shift+R) o ventana privada
- [ ] Verificar logos, EN/ES, PDF

Detalle: `cpanel-deploy/DEPLOY.md`.

## Decisiones de esta sesión (referencia)

- Wholesale Pocket Folders agregado (Magento Full-Stack, Dec 2024 – Sep 2025).
- 5 plataformas B2B Magento en showcase.
- Inglés: "Technical English" / "Inglés técnico".
- Roles: Devir (primary), WPF (contractor), uTravel (independiente).
- Repo restaurado tras overwrite externo: commit `98980c5`.

## Restricciones

- Sin build, sin deps nuevas, sin refactors fuera de scope.
- Sin commits automáticos salvo pedido explícito.
- Sin `Co-Authored-By` en commits.
- Logos locales obligatorios — nunca URLs externas de favicons.
