describe('Cenario 04', ()=>{
    it('Adicionar Cliente', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://practice.automationtesting.in/')
        
        cy.get('li[id="menu-item-50"]').click()
        
        var cliente = {
            email:  'testeJoao1991@gmail.com',
            senha:  '0192837465abc'
        }

        cy.get('input[id="reg_email"]').type(cliente.email)
        cy.get('input[id="reg_passwords"]').type(cliente.senha)

        cy.get('input[name="register"]').click()

        cy.get('div#layout').should('have.text', 'Hello')
    })
})