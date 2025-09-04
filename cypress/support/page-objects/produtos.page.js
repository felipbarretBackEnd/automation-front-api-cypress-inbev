class ProdutosPage {

    capturaProduto(){
        return cy.get('h5.card-title.negrito').first().invoke('text');
    }

    buscarProduto(nomeProduto) {

    cy.get('[data-testid="pesquisar"]').type(nomeProduto);
    cy.get('[data-testid="botaoPesquisar"]').click();

    };

    selecionarProdutoGrid (){
        cy.get('button').contains('Adicionar a lista').eq(0).click();

    }
}

export default new ProdutosPage()