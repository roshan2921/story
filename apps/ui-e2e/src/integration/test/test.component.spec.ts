describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcomponent--primary'));
  it('should render the component', () => {
    cy.get('story-test').should('exist');
  });
});