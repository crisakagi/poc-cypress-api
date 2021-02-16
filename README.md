# Cypress API test framework
An example repo on how to use `Cypress` to run API integration tests against [httpbin](https://httpbin.org/)

## Libraries and plugins used
- [Cypress](https://www.cypress.io/)
- [cy-api](https://github.com/bahmutov/cy-api) plugin using `auth.spec.js`

## Dependencies
To run the tests, please ensure you have the following installed:
- Node
- NPM
- Docker
`Run docker locally`
`$ docker run -p 80:80 kennethreitz/httpbin`


## How to run
- Clone the repo and Install the project dependencies
`$ npm i`
- To run the tests on your terminal, run
`$ npm run cy:test`
- To run the tests against the Cypress Test Runner, run
`$ npm run cy:open`
- To run the test with Cypress Dashboard, run
`$ npm run cy:record`
- Once the test runner has loaded, click on the spec file you wish to test.
