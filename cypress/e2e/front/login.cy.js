/// <reference types="cypress"/>
import loginPage from '../../support/page-objects/login.page';

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.novoUser().as('user');
        cy.novoAdmin().as('admin');
        cy.visit('/')
    });

    it('Deve Logar com sucesso', function() {
        const {email, psw} = this.user;
        loginPage.logar(email, psw)
        cy.get('h1').should('contain', 'Serverest Store');
    });

    it('Fluxo Negativo: Exibir mensagem de erro ao tentar logar com Usuário/ senha inválidos', () => {
        cy.fixture('usuarios').then((dados) => {
            loginPage.logar(dados.email, dados.senhaInvalida);
            cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
        });
    });

    it('Deve Logar como Admin com sucesso', function() {
        const {email,psw} = this.admin;
        loginPage.logar(email, psw)
        cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')
    });
});