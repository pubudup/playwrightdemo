Playwright/Typescript Boilerplate

Pre-requisites:
1. Install Playwright
2. Install Typescript
3. Install Mocha and Chai

CLI:
npm install -D playwright-cli
npx playwright-cli codegen [URL]

Test cases:
- tests/

Page objects:
- pages/

Test Data:
- resources/

Test Execution:
mocha --timeout 5000000000000000000 -r ts-node/register tests/test.test.ts --grep "TESTCASE DESCRIPTION"


