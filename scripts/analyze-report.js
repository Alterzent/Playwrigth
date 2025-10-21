const fs = require('fs');
const path = require('path');

class TestReportAnalyzer {
  constructor(jsonReportPath) {
    this.jsonReportPath = jsonReportPath;
    this.reportData = this.loadReportData();
  }

  loadReportData() {
    try {
      const data = fs.readFileSync(this.jsonReportPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading report data:', error);
      return null;
    }
  }

  generateSummary() {
    if (!this.reportData) return null;

    let totalScenarios = 0;
    let passedScenarios = 0;
    let failedScenarios = 0;
    let totalSteps = 0;
    let passedSteps = 0;
    let failedSteps = 0;
    let skippedSteps = 0;
    let totalDuration = 0;

    this.reportData.forEach(feature => {
      feature.elements?.forEach(scenario => {
        totalScenarios++;
        
        let scenarioPassed = true;
        scenario.steps?.forEach(step => {
          totalSteps++;
          totalDuration += step.result?.duration || 0;
          
          switch (step.result?.status) {
            case 'passed':
              passedSteps++;
              break;
            case 'failed':
              failedSteps++;
              scenarioPassed = false;
              break;
            case 'skipped':
              skippedSteps++;
              break;
          }
        });
        
        if (scenarioPassed) {
          passedScenarios++;
        } else {
          failedScenarios++;
        }
      });
    });

    return {
      scenarios: {
        total: totalScenarios,
        passed: passedScenarios,
        failed: failedScenarios,
        passRate: totalScenarios > 0 ? ((passedScenarios / totalScenarios) * 100).toFixed(2) : 0
      },
      steps: {
        total: totalSteps,
        passed: passedSteps,
        failed: failedSteps,
        skipped: skippedSteps
      },
      duration: {
        total: (totalDuration / 1000000000).toFixed(2), // Convert nanoseconds to seconds
        average: totalSteps > 0 ? ((totalDuration / totalSteps) / 1000000).toFixed(2) : 0 // milliseconds
      }
    };
  }

  printSummary() {
    const summary = this.generateSummary();
    if (!summary) {
      console.log('No test data available for summary');
      return;
    }

    console.log('\n' + '='.repeat(60));
    console.log('                 TEST EXECUTION SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total Scenarios: ${summary.scenarios.total}`);
    console.log(`Passed: ${summary.scenarios.passed} | Failed: ${summary.scenarios.failed}`);
    console.log(`Pass Rate: ${summary.scenarios.passRate}%`);
    console.log('-'.repeat(60));
    console.log(`Total Steps: ${summary.steps.total}`);
    console.log(`Passed: ${summary.steps.passed} | Failed: ${summary.steps.failed} | Skipped: ${summary.steps.skipped}`);
    console.log('-'.repeat(60));
    console.log(`Total Duration: ${summary.duration.total}s`);
    console.log(`Average Step Duration: ${summary.duration.average}ms`);
    console.log('='.repeat(60));
  }
}

// Execute if run directly
if (require.main === module) {
  const reportPath = path.join(__dirname, '../reports/cucumber-report.json');
  const analyzer = new TestReportAnalyzer(reportPath);
  analyzer.printSummary();
}

module.exports = TestReportAnalyzer;