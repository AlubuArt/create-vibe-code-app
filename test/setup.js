// Test setup file
const fs = require('fs-extra');
const path = require('path');

// Set test timeout
jest.setTimeout(30000);

// Clean up test projects before/after tests
const TEST_PROJECTS_DIR = path.join(__dirname, '..', 'test-projects');

beforeEach(async () => {
  // Ensure test-projects directory exists
  await fs.ensureDir(TEST_PROJECTS_DIR);
});

afterEach(async () => {
  // Clean up any test projects
  if (await fs.pathExists(TEST_PROJECTS_DIR)) {
    await fs.remove(TEST_PROJECTS_DIR);
  }
});

// Global test utilities
global.testUtils = {
  TEST_PROJECTS_DIR,
  createTestDir: async (name) => {
    const testDir = path.join(TEST_PROJECTS_DIR, name);
    await fs.ensureDir(testDir);
    return testDir;
  },
  cleanupTestDir: async (dirPath) => {
    if (await fs.pathExists(dirPath)) {
      await fs.remove(dirPath);
    }
  }
}; 