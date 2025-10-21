const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../reports/cucumber-report.json'),
  output: path.join(__dirname, '../reports/cucumber-report.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Development",
    "Browser": process.env.BROWSER || "Chromium",
    "Platform": process.platform,
    "Executed": new Date().toISOString()
  },
  failedSummaryReport: true,
  brandTitle: 'Playwright Cucumber Test Report',
  name: 'Test Automation Results'
};

try {
  reporter.generate(options);
  console.log('HTML report generated successfully at: reports/cucumber-report.html');
} catch (error) {
  console.error('Error generating HTML report:', error);
  process.exit(1);
}