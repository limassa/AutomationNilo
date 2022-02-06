describe('Home Page', ()=>{
    it('site deve estar disponível', ()=>{
        cy.viewport(1440, 900)
        //cy.visit('http://practice.automationtesting.in/')
        cy.visit('http://practice.automationtesting.in/')
    })
})