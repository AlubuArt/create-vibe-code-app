# Project Plan for create-vibe-app v1.0

**Produktbeskrivelse (kort):**
`create-vibe-app` er et CLI-værktøj til lynhurtig oprettelse af projekter skræddersyet til AI-drevet udvikling. Det understøtter flere skabeloner (Next.js, Vercel AI SDK m.fl.), henter en `project-plan.md` (lokal eller fra URL), og konfigurerer automatisk linting, tooling og Cursor-agent, så AI kan eksekvere en detaljeret projektplan fra start.

## Overordnede mål for v1.0

* Udvide template-udvalget betydeligt.
* Gøre CLI’en mere fleksibel med konfigurationer og flags.
* Forbedre dokumentation og onboarding.

## Nye v1.0-features

### 1. Udvidet template-katalog

* Tilføj følgende nye templates under `templates/`:

  * `react`: Create React App + TypeScript + CSS Modules
  * `node-api`: Express.js + TypeScript + ESLint + Jest
  * `python-fastapi`: FastAPI + Pydantic + pytest
  * `vercel-ai`: Next.js + Vercel AI SDK (behold fra Beta)
  * `blog-starter`: Next.js + Markdown-baseret SSG + Tailwind CSS
* Hver template leveres med:

  * `package.json`/`pyproject.toml` med afhængigheder
  * Standard `project-plan.md` til skabelonens typiske use-case
  * `cursor.yaml` med tilpasset agent-manifest (entrypoint → `project-plan.md`)
  * Basis-kode i `src/` eller `app/` mappestruktur

### 2. Forbedret CLI-argumenthåndtering

* `--template <name>`: vælg en f.eks. `react`, `node-api`, `python-fastapi`, `blog-starter`, `vercel-ai` (standard: `next`).
* `--list-templates`: vis en oversigt over tilgængelige templates med kort beskrivelse.
* `--plan <path|url>`: hent projektplan fra lokal sti eller URL (raw markdown). Timeout: 5s.
* `--package-manager <npm|yarn|pnpm>`: vælg pakkehåndtering til installation.
* `--no-install`: spring installation af dependencies over.

### 3. Skabelonspecifikke tilpasninger

* **React-template:** inkluder `src/index.tsx`, `src/App.tsx`, `public/index.html`, CSS-moduler.
* **Node-API-template:** `src/server.ts`, `routes/`, `controllers/`, `tests/` med Jest-konfiguration.
* **Python-FastAPI-template:** `app/main.py`, `app/schemas.py`, `tests/` med pytest setup.
* **Blog-starter:** `pages/`, `posts/` folder med eksempelfiler, `next.config.js` til MDX.

### 4. Advanced Hooks & Extensions

* Under `~/.create-vibe-app/hooks/` muliggør brugertilføjede scripts:

  * `pre-copy.js`: køres før template-kopi
  * `post-create.js`: køres efter opsætning (eks. git init, initial commit)
* Hooks kan definere yderligere tilpasninger (f.eks. custom rename, ekstra filgenerering)

### 5. Forbedret fejlhåndtering & logging

* Centraliseret logger med forskellige niveauer (`info`, `warn`, `error`, `debug`).
* Ved ukendt template: udskriv error og tilgængelige templates.
* Ved HTTP-fejl i `--plan`: fallback til skabelonens indbyggede `project-plan.md` og vis advarsel.
* Hvis `--no-install` ikke er sat, men installation fejler: vis kommandoer til manuel genkøring.

### 6. CI/CD & quality gates

* Automatisk oprettelse af `.github/workflows/ci.yml` i alle templates:

  * Kør build/test lint ved push til `main`.
  * Deployment-skabelon til Vercel/Heroku/AWS baseret på template.

### 7. Dokumentation & Onboarding

* Root `README.md` opdateret med v1.0-kommandoer og flags.
* Hvert template-mappe indeholder en kort `README.md` med detaljer om templaten (scripts, strukturer).
* `docs/overview.md`: Visuel introduktion (diagram) over CLI-flow og template-arkitektur.

### 8. Test-suiter

* **Unit tests:** Jest/Mocha/pytest for core-funktioner (parsing, kopiering, placeholder-substitution, HTTP-fetch).
* **Integration tests:** Kør CLI mod hver template-variant og verificer, at:

  * Strukturen er korrekt
  * Dependencies installerer
  * `project-plan.md` findes og indeholder korrekte projektnavn
* **End-to-end tests:** Simuler brugerflow med `--plan` fra en offentlig gist-URL.

### 9. Release & versionering

* Tag `v1.0.0` når alle kerne-features er implementeret og testet.
* Publicér CLI på npm under `create-vibe-app`.
* Opret GitHub Release med changelog.

> Når du implementerer et punkt, tilføj `✅` i begyndelsen af linjen for at tracke fremskridt.
