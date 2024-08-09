How to start Allure Playwright

1. install third party report tool
    #npm install -D allure-playwright

2. execute test, pick allure-playwright report type
    #npx playwright test --reporter=line,allure-playwright

3. generate into local folder name allure-results
    #allure generate ./allure-results
   => then allure will showed: Report successfully generated to allure-report

4. open the allure-report
    #allure open ./allure-report