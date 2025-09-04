class LoginPage {
    logar(email, senha) {

    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(senha)

    cy.get('[data-testid="entrar"]').click()
    }
}

export default new LoginPage()
