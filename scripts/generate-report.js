const reporter = require('cucumber-html-reporter');
const path = require('path');
const fs = require('fs');

// Ensure reports directory exists
const reportsDir = path.join(__dirname, '../reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const jsonFilePath = path.join(__dirname, '../reports/cucumber-report.json');

// Check if JSON file exists
if (!fs.existsSync(jsonFilePath)) {
  console.log('⚠️  No test results found. Please run tests first with: npm run test');
  console.log('📝 Creating empty report...');
  
  // Create empty JSON structure for when no tests have been run
  const emptyReport = [{
    "description": "",
    "elements": [],
    "id": "no-tests",
    "keyword": "Feature",
    "line": 1,
    "name": "No tests executed",
    "tags": [],
    "type": "feature",
    "uri": "features/empty.feature"
  }];
  
  fs.writeFileSync(jsonFilePath, JSON.stringify(emptyReport, null, 2));
}

const options = {
  theme: 'bootstrap',
  jsonFile: jsonFilePath,
  output: path.join(__dirname, '../reports/cucumber-report.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": process.env.NODE_ENV || "Development",
    "Browser": process.env.BROWSER || "Chromium",
    "Platform": process.platform,
    "Executed": new Date().toISOString(),
    "Framework": "Playwrigth Automation Framework"
  },
  failedSummaryReport: true,
  brandTitle: 'Playwrigth Test Report',
  name: 'Test Automation Results'
};

try {
  reporter.generate(options);
  console.log('✅ HTML report generated successfully at: reports/cucumber-report.html');
  
  // Display quick summary
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
  let totalScenarios = 0;
  let passedScenarios = 0;
  
  jsonData.forEach(feature => {
    if (feature.elements) {
      feature.elements.forEach(scenario => {
        if (scenario.type === 'scenario') {
          totalScenarios++;
          const hasFailedSteps = scenario.steps?.some(step => 
            step.result && step.result.status === 'failed'
          );
          if (!hasFailedSteps) {
            passedScenarios++;
          }
        }
      });
    }
  });
  
  console.log(`📊 Summary: ${passedScenarios}/${totalScenarios} scenarios passed`);
  
} catch (error) {
  console.error('❌ Error generating HTML report:', error);
  process.exit(1);
}