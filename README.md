# Playwrigth Automation Framework

Professional test automation framework using Playwright with Cucumber and TypeScript for end-to-end testing.



## SetupProfessional test automation framework using Playwright with Cucumber and TypeScript for E2E testing.



### Prerequisites

- Node.js (version 14 or higher)

- npm or yarn## SetupProfessional test automation framework using Playwright with Cucumber and TypeScript for E2E testing.This test automation project uses Playwright with Cucumber and TypeScript to perform E2E testing on SauceDemo.



### Installation

```bash

npm install### Prerequisites

npm run install:browsers

```- Node.js (version 14+)



## Commands- npm or yarn## Setup## Initial Setup



### Test Execution

```bash

npm test                # Run tests in headless mode (default)### Installation

npm run test:chrome     # Run tests with Chrome visible

npm run test:headless   # Run tests in headless mode explicitly```bash

```

npm install### Prerequisites### Prerequisites

### Reports and Analysis

```bashnpm run install:browsers

npm run report          # Generate HTML report from existing JSON

npm run test:report     # Execute tests and generate HTML report```- Node.js (version 14+)- Node.js (version 14 or higher)

npm run open:report     # Open HTML report in default browser

npm run analyze         # Display detailed test execution summary

npm run test:analyze    # Execute tests and display analysis

```## Commands- npm or yarn- npm or yarn



### Development

```bash

npm run compile         # Compile TypeScript files### Test Execution

npm run clean          # Remove generated files and directories

npm run install:browsers # Install Playwright browser binaries```bash

```

npm test                # Default headless execution### Installation### Installation

## Project Architecture

npm run test:chrome     # Chrome with GUI

### Directory Structure

```npm run test:headless   # Explicit headless mode```bash1. Clone the repository

src/

├── core/```

│   ├── BrowserManager.ts    # Browser lifecycle management

│   └── TestConfig.ts        # Centralized configurationnpm install2. Install dependencies:

├── interfaces/

│   └── index.ts             # TypeScript interfaces and contracts### Reports and Analysis

├── pages/

│   ├── BasePage.ts          # Abstract base class for all pages```bashnpm run install:browsers   ```bash

│   ├── LoginPage.ts         # Login page implementation

│   └── ProductsPage.ts      # Products page implementationnpm run report          # Generate HTML report from JSON

└── utils/

    ├── CommonUtils.ts       # Shared utility functionsnpm run test:report     # Run tests and generate report```   npm install

    └── TestHelpers.ts       # Test-specific helper functions

npm run open:report     # Open HTML report in browser

tests/

├── steps/npm run analyze         # Display test execution summary   ```

│   └── login.steps.ts       # Cucumber step definitions

└── hooks.ts                 # Test lifecycle hooksnpm run test:analyze    # Run tests and show analysis



features/```## Architecture3. Install Playwright browsers:

└── login.feature            # Gherkin test scenarios



reports/

├── cucumber-report.json     # Raw test execution data### Development   ```bash

└── cucumber-report.html     # Interactive HTML report

```bash

scripts/

├── generate-report.js       # HTML report generatornpm run compile         # TypeScript compilation### Project Structure   npm run install:browsers

└── analyze-report.js        # Test execution analyzer

```npm run clean          # Remove generated files



### Design Patterns Implementation``````   ```



**Factory Pattern**

- `BrowserManager`: Creates and manages browser instances

- `PageFactory`: Creates page object instances## Architecturesrc/



**Singleton Pattern**

- `TestConfig`: Ensures single configuration instance across tests

### Project Structure├── core/## Project Structure

**Template Method Pattern**

- `BasePage`: Provides common page functionality template```



**Dependency Injection**src/│   ├── BrowserManager.ts    

- `TestWorld`: Injects dependencies into step definitions

├── core/

**Page Object Model**

- Encapsulates page elements and actions in dedicated classes│   ├── BrowserManager.ts    │   └── TestConfig.ts        ```



### SOLID Principles Application│   └── TestConfig.ts        



**Single Responsibility Principle**├── interfaces/├── interfaces/WebIoStructure/

- Each class has a single, well-defined purpose

- Clear separation of concerns between layers│   └── index.ts             



**Open/Closed Principle**├── pages/│   └── index.ts             ├── config/

- `BasePage` allows extension without modification

- New page types can be added without changing existing code│   ├── BasePage.ts          



**Liskov Substitution Principle**│   ├── LoginPage.ts         ├── pages/│   └── hooks.ts              # Playwright and Cucumber configuration

- All page implementations can be used interchangeably through interfaces

│   └── ProductsPage.ts      

**Interface Segregation Principle**

- Specific interfaces for different page types and functionalities└── utils/│   ├── BasePage.ts          ├── features/



**Dependency Inversion Principle**    ├── CommonUtils.ts       

- High-level modules depend on abstractions, not concrete implementations

    └── TestHelpers.ts       │   ├── LoginPage.ts         │   └── login.feature         # Test scenarios in Gherkin

## Configuration Management



The framework uses centralized configuration through `TestConfig` singleton:

tests/│   └── ProductsPage.ts      ├── page-objects/

- **Browser Settings**: Type, headless mode, viewport dimensions

- **Timeout Configuration**: Page load, element wait times├── steps/

- **Environment Parameters**: Base URLs, test environment settings

- **Reporting Paths**: Screenshot, video, and report output directories│   └── login.steps.ts       └── utils/│   ├── LoginPage.ts          # Page Object for login page



## Test Data Management└── hooks.ts                 



Structured test data providers ensure maintainable and reusable test scenarios:    ├── CommonUtils.ts       │   └── ProductsPage.ts       # Page Object for products page



**Credential Management**features/

- Valid user credentials for successful login scenarios

- Invalid credential combinations for negative testing└── login.feature                └── TestHelpers.ts       ├── step-definitions/

- Locked and problem user scenarios



**Environment Configuration**

- Test environment-specific settingsreports/│   └── login.steps.ts        # Step implementations

- Browser-specific configurations

- Execution mode parameters├── cucumber-report.json     



## Comprehensive Reporting System└── cucumber-report.html     tests/├── reports/                  # Test reports



### Report Types Available```



**JSON Report** (`reports/cucumber-report.json`)├── steps/├── test-results/             # Screenshots and test videos

- Raw test execution data in structured format

- Suitable for integration with CI/CD pipelines### Design Patterns Applied

- Contains detailed step-by-step execution information

- **Factory Pattern**: BrowserManager, PageFactory│   └── login.steps.ts       ├── cucumber.js               # Cucumber configuration

**HTML Report** (`reports/cucumber-report.html`)

- Interactive visual dashboard with charts and graphs- **Singleton Pattern**: TestConfig

- Detailed scenario breakdown with pass/fail status

- Environment and execution metadata- **Template Method**: BasePage abstract class└── hooks.ts                 ├── tsconfig.json             # TypeScript configuration

- Screenshot attachments for failed scenarios

- **Dependency Injection**: TestWorld context

**Console Analysis**

- Real-time execution summary with key metrics- **Page Object Model**: Structured page representations└── package.json

- Pass/fail rates and execution statistics

- Performance analysis with timing breakdowns



### Report Features### SOLID Principles Implementationfeatures/```



**Execution Metrics**- **Single Responsibility**: Each class has one clear purpose

- Total scenarios executed with pass/fail breakdown

- Step-level execution details and timing- **Open/Closed**: BasePage allows extension without modification└── login.feature            

- Overall test suite performance metrics

- **Liskov Substitution**: All pages implement IPage interface

**Visual Elements**

- Interactive charts and graphs- **Interface Segregation**: Specific interfaces for different page types```##  Available Commands

- Color-coded status indicators

- Expandable scenario details- **Dependency Inversion**: High-level modules depend on abstractions



**Failure Analysis**

- Automatic screenshot capture on test failures

- Detailed error messages and stack traces## Configuration

- Video recordings of test execution (configurable)

### Design Patterns Applied### Running Tests

**Environment Information**

- Test execution timestamp and durationFramework uses centralized configuration management:

- Browser and platform details

- Application version and test environment data- Browser settings- **Factory Pattern**: BrowserManager, PageFactory```bash



### Generating and Viewing Reports- Timeout configurations



**Complete Test and Report Workflow**- Environment-specific parameters- **Singleton Pattern**: TestConfig# Run tests in headless mode (default)

```bash

npm run test:report     # Execute tests and generate HTML report- Reporting paths

npm run open:report     # Open report in default browser

```- **Template Method**: BasePage abstract classnpm test



**Analysis Commands**## Test Data

```bash

npm run test:analyze    # Execute tests with console analysis- **Dependency Injection**: TestWorld context

npm run analyze         # Analyze existing test results

```Structured test data management with dedicated providers:



**Manual Report Generation**- Valid user credentials- **Page Object Model**: Structured page representations# Run tests with Chrome visible

```bash

npm run report          # Generate HTML from existing JSON data- Invalid credential combinations

```

- Test environment configurationsnpm run test:chrome

## Test Scenarios Coverage



The framework includes comprehensive test coverage for:

## Reporting### SOLID Principles Implementation

**Authentication Scenarios**

- Successful login with valid credentials

- Failed login attempts with invalid credentials

- Locked user account handlingThe framework provides comprehensive reporting capabilities:- **Single Responsibility**: Each class has one clear purpose# Run tests in headless mode

- Multiple invalid credential combinations



**Navigation and User Flow**

- Page transitions and redirects### Available Report Types- **Open/Closed**: BasePage allows extension without modificationnpm run test:headless

- Element visibility and interaction

- Error message validation- **JSON Report**: Raw test data in `reports/cucumber-report.json`



## GitHub Actions CI/CD

The project includes comprehensive GitHub Actions workflows for professional development:

### Automated Workflows

**CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
- Multi-browser testing (Chromium, Firefox, WebKit)
- TypeScript compilation validation
- Automated test execution on push/PR
- Artifact management and retention

**Pull Request Validation** (`.github/workflows/pr-validation.yml`)
- Code quality checks and linting
- Smoke test execution
- Bundle size analysis
- Automated PR comments with results

**Code Quality** (`.github/workflows/code-quality.yml`)
- ESLint and Prettier formatting checks
- Security vulnerability scanning
- Code complexity analysis
- Documentation completeness validation

**Test Reports** (`.github/workflows/test-reports.yml`)
- Comprehensive cross-browser test execution
- HTML report generation and publishing
- GitHub Pages deployment
- Test dashboard creation

**Release Management** (`.github/workflows/release.yml`)
- Automated semantic versioning
- Release asset packaging
- Changelog generation
- GitHub release creation

**Security & Dependencies** (`.github/workflows/security.yml`)
- Dependency vulnerability monitoring
- Automated security scans
- License compliance checking
- Automated dependency updates

### GitHub Features

**Dependabot Integration**
- Automated dependency updates
- Security patch management
- Weekly update scheduling

**Issue Templates**
- Bug report templates
- Feature request forms
- Structured issue creation

**Pull Request Templates**
- Comprehensive PR checklists
- Code review guidelines
- Testing verification

### Setting Up CI/CD

1. **Enable GitHub Actions** in repository settings
2. **Configure secrets** (if using external services):
   ```
   SNYK_TOKEN - For security scanning
   ```
3. **Enable GitHub Pages** for test report publishing
4. **Configure branch protection** rules for main branch

### Monitoring and Reports

- **Test Reports**: Available at `https://alterzent.github.io/Playwrigth`
- **Security Scans**: Weekly automated vulnerability checks
- **Code Quality**: Continuous monitoring with detailed reports
- **Dependency Updates**: Automated PR creation for security patches

## Framework Extension Guide- **HTML Report**: Interactive visual report in `reports/cucumber-report.html`- **Liskov Substitution**: All pages implement IPage interface```



### Adding New Page Objects- **Console Analysis**: Detailed execution statistics



1. **Create Page Class**- **Interface Segregation**: Specific interfaces for different page types

   ```typescript

   export class NewPage extends BasePage implements INewPage {### Report Features

     protected url = 'new-page-path';

     // Implement required methods- Test execution summary with pass/fail rates- **Dependency Inversion**: High-level modules depend on abstractions### Development

   }

   ```- Step-by-step execution details



2. **Define Interface**- Performance metrics and timing analysis```bash

   ```typescript

   export interface INewPage extends IPage {- Screenshot capture on failures

     // Define page-specific methods

   }- Video recording capabilities## Commands# Compile TypeScript

   ```

- Environment and browser information

3. **Add to PageFactory**

   ```typescriptnpm run compile

   public static createNewPage(page: Page): NewPage {

     return new NewPage(page);### Generating Reports

   }

   ``````bash### Test Execution



### Adding New Test Scenarios# Execute tests and generate reports



1. **Update Feature File**npm run test:report```bash# Clean generated files

   ```gherkin

   Scenario: New test scenario

     Given initial conditions

     When user performs action# Analyze existing test resultsnpm test                # Default headless executionnpm run clean

     Then expected outcome occurs

   ```npm run analyze



2. **Implement Step Definitions**npm run test:chrome     # Chrome with GUI

   ```typescript

   When('user performs action', async function (this: TestWorld) {# Open HTML report in browser

     // Implementation using page objects

   });npm run open:reportnpm run test:headless   # Explicit headless mode# Install Playwright browsers

   ```

```

### Browser Configuration

```npm run install:browsers

Support for multiple browsers with environment-specific settings:

## Extension

**Supported Browsers**

- Chromium (default)```

- Firefox

- WebKit/SafariFramework designed for easy extension:



**Configuration Options**1. Create new page classes extending BasePage### Development

- Headless/headed execution

- Custom viewport dimensions2. Implement required interfaces

- Video recording settings

- Screenshot capture preferences3. Add corresponding step definitions```bash## Test Scenarios



## Best Practices4. Update feature files with new scenarios

npm run compile         # TypeScript compilation

**Code Organization**

- Keep page objects focused and single-purposenpm run clean          # Remove generated filesThe project includes tests for:

- Use meaningful selector strategies

- Implement proper error handling and logging```- Successful login with valid credentials



**Test Design**- Failed login with invalid credentials  

- Write clear, descriptive scenario names

- Use data-driven testing for multiple inputs## Configuration- Login with locked user

- Implement proper test isolation

- Multiple invalid credential combinations

**Maintenance**

- Regular dependency updatesFramework uses centralized configuration management:

- Code review for new additions

- Performance monitoring and optimization- Browser settings## Configuration



## Troubleshooting- Timeout configurations



**Common Issues and Solutions**- Environment-specific parameters### Supported Browsers



1. **Browser Installation Problems**- Reporting paths- Chromium (default)

   ```bash

   npm run install:browsers- Firefox

   ```

## Test Data- Safari (on macOS)

2. **TypeScript Compilation Errors**

   ```bash

   npm run compile

   ```Structured test data management with dedicated providers:### Reports



3. **Missing Dependencies**- Valid user credentials- Reports are generated in JSON format at `reports/cucumber-report.json`

   ```bash

   npm install- Invalid credential combinations- Failure screenshots are saved in `test-results/screenshots/`

   ```

- Test environment configurations- Test videos are saved in `test-results/videos/`

4. **Report Generation Issues**

   - Ensure JSON report exists before generating HTML

   - Check file permissions in reports directory

   - Verify all dependencies are installed## Reporting## Writing New Tests



**Debug Information**

- Check console output for detailed error messages

- Review screenshot and video artifacts for failed testsAutomated reporting with:1. **Add scenarios in `.feature`**:

- Examine JSON report for step-level execution details
- JSON format test results   ```gherkin

- Screenshot capture on failures   Scenario: My new scenario

- Video recording capabilities     Given I navigate to the login page

- Timestamped artifact naming     When I perform some action

     Then I should see expected result

## Extension   ```



Framework designed for easy extension:2. **Implement steps in `.steps.ts`**:

1. Create new page classes extending BasePage   ```typescript

2. Implement required interfaces   When('I perform some action', async function (this: CustomWorld) {

3. Add corresponding step definitions     // Step implementation

4. Update feature files with new scenarios   });
   ```

3. **Create Page Objects** for new pages in `page-objects/`

## Troubleshooting

If you encounter issues:
1. Make sure browsers are installed: `npm run install:browsers`
2. Compile the project: `npm run compile`
3. Check for TypeScript errors
4. Review logs in case of failures

## Test Credentials (SauceDemo)

- **Valid user**: `standard_user` / `secret_sauce`
- **Locked user**: `locked_out_user` / `secret_sauce`
- **Problem user**: `problem_user` / `secret_sauce`