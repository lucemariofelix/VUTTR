# VUTTR - Very Useful Tools to Remember

Esta aplicação foi construída com NodeJs e banco de dados POSTGRES. Ela faz
parte do desafio da Bossabox como requisito no processo de seleção para vagas
de trabalho remoto.

## Rotas

As requisições para a API devem conter o header Content-Type: application/json e o Bearer Token.

Rotas da API:
POST /auth/login : cria uma nova sessão
POST /signup : cadastrar um novo usuário
GET /tools : lista as ferramentas cadastradas
GET /tools/:id : lista uma ferramenta através do seu :id
POST /tools : cria uma nova ferramenta
DELETE /tools/:id : apaga a ferramenta com o :id passado por parâmetro
Para filtrar as ferramentas em GET /tools, é possível:

fazer uma busca por tags individuais utilizando a query string ?tag=:busca.

## Documentação da API

A documentação dos endpoints está disponível nesse endereço:
