class CadastroPage {

    cadastrarUsuario(nome, email, senha, isAdmin=false) {
        cy.get('[data-testid="cadastrar"]').click()

        cy.get('[data-testid="nome"]').type(nome)
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="password"]').type(senha)

        if (isAdmin) {
            cy.get('[data-testid="checkbox"]').click();
        }

        cy.get('[data-testid="cadastrar"]').click()
    };


}

export default new CadastroPage()