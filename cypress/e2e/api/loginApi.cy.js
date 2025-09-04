/// <reference types= "cypress" />

describe('Teste de API - Login', () => {
    it('Deve realizar login em API com sucesso', () => {
        cy.novoAdmin().then(({email, psw}) => {
            cy.request({
                method: 'POST',
                url: `${Cypress.env("apiUrl")}/login`,
                body: {
                    "email": email, 
                    "password": psw
                }
            }).should((response) => {
            expect(response.body.message).to.equal('Login realizado com sucesso')
            }) 
        })
    })

    it('Fluxo Negativo - Deve exibir mensagem de erro ao informar email/ senha inválido', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("apiUrl")}/login`,
            failOnStatusCode: false,
            body: {
                "email": "user@teste.com", 
                "password": "SenhaInválida"
            }
        }).should((response) => {
        expect(response.status).equal(401)    
        expect(response.body.message).to.equal('Email e/ou senha inválidos')
        }) 
    })
})