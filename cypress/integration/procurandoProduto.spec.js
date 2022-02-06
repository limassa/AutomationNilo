describe('Cenario 01', ()=>{
    it('Procurando Produto', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://practice.automationtesting.in/')

        var produto = {
            nome:  'HTML'
        }

        cy.get('input[id="s"]').type(produto.nome)
        cy.type('{enter}')
    })
})