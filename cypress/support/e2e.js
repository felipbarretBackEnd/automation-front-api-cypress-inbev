import './commands'

afterEach(function () {
  if (this.currentTest?.state === 'failed') {
    // aguarda “assentar” (útil no headless)
    cy.wait(100);

    // garante que o documento ainda está pronto
    cy.document({ log: false })
      .its('readyState')
      .should('eq', 'complete');

    // retorna o comando para o Mocha esperar o término
    return cy.screenshot(
      `FAIL - ${this.currentTest.fullTitle()}`,
      { capture: 'runner', timeout: 60000, overwrite: true }
    );
  }
});
