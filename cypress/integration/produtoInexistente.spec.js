describe('Cenario 02', ()=>{
    it('Pesquisar Produto não existente', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://practice.automationtesting.in/')

        var produto = {
            nome:  'itemNãoExistente'
        }

        cy.get('input[id="s"]').type(produto.nome)
        cy.type('{enter}')
        cy.get('div#content.clearfix').should('have.text', 'Sorry, nothing found')
    })
})