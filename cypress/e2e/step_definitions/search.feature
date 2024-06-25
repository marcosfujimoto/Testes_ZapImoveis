Feature: Pesquisa

    Pesquisa de imóveis sem login

Scenario: Pesquisa de imóveis sem login
Given Que esteja na página inicial
When selecionar o botão alugar
And Selecionar o campo de preenchimento pesquisar e preencher as informações 
And Selecionar o botão todos os imóveis e selecionar a opção apartamento
And Selecionar o botão Buscar 
And Selecionar o botão Aceita Pets
Then O sitema deve retornar a pesquisa solicitada