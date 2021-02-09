export function textFreeform() {
  return 'sent freeform via POST method';
}

export function postResponseHeaders(text) {
  return cy.request({
    method: 'POST',
    url: '/response-headers',
    qs: { 'freeform': `${text}` }
  });
}
