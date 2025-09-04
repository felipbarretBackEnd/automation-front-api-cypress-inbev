/// <reference types="cypress"/>
import '../../support/commands'
import produtoPage from '../../support/page-objects/produtos.page'

//const produto = 'xbox'

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.loginComNovoUser()
    })

    it('Deve buscar um produto com sucesso', function() {
        produtoPage.capturaProduto().then((produto) => {
            cy.get('@user').then(({ email }) =>{
                cy.log(`Usuário comum logado: ${email}`);
            })
            const nome = produto.trim();
            produtoPage.buscarProduto(nome);
            cy.contains('h5.card-title.negrito', nome).should('be.visible');
        })
    })
    
    it('Deve adicionar um produto ao carrinho com sucesso', () => {
        produtoPage.selecionarProdutoGrid();
        cy.get('h1').should('contain', 'Lista de Compras');
    })

})