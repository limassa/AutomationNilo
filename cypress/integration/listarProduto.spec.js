describe('Cenario 03', ()=>{
    it('Listar Produto', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://practice.automationtesting.in/')
        
        cy.get('li[id="menu-item-40"]').click()
        cy.get('li[class="cat-item cat-item-19 current-cat"]').click()
//
        

        cy.get('ul.products.masonry-done').should('have.text', 'HTML')
    })
})