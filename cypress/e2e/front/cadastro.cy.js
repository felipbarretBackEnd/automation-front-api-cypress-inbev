/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../../support/page-objects/cadastro.page';

describe('Funcionalidade: Cadastro', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email(nome);
    const senha = faker.internet.password();
    const admin = faker.person.firstName();
    const emailAdmin = faker.internet.email(admin);

    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        //cy.screenshot()
    })

    it('Deve cadastrar Usuário Comum com sucesso.', () => {
        cadastroPage.cadastrarUsuario(nome, email, senha)
        cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')
    })

    it('Fluxo negativo - Deve exibir mensagem de erro ao cadastrar usuário já cadastrado.', () => {
        cadastroPage.cadastrarUsuario(nome, email, senha)
        cy.get('.alert').should('contain', 'Este email já está sendo usado')
    })

    it('Deve cadastrar Admin com sucesso.', () => {
        cadastroPage.cadastrarUsuario(admin, emailAdmin, senha, true)
        cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')
    })

    it('Fluxo negativo - Deve exibir mensagem de erro ao cadastrar Admin já cadastrado.', () => {
        cadastroPage.cadastrarUsuario(nome, email, senha, true)
        cy.get('.alert').should('contain', 'Este email já está sendo usado')
    })
})