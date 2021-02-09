import { bearerToken, getBearerToken } from "../../fixtures/auth";
import { token } from "../../fixtures/auth.json";
/// <reference types="cypress" />

describe("Users for authorization using bearer authentication via GET method", function () {

  it('Should capture status 200', () => {
    getBearerToken(bearerToken(bearerToken(token))).then((response) => {
      expect(response.status).to.equal(200)
    });
  })

  it('Should capture status 401', () => {
    cy.api({
      url: '/bearer',
      //so pass failOnStatusCode: false to not fail on bad status codes
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(401);
    })
  });

  it('Should capture the authenticated and token', () => {

    // "this" points at the test context object
    cy.fixture('auth')
      .then((authentication) => {
        // "this" is still the test context object
        this.authentication = authentication
      })

    getBearerToken(bearerToken(token)).then(() => {
      expect(this.authentication.authenticated).to.equal(true);
      expect(this.authentication.token).to.equal(bearerToken(token))
    });
  });
})

