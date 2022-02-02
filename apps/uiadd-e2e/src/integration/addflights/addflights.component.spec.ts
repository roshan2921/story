describe('uiadd', () => {
  beforeEach(() => cy.visit('/iframe.html?id=addflightscomponent--primary&args=id;to;from;departure;'));
  it('should render the component', () => {
    cy.get('story-addflights').should('exist');
  });
});