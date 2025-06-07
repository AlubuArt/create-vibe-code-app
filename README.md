# create-vibe-app

🚀 **A CLI tool to quickly create Next.js projects optimized for AI-driven development**

`create-vibe-app` creates modern Next.js projects with TypeScript, Tailwind CSS, and AI-assistant configuration out of the box. Each project comes with a `project-plan.md` file and `cursor.yaml` configuration to seamlessly integrate with AI coding assistants like Cursor.

## Features

- ⚡ **Next.js 14** with TypeScript and modern React patterns
- 🎨 **Tailwind CSS** for rapid UI development
- 🤖 **AI-Optimized** with Cursor configuration and project plans
- 📋 **Project Planning** with structured markdown task lists
- 🛠️ **Developer Tools** - ESLint, Prettier, and more
- 🌐 **Remote Project Plans** - Fetch project plans from URLs
- 🚀 **Zero Configuration** - Everything works out of the box

## Quick Start

```bash
# Create a new project
npx create-vibe-app my-awesome-app

# Create project with custom plan from URL
npx create-vibe-app my-app https://raw.githubusercontent.com/user/repo/main/plan.md

# Navigate to your project
cd my-awesome-app

# Start development
npm run dev
```

## Installation

### Global Installation
```bash
npm install -g create-vibe-app
create-vibe-app my-project
```

### One-time Usage (Recommended)
```bash
npx create-vibe-app my-project
```

## Usage

### Basic Usage
```bash
create-vibe-app <project-name> [plan-source]
```

**Arguments:**
- `<project-name>` - Name of the project to create (required)
- `[plan-source]` - Optional URL to fetch project-plan.md from

**Examples:**
```bash
# Basic project creation
create-vibe-app my-blog

# With custom project plan
create-vibe-app my-ecommerce https://example.com/ecommerce-plan.md

# With GitHub raw URL
create-vibe-app my-app https://raw.githubusercontent.com/user/repo/main/project-plan.md
```

### Project Name Requirements
- Only letters, numbers, hyphens, and underscores
- No spaces or special characters
- Examples: `my-app`, `blog_2024`, `ecommerce-site`

## What Gets Created

When you run `create-vibe-app`, you get a fully configured Next.js project:

```
my-project/
├── src/
│   ├── components/
│   │   └── Header.tsx          # Example React component
│   ├── pages/
│   │   ├── _app.tsx            # Next.js app configuration
│   │   └── index.tsx           # Landing page
│   └── styles/
│       └── globals.css         # Global styles with Tailwind
├── public/
│   └── favicon.ico             # Default favicon
├── project-plan.md             # AI-readable project plan
├── cursor.yaml                 # AI assistant configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.js             # Next.js configuration
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
└── README.md                  # Project documentation
```

## AI-Driven Development

Each project is optimized for AI-assisted development:

### Project Plan (`project-plan.md`)
- Structured task list for AI assistants
- Clear instructions and requirements
- Progress tracking with checkboxes
- AI-friendly format and language

### Cursor Configuration (`cursor.yaml`)
- Pre-configured AI assistant rules
- Project-specific context and workflow
- Automatic task execution guidance
- Best practices enforcement

### Getting Started with AI
1. Open your project in Cursor or similar AI-enabled editor
2. Ask your AI assistant to read `project-plan.md`
3. Request implementation of specific tasks
4. AI will follow the structured plan and coding standards

## Remote Project Plans

Fetch project plans from any public URL:

```bash
# GitHub raw file
create-vibe-app my-app https://raw.githubusercontent.com/user/templates/main/blog-plan.md

# Any public markdown file
create-vibe-app my-app https://example.com/project-templates/ecommerce.md
```

**Requirements:**
- URL must be publicly accessible
- Must return plain text/markdown content
- HTTP/HTTPS protocols only

**Fallback:** If URL fetch fails, the default project plan template is used.

## Available Scripts

In any created project, you can run:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## Examples

### Example 1: Simple Blog
```bash
npx create-vibe-app my-blog
cd my-blog
npm run dev
```

### Example 2: E-commerce with Custom Plan
```bash
npx create-vibe-app online-store https://example.com/ecommerce-plan.md
cd online-store
# AI assistant will follow the custom plan
```

### Example 3: Dashboard Project
```bash
npx create-vibe-app admin-dashboard
cd admin-dashboard
# Edit project-plan.md to add dashboard-specific tasks
npm run dev
```

## Tech Stack

Each project includes:

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **AI Configuration** - Cursor.yaml for AI assistants

## Requirements

- **Node.js** >= 18.0.0
- **npm** or **yarn** or **pnpm**

## Troubleshooting

### Common Issues

**"Directory already exists"**
```bash
# Choose a different name or remove existing directory
rm -rf my-project
create-vibe-app my-project
```

**"Invalid project name"**
```bash
# Use only letters, numbers, hyphens, and underscores
create-vibe-app my-valid-project-name
```

**"npm install failed"**
```bash
# Check Node.js version and internet connection
node --version  # Should be >= 18.0.0
npm --version
```

**"Could not fetch project plan from URL"**
- Verify URL is publicly accessible
- Check internet connection
- Default template will be used as fallback

### Getting Help

- Check [GitHub Issues](https://github.com/yourusername/create-vibe-app/issues)
- Review generated project's README.md
- Ensure Node.js and npm are up to date

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Development

To work on `create-vibe-app` itself:

```bash
# Clone and setup
git clone https://github.com/yourusername/create-vibe-app.git
cd create-vibe-app
npm install

# Test CLI locally
node bin/create-vibe-app.js test-project

# Run tests
npm test

# Run e2e validation
node scripts/e2e-test.js
```

## License

MIT - see [LICENSE](LICENSE) file for details.

## Related

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cursor AI Editor](https://cursor.sh/)

---

**Built with ❤️ for AI-driven development** 