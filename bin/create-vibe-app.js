#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const TEMPLATE_DIR = path.join(__dirname, '..', 'templates', 'next');

// Initialize modules asynchronously
let chalk, fetch;

async function initializeModules() {
  const [chalkModule, fetchModule] = await Promise.all([
    import('chalk'),
    import('node-fetch')
  ]);
  chalk = chalkModule.default;
  fetch = fetchModule.default;
}

async function createVibeApp(projectName, planSource) {
  // Ensure modules are loaded
  if (!chalk) await initializeModules();
  
  const targetDir = path.resolve(process.cwd(), projectName);
  
  console.log(chalk.blue(`🚀 Creating ${projectName} with create-vibe-app...`));
  
  // Check if directory already exists
  if (fs.existsSync(targetDir)) {
    console.error(chalk.red(`❌ Directory ${projectName} already exists!`));
    process.exit(1);
  }

  try {
    // Step 1: Copy template
    console.log(chalk.yellow('📂 Copying template files...'));
    await copyTemplate(targetDir);
    
    // Step 2: Replace placeholders
    console.log(chalk.yellow('🔄 Replacing placeholders...'));
    await replacePlaceholders(targetDir, projectName);
    
    // Step 3: Fetch project plan from URL if provided
    if (planSource && isUrl(planSource)) {
      console.log(chalk.yellow('🌐 Fetching project plan from URL...'));
      await fetchProjectPlan(targetDir, planSource);
    }
    
    // Step 4: Install dependencies
    console.log(chalk.yellow('📦 Installing dependencies...'));
    await installDependencies(targetDir);
    
    // Success message
    console.log(chalk.green('\n✅ Project created successfully!'));
    console.log(chalk.cyan('\n🎯 Next steps:'));
    console.log(chalk.cyan(`   cd ${projectName}`));
    console.log(chalk.cyan('   npm run dev'));
    console.log(chalk.cyan('\n🤖 AI-ready features:'));
    console.log(chalk.cyan('   • Check project-plan.md for your development backlog'));
    console.log(chalk.cyan('   • cursor.yaml is configured for AI assistants'));
    console.log(chalk.cyan('   • Start coding with your AI assistant!'));
    
  } catch (error) {
    console.error(chalk.red(`❌ Error creating project: ${error.message}`));
    
    // Cleanup on error
    if (fs.existsSync(targetDir)) {
      console.log(chalk.yellow('🧹 Cleaning up...'));
      fs.removeSync(targetDir);
    }
    
    process.exit(1);
  }
}

async function copyTemplate(targetDir) {
  try {
    await fs.copy(TEMPLATE_DIR, targetDir, {
      filter: (src) => {
        // Skip node_modules and other build artifacts
        const relativePath = path.relative(TEMPLATE_DIR, src);
        return !relativePath.includes('node_modules') && 
               !relativePath.includes('.next') &&
               !relativePath.includes('dist');
      }
    });
  } catch (error) {
    throw new Error(`Failed to copy template: ${error.message}`);
  }
}

async function replacePlaceholders(targetDir, projectName) {
  const filesToReplace = [
    'package.json',
    'project-plan.md', 
    'cursor.yaml',
    'README.md',
    'src/components/Header.tsx',
    'src/pages/index.tsx'
  ];
  
  for (const file of filesToReplace) {
    const filePath = path.join(targetDir, file);
    
    if (await fs.pathExists(filePath)) {
      try {
        let content = await fs.readFile(filePath, 'utf8');
        content = content.replace(/__PROJECT_NAME__/g, projectName);
        await fs.writeFile(filePath, content, 'utf8');
      } catch (error) {
        throw new Error(`Failed to replace placeholders in ${file}: ${error.message}`);
      }
    }
  }
}

async function fetchProjectPlan(targetDir, url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const content = await response.text();
    const projectPlanPath = path.join(targetDir, 'project-plan.md');
    
    await fs.writeFile(projectPlanPath, content, 'utf8');
    console.log(chalk.green(`✅ Project plan fetched from ${url}`));
    
  } catch (error) {
    console.warn(chalk.yellow(`⚠️  Could not fetch project plan from ${url}: ${error.message}`));
    console.warn(chalk.yellow('   Using default project plan instead.'));
  }
}

async function installDependencies(targetDir) {
  try {
    const originalCwd = process.cwd();
    process.chdir(targetDir);
    
    // Check if npm is available
    try {
      execSync('npm --version', { stdio: 'ignore' });
    } catch (error) {
      throw new Error('npm is not installed. Please install Node.js and npm first.');
    }
    
    console.log(chalk.gray('   Running npm install...'));
    execSync('npm install', { 
      stdio: 'pipe', // Hide npm output to keep our output clean
      encoding: 'utf8'
    });
    
    process.chdir(originalCwd);
  } catch (error) {
    throw new Error(`Failed to install dependencies: ${error.message}`);
  }
}

function isUrl(string) {
  try {
    new URL(string);
    return string.startsWith('http://') || string.startsWith('https://');
  } catch {
    return false;
  }
}

// CLI setup - wrapped in async function
async function setupCLI() {
  // Initialize modules first
  await initializeModules();
  
  program
    .name('create-vibe-app')
    .description('Create a Next.js project optimized for AI-driven development')
    .version('0.1.0')
    .argument('<project-name>', 'name of the project to create')
    .argument('[plan-source]', 'optional URL to fetch project-plan.md from')
    .action(async (projectName, planSource) => {
      // Validate project name
      if (!projectName) {
        console.error(chalk.red('❌ Project name is required'));
        process.exit(1);
      }
      
      // Basic validation for project name
      if (!/^[a-zA-Z0-9_-]+$/.test(projectName)) {
        console.error(chalk.red('❌ Project name can only contain letters, numbers, hyphens, and underscores'));
        process.exit(1);
      }
      
      await createVibeApp(projectName, planSource);
    });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error(chalk.red('❌ Unhandled Rejection at:'), promise, 'reason:', reason);
    process.exit(1);
  });

  // Parse CLI arguments
  program.parse();
}

// Start the CLI
setupCLI().catch(error => {
  console.error('Failed to initialize CLI:', error);
  process.exit(1);
}); 