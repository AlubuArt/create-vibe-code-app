# Project Plan for create-vibe-app Beta

**Produktbeskrivelse (gentagelse):**
`create-vibe-app` er et CLI-værktøj, som hurtigt opretter nye Next.js-baserede projekter optimeret til AI-driven udvikling via en `project-plan.md` og Cursor-agent. Version Alpha er allerede udgivet – her følger de opgaver, der skal udvikles i Beta.

## Beta-Features

1. **Template-udvalg (`--template` flag)**

   * Tilføj understøttelse af `--template <template>` i CLI-parsing.
   * Liste af standardtemplates: `next`, `vercel-ai` (Next.js med Vercel AI SDK)

2. **`vercel-ai`-template**

   * Opret ny template under `templates/vercel-ai/`:

     * `package.json` indeholder `@vercel/ai` og nødvendige peer-deps
     * Eksempelkald i `src/api/ai.ts` for Vercel AI SDK
     * Tilpasset `project-plan.md` med relevante Beta-opgaver: f.eks. "Implementér AI-chat endpoint"

3. **Dynamisk template-katalog**

   * Implementer `--list-templates` flag, som viser alle tilgængelige templates fra `templates/`-mappen.

4. **URL-baseret projektplan (beta fallback)**

   * Håndtér `plan-source`-argument som enten lokal fil eller URL:

     * Hvis URL: hent markdown; timeout efter 5s; fallback til standardskabelon hvis fejl.

5. **Opdateret `cursor.yaml`-placeholder**

   * Sørg for at alle templates genererer `cursor.yaml` med korrekt `--template`-reference og entrypoint til `project-plan.md`.

6. **Udvidet fejlhåndtering og bruger-feedback**

   * Ved manglende template: vis “Tilgængelige templates: ...”
   * Ved HTTP-fejl: vis “Kunne ikke hente plan, bruger default”
   * Ved ugyldigt flag: vis help-tekst med eksempler.

7. **Opdateret dokumentation**

   * README.md: tilføj sektion om `--template` og `--list-templates`
   * Dokumenter `vercel-ai`-template og et eksempel-kald til Vercel AI SDK

8. **Beta-testing**

   * Skriv integrationstest (Jest) for alle CLI-flow:

     * `create-vibe-app NAME --template next`
     * `create-vibe-app NAME --template vercel-ai`
     * `create-vibe-app NAME --list-templates`
     * `create-vibe-app NAME https://valid.url/plan.md`

> Når du har implementeret et Beta-task, tilføj `✅` foran linjen her i filen.
