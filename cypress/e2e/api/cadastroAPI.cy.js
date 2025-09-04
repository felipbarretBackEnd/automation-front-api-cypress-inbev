/// <reference types= "cypress" />
import { faker } from '@faker-js/faker'

describe('Teste de API - Cadastro', () => {
    it('Deve Cadastrar Admin na API com sucesso', () => {
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
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')  
        })
    });
})