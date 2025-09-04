import { faker } from '@faker-js/faker'

Cypress.Commands.add('login', ( email, senha ) => {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(senha)
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('loginComNovoUser', () => {
  return cy.novoUser().then(({ email, psw }) => {
    cy.visit('/');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(psw);
    cy.get('[data-testid="entrar"]').click();
    cy.wrap({ email, psw }).as('user') ;
  });
});

Cypress.Commands.add('novoAdmin', () => {
    const email = faker.internet.email()
    const psw = faker.internet.password()

    cy.request({
        method: 'POST', 
        url: `${Cypress.env("apiUrl")}/usuarios`,
        body: {
            "nome": faker.person.firstName(),
            "email": email,
            "password": psw,
            "administrador": "true"
        }
    }).then((response) => {
        return {email, psw}   
    })
})

Cypress.Commands.add('novoUser', () => {
    const email = faker.internet.email()
    const psw = faker.internet.password()

    cy.request({
        method: 'POST', 
        url: `${Cypress.env("apiUrl")}/usuarios`,
        body: {
            "nome": faker.person.firstName(),
            "email": email,
            "password": psw,
            "administrador": "false"
        }
    }).then((response) => {
        return {email, psw}   
    })
})

Cypress.Commands.add('token', ( email, psw ) => {
    return cy.request({
        method: 'POST', 
        url: `${Cypress.env("apiUrl")}/login`,
        body: {
            "email": email,
            "password": psw
        }
    }).then(response => {
        return response.body.authorization
    })
})