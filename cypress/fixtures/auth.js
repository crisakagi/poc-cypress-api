export function bearerToken(token) {
  return `${token}`;
}

export function getBearerToken(token) {
  return cy.api({
    url: '/bearer',
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
}
