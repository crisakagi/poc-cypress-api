import { textFreeform, postResponseHeaders } from '../../fixtures/responseInspection';

/// <reference types="cypress" />

describe("Inspect the response data like caching and headers via POST method", function () {

  beforeEach(() => {
    cy.fixture('responseInspection')
      .then((responseHeaders) => {
        this.responseHeaders = responseHeaders
      })
  })

  it('Should capture status 200', () => {
    postResponseHeaders(textFreeform()).then((response) => {
      expect(response.status).to.equal(200)
    });
  });

  //visualize test fail - dash cypress
  //remove skip
  it.skip('Test should fail', () => {
    postResponseHeaders(textFreeform()).then((response) => {
      expect(response.status).to.equal(401)
    });
  });

  it('Returns a set of response headers from the fixture json', () => {
    postResponseHeaders(textFreeform()).then(() => {
      expect(this.responseHeaders).to.has.keys('Content-Length', 'Content-Type', 'freeform');
      expect(this.responseHeaders.freeform).to.equal(textFreeform());
    });
  });

  it('Returns a set of response headers from the query string', () => {
    postResponseHeaders(textFreeform()).then((response) => {
      expect(response.body).to.exist
      expect(response.status).to.equal(200)
      expect(response.body).to.contain.property('freeform', textFreeform())
      expect(response.body).to.has.keys('Content-Length', 'Content-Type', 'freeform');
    });
  });
})


