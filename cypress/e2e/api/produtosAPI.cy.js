/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker'

const apiUrl = `${Cypress.env("apiUrl")}/produtos`
var produto = `${faker.commerce.productName()}-${Date.now()}`

describe('Teste de API em Produtos', () => {

    let token
    beforeEach(() => {
        cy.novoAdmin().then(({email, psw}) => {
            cy.token(email, psw).then(tkn => {
                token = tkn
            })
        })
    })

    it('Lilstar produtos usando - GET', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env("apiUrl")}/produtos`,
        }).should((response)  => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
    })

    it('Cadastrar produto - POST', () => {
        cy.request({
            method: 'POST',
            url: apiUrl,
            headers: {authorization: token},
            body: {
                "nome": produto,
                "preco": 210,
                "descricao": "consul",
                "quantidade": 500,
            }
        }).should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        })
    })

    it('Fluxo Negativo - Cadastrar produto sem token - POST', () => {
        cy.request({
            method: 'POST',
            url: apiUrl,
            failOnStatusCode: false,
            body: {
                "nome": "Logitech MX Vertical",
                "preco": 470,
                "descricao": "Mouse",
                "quatidade": 381,
            }
        }).should((response)  => {
            expect(response.status).equal(401)
            expect(response.body.message).to.have.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais")
        })
    })
})