HOW TO GENEREATE ALLURE REPORTS

1. install third party report tool
    #npm install -D allure-playwright

2. execute test, pick allure-playwright report type
    #npx playwright test --reporter=line,allure-playwright

3. generate into local folder name allure-results
    #allure generate ./allure-results
   => then allure will showed: Report successfully generated to allure-report

4. open the allure-report
    #allure open ./allure-report

========================
To install Typescript Compiler: #npm install -D typescript
To check Typescript Compiler version: #npx tsc -v //npx is stand for NPM Package eXcuted , it is simply to execute an npm package
To complie TS to JS then execute the JS file:
    #npx tsc demo.ts   //output will be 'demo.js'
    #node demo.js