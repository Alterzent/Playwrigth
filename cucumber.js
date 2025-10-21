const config = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/steps/**/*.ts', 'tests/hooks.ts'],
    format: ['progress', 'json:reports/cucumber-report.json'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    dryRun: false,
    failFast: false
  },
  chrome: {
    requireModule: ['ts-node/register'],
    require: ['tests/steps/**/*.ts', 'tests/hooks.ts'],
    format: ['progress', 'json:reports/cucumber-report.json'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    worldParameters: {
      browser: 'chromium',
      headless: false
    }
  },
  headless: {
    requireModule: ['ts-node/register'],
    require: ['tests/steps/**/*.ts', 'tests/hooks.ts'],
    format: ['progress', 'json:reports/cucumber-report.json'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    worldParameters: {
      browser: 'chromium',
      headless: true
    }
  }
};

module.exports = config;