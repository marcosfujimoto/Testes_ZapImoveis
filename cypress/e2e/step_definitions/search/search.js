import {Given, When,And, Then} from 'cypress-cucumber-preprocessor/steps'

Given('Que esteja na página inicial',() => {
  cy.visit('https://www.zapimoveis.com.br/')
});

When('selecionar o botão alugar',()=> {
    cy.get('[data-cy=aluguel-tab]')
        .click() 
})
 
And('Selecionar o campo de preenchimento pesquisar e preencher as informações necessárias',()=>{
    cy.get('input[placeholder="Digite o nome da rua, bairro ou cidade"]')
     .type('São Paulo');
    cy.get('[data-cy=aluguel-tab]')
    .click();
})

And('Selecionar o botão todos os imóveis e selecionar a opção apartamento', ()=> {
    cy.contains('button', 'Todos os imóveis')
      .click();
    cy.get('[data-testid="undefined-item-0-0"]')
      .click();

})

And ('Selecionar o botão Buscar ', ()=> {
    cy.contains('button', 'Buscar')
    .click();

})

And ('Selecionar o botão Aceita Pets ', ()=> {
    cy.contains('button', 'Aceita Pets')
    .click();

})

Then ('O sitema deve retornar a pesquisa solicitada',()=>{

})
