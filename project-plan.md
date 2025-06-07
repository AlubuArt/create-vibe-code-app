# Project Plan for create-vibe-app POC

**Produktbeskrivelse:**
`create-vibe-app` er et CLI-værktøj, som hurtigt opretter et Next.js-baseret projekt, der er optimeret til AI-drevet udvikling. CLI'en kopierer en færdig skabelon, henter eventuelt en `project-plan.md` fra en URL, og konfigurerer automatisk linting, tooling og en Cursor-agent, så en AI kan læse planen og implementere opgaverne fra dag ét.

Denne POC indeholder:

* En basal Next.js-template under `templates/next/`.
* Et CLI-script (`bin/create-vibe-app.js`), der kopierer templaten, henter en plan fra URL eller bruger standardplan.
* Automatisk placeholder-erstatning og installation af dependencies.
* En `cursor.yaml`, der instruerer en Cursor-agent i at eksekvere `project-plan.md` som backlog.

> **Når du har gennemført et punkt, skriv "✅" i starten af linjen. Brug AI-assistenten til at generere kode, konfigurationsfiler eller tests efter behov.**

## 1. Repository & Tooling

1.1. **Init Git repo** ✅
✅ - Opret et nyt Git-repository (f.eks. `create-vibe-app-poc`).
✅ - Tilføj en grundlæggende `.gitignore` (Node, VSCode).
1.2. **Opsætning af monorepo/struktur** ✅
✅ - Opret to mapper:
✅ - `bin/` til CLI-script (`create-vibe-app.js`)
✅ - `templates/next/` til din Next.js-starter-skabelon
1.3. **Konfigurer linting & format** ✅
✅ - Tilføj ESLint (`npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`)
✅ - Tilføj Prettier, og config-filer (`.eslintrc.js`, `.prettierrc.js`).

## 2. Template ("next") ✅

2.1. **Opret minimal Next.js-template** under `templates/next/`: ✅
✅ - `package.json` med Next.js, React, Tailwind CSS som afhængigheder
✅ - Tom `project-plan.md` med POC‐tasks (kopiér struktur fra repo-topplan)
✅ - `cursor.yaml` med agent‐instruktion (læs plan → eksekver)
✅ - `src/` med `pages/index.tsx`, `components/Header.tsx` (skelet)
2.2. **Placeholder‐erstatning** ✅
✅ - Brug `__PROJECT_NAME__` i `package.json`, `project-plan.md`, `README.md`

## 3. CLI: copy & replace ✅

3.1. **Parse CLI-args** ✅
✅ - Brug `commander` til at læse:
        `npx create-vibe-app <project-name> [plan-source]`
✅ - Hvis `<plan-source>` ser ud som en URL (http/https), hent markdown og gem som `project-plan.md`.
3.2. **Kopiér template** ✅
✅ - Rekursivt kopier `templates/next/` → `<project-name>/`.
3.3. **Erstat placeholders** ✅
✅ - I filerne `package.json`, `project-plan.md`, `cursor.yaml`, `README.md` udskift `__PROJECT_NAME__` → `<project-name>`.
3.4. **Installer dependencies** ✅
✅ - Kør `npm install` i den nye mappe.

## 4. Fetch fra URL ✅

4.1. **Implementér simpel HTTP-getter** ✅
✅ - Brug `node-fetch` til at hente raw markdown fra URL.
4.2. **Fejlhåndtering** ✅
✅ - Hvis hent fejler (404, timeout), vis en klar fejlmeddelelse og fald tilbage til standard template.

## 5. Cursor‐konfiguration ✅

5.1. **Skriv `cursor.yaml` i template** ✅
✅ - Indhold: agent.role, entrypoint: project-plan.md, instruktioner til sekventiel eksekvering.
5.2. **Placeholder‐erstatning også her** ✅
✅ - Udskift `__PROJECT_NAME__` i `cursor.yaml`.

## 6. Testing & validation ✅

6.1. **CLI‐enhedstest** ✅
✅ - Skriv tests med Jest for at sikre:
✅ - Argument‐parsing
✅ - Template‐kopiering
✅ - Placeholder‐erstatning
✅ - URL‐hent fungerer korrekt (mocked)
6.2. **End-to-end‐test** ✅
✅ - Kør `npx create-vibe-app my-test-project` → tjek at mappen indeholder:
✅ - `project-plan.md` med korrekt navn
✅ - `package.json` installeret dependencies
✅ - `cursor.yaml` med opdateret navn

## 7. Dokumentation & Eksempler ✅

7.1. **README.md** i root ✅
✅ - Beskriv installation, CLI‐brug (`npx create-vibe-app <name> [plan-url]`), preview af skabelonstruktur.
7.2. **Eksemplere** ✅
✅ - Opret en mappe `examples/` med scenarier:
✅ - Uden URL (standard plan)
✅ - Med URL-kald til en custom project plan

## 8. POC-release & feedback

8.1. **Version 0.1.0**
\- Tag den første release i GitHub.
8.2. **Publikér på npm (eller `npx`-brug)**
\- Sæt `package.json#bin` og publicér som `create-vibe-app-poc`
8.3. **Feedback‐runde**
\- Brug AI (ChatGPT) til at revidere scripts, prompts, CLI‐flow baseret på første tests.
