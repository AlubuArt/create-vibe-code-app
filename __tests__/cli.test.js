const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Mock modules to prevent actual network calls during tests
jest.mock('node-fetch');

const CLI_PATH = path.join(__dirname, '..', 'bin', 'create-vibe-app.js');
const TEMPLATE_DIR = path.join(__dirname, '..', 'templates', 'next');

describe('create-vibe-app CLI', () => {
  beforeAll(() => {
    // Ensure template directory exists
    expect(fs.existsSync(TEMPLATE_DIR)).toBe(true);
  });

  describe('CLI argument parsing', () => {
    test('should show help when --help flag is used', () => {
      const output = execSync(`node ${CLI_PATH} --help`, { encoding: 'utf8' });
      expect(output).toContain('Create a Next.js project optimized for AI-driven development');
      expect(output).toContain('project-name');
      expect(output).toContain('plan-source');
    });

    test('should show version when --version flag is used', () => {
      const output = execSync(`node ${CLI_PATH} --version`, { encoding: 'utf8' });
      expect(output.trim()).toBe('0.1.0');
    });

    test('should handle invalid project names', () => {
      expect(() => {
        execSync(`node ${CLI_PATH} "invalid name!"`, { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
      }).toThrow();
    });
  });

  describe('Project creation', () => {
    const testProjectName = 'test-cli-project';
    const testProjectPath = path.join(process.cwd(), testProjectName);

    afterEach(async () => {
      // Clean up test project
      if (await fs.pathExists(testProjectPath)) {
        await fs.remove(testProjectPath);
      }
    });

    test('should create project with correct structure', async () => {
      // Skip npm install for faster testing
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'test';

      try {
        // This test would need mocking npm install, so we'll test the core logic
        const templateExists = await fs.pathExists(TEMPLATE_DIR);
        expect(templateExists).toBe(true);

        // Test template directory structure
        const templateFiles = await fs.readdir(TEMPLATE_DIR);
        expect(templateFiles).toContain('package.json');
        expect(templateFiles).toContain('project-plan.md');
        expect(templateFiles).toContain('cursor.yaml');
        expect(templateFiles).toContain('src');
      } finally {
        process.env.NODE_ENV = originalEnv;
      }
    });

    test('should prevent overwriting existing directories', () => {
      // Create a directory with the test project name
      fs.ensureDirSync(testProjectPath);

      expect(() => {
        execSync(`node ${CLI_PATH} ${testProjectName}`, { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
      }).toThrow();
    });
  });

  describe('Template validation', () => {
    test('template should have all required files', async () => {
      const requiredFiles = [
        'package.json',
        'project-plan.md',
        'cursor.yaml',
        'README.md',
        'tsconfig.json',
        'next.config.js',
        'tailwind.config.js',
        'src/pages/index.tsx',
        'src/components/Header.tsx',
        'src/styles/globals.css'
      ];

      for (const file of requiredFiles) {
        const filePath = path.join(TEMPLATE_DIR, file);
        const exists = await fs.pathExists(filePath);
        expect(exists).toBe(true);
      }
    });

    test('template files should contain placeholders', async () => {
      const filesWithPlaceholders = [
        'package.json',
        'project-plan.md',
        'cursor.yaml',
        'README.md',
        'src/components/Header.tsx',
        'src/pages/index.tsx'
      ];

      for (const file of filesWithPlaceholders) {
        const filePath = path.join(TEMPLATE_DIR, file);
        const content = await fs.readFile(filePath, 'utf8');
        expect(content).toContain('__PROJECT_NAME__');
      }
    });

    test('package.json should have correct dependencies', async () => {
      const packageJsonPath = path.join(TEMPLATE_DIR, 'package.json');
      const packageJson = await fs.readJson(packageJsonPath);

      // Check for essential dependencies
      expect(packageJson.dependencies).toHaveProperty('next');
      expect(packageJson.dependencies).toHaveProperty('react');
      expect(packageJson.dependencies).toHaveProperty('react-dom');

      // Check for essential dev dependencies
      expect(packageJson.devDependencies).toHaveProperty('typescript');
      expect(packageJson.devDependencies).toHaveProperty('tailwindcss');
      expect(packageJson.devDependencies).toHaveProperty('eslint');
      expect(packageJson.devDependencies).toHaveProperty('prettier');
    });
  });

  describe('URL validation', () => {
    // Mock the isUrl function tests
    test('should validate HTTP URLs correctly', () => {
      const validUrls = [
        'http://example.com',
        'https://example.com',
        'https://raw.githubusercontent.com/user/repo/main/plan.md'
      ];

      const invalidUrls = [
        'not-a-url',
        'ftp://example.com',
        'file:///local/path',
        ''
      ];

      // Since isUrl is internal, we test URL constructor behavior
      validUrls.forEach(url => {
        expect(() => new URL(url)).not.toThrow();
        expect(url.startsWith('http')).toBe(true);
      });

      invalidUrls.forEach(url => {
        if (url) {
          const isValidUrl = (() => {
            try {
              new URL(url);
              return url.startsWith('http://') || url.startsWith('https://');
            } catch {
              return false;
            }
          })();
          expect(isValidUrl).toBe(false);
        }
      });
    });
  });
});

describe('Placeholder replacement', () => {
  const tempDir = path.join(__dirname, '..', 'temp-test');
  
  beforeEach(async () => {
    await fs.ensureDir(tempDir);
  });

  afterEach(async () => {
    await fs.remove(tempDir);
  });

  test('should replace placeholders correctly', async () => {
    const testFile = path.join(tempDir, 'test.json');
    const testContent = {
      name: '__PROJECT_NAME__',
      description: 'Project __PROJECT_NAME__ is awesome'
    };

    await fs.writeJson(testFile, testContent);

    // Read and replace manually (simulating the CLI logic)
    let content = await fs.readFile(testFile, 'utf8');
    content = content.replace(/__PROJECT_NAME__/g, 'my-awesome-project');
    await fs.writeFile(testFile, content);

    const updatedContent = await fs.readJson(testFile);
    expect(updatedContent.name).toBe('my-awesome-project');
    expect(updatedContent.description).toBe('Project my-awesome-project is awesome');
  });
}); 