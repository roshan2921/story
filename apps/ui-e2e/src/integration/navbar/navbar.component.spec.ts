describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('story-navbar').should('exist');
  });
});