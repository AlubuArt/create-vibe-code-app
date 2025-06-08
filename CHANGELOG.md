# Changelog

All notable changes to `create-vibe-code-app` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-06-08

### 🎉 Initial Release - Now Available on npm!

This is the first release of `create-vibe-code-app` - a CLI tool for creating Next.js projects optimized for AI-driven development.

**🚀 Now available globally:**
```bash
npx create-vibe-code-app my-project
```

**📦 npm package:** https://www.npmjs.com/package/create-vibe-code-app

### ✨ Added
- **CLI Tool**: Complete command-line interface using `commander`
  - Project creation with `npx create-vibe-code-app <project-name>`
  - Optional URL parameter for custom project plans
  - Argument validation and error handling
  - Colored output with progress indicators

- **Next.js Template**: Modern, production-ready template
  - Next.js 14 with TypeScript
  - Tailwind CSS pre-configured
  - ESLint and Prettier setup
  - Responsive design with example components
  - Beautiful landing page with features showcase

- **AI-Driven Development**: 
  - `.cursor/rules/` configuration for AI assistants (using modern MDC format)
  - Structured `project-plan.md` with task lists
  - AI-friendly project structure and naming
  - Placeholder replacement system (`__PROJECT_NAME__`)

- **Remote Project Plans**:
  - Fetch custom project plans from URLs
  - HTTP/HTTPS support with `node-fetch`
  - Graceful fallback to default template
  - Error handling for network issues

- **Developer Experience**:
  - Automatic dependency installation
  - Pre-configured development scripts
  - Type-safe TypeScript configuration
  - Modern tooling and best practices

- **Testing & Quality**:
  - Comprehensive Jest test suite
  - Unit tests for CLI functionality
  - End-to-end validation script
  - Template validation tests
  - Mock support for network calls

- **Documentation**:
  - Detailed README with examples
  - Usage examples and scenarios
  - Troubleshooting guide
  - Contributing guidelines

### 🛠️ Technical Details
- **Dependencies**: commander, fs-extra, node-fetch, chalk
- **Dev Dependencies**: Jest, ESLint, Prettier, TypeScript tools
- **Node.js**: Requires >= 16.0.0
- **Template**: Next.js 14, React 18, Tailwind CSS 3.4

### 📁 Project Structure
```
create-vibe-code-app/
├── bin/create-vibe-app.js     # Main CLI script
├── templates/next/            # Next.js project template
├── __tests__/                 # Test suite
├── examples/                  # Usage examples
├── scripts/                   # Utility scripts
└── README.md                 # Documentation
```

### 🎯 Features Overview
- 🚀 **Quick Start**: Create projects in seconds
- 🤖 **AI-Ready**: Optimized for AI coding assistants
- 📋 **Structured Planning**: Built-in project management
- 🌐 **Remote Templates**: Fetch plans from URLs
- 💅 **Beautiful UI**: Modern, responsive design
- 🛠️ **Developer Tools**: ESLint, Prettier, TypeScript
- ✅ **Tested**: Comprehensive test coverage

This release provides a solid foundation for AI-driven Next.js development with zero configuration required. 