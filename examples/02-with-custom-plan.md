# Example 2: With Custom Project Plan

This example demonstrates how to create a project with a custom project plan fetched from a URL.

## Scenario

You're building an e-commerce site and want to use a pre-made project plan that includes specific e-commerce tasks and requirements.

## Setup: Custom Project Plan

First, you would create a custom project plan file (e.g., on GitHub Gist or your repository):

**ecommerce-plan.md:**
```markdown
# E-commerce Project Plan for __PROJECT_NAME__

**Projektbeskrivelse:**
Dette er en e-commerce platform bygget med Next.js, optimeret til AI-drevet udvikling.

## 1. Core E-commerce Features

1.1. **Product Catalog**
- Implementer produktliste med filtering
- Tilføj produktdetaljer side
- Implementer søgefunktionalitet

1.2. **Shopping Cart**
- Opret shopping cart komponent
- Implementer add/remove/update funktionalitet
- Tilføj persisted cart state

1.3. **User Authentication**
- Implementer login/signup
- Tilføj user profil side
- Implementer password reset

## 2. Payment & Checkout

2.1. **Checkout Flow**
- Opret checkout stepper
- Implementer adresse formularer
- Tilføj order summary

2.2. **Payment Integration**
- Integrér Stripe eller lignende
- Implementer payment forms
- Tilføj order confirmation

## 3. Admin Features

3.1. **Product Management**
- Opret admin dashboard
- Implementer product CRUD
- Tilføj inventory tracking

## AI-Assistant Instructions:
- Fokuser på e-commerce best practices
- Implementer mobile-first design
- Prioritér performance og SEO
- Brug moderne payment solutions
```

## Usage

1. **Create project with custom plan:**
   ```bash
   npx create-vibe-app my-ecommerce https://raw.githubusercontent.com/user/templates/main/ecommerce-plan.md
   ```

2. **Navigate and start:**
   ```bash
   cd my-ecommerce
   npm run dev
   ```

## What happens

1. **CLI fetches the custom plan:**
   ```
   🌐 Fetching project plan from URL...
   ✅ Project plan fetched from https://raw.githubusercontent.com/user/templates/main/ecommerce-plan.md
   ```

2. **Custom plan replaces default:**
   - Your `project-plan.md` contains e-commerce specific tasks
   - AI assistant gets e-commerce focused instructions
   - Project structure optimized for e-commerce development

3. **Placeholders get replaced:**
   - `__PROJECT_NAME__` becomes `my-ecommerce` in the fetched plan
   - All configurations are project-specific

## Benefits

- 🎯 **Domain-specific guidance** - AI follows e-commerce best practices
- 📋 **Pre-planned features** - No need to think about what to build
- 🚀 **Faster development** - Skip the planning phase
- 🎨 **Consistent patterns** - Follow proven e-commerce patterns

## Example URLs for different project types

```bash
# Blog project
npx create-vibe-app my-blog https://example.com/plans/blog-plan.md

# Dashboard project  
npx create-vibe-app admin-dash https://example.com/plans/dashboard-plan.md

# SaaS application
npx create-vibe-app my-saas https://example.com/plans/saas-plan.md

# Portfolio site
npx create-vibe-app portfolio https://example.com/plans/portfolio-plan.md
```

## Fallback behavior

If the URL is unreachable:
```
⚠️  Could not fetch project plan from https://example.com/plan.md: HTTP 404: Not Found
   Using default project plan instead.
```

The project will still be created successfully with the default template.

## Best practices for custom plans

1. **Use public URLs** - GitHub raw files, Gist, or public hosting
2. **Keep it simple** - Plain markdown format
3. **Include placeholders** - Use `__PROJECT_NAME__` for customization
4. **Add AI instructions** - Include specific guidance for AI assistants
5. **Structure clearly** - Use headers and task lists for better AI parsing

This approach allows teams to maintain project templates and share best practices across multiple projects! 