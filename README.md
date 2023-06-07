# API, REST E RESTFUL

Cliente (Client)
Garçon (pedidos, levar seus pedidos, para a cozinha) (API)
Cozinha (Server)

Acronimo de Application Programing Interface (Interface de Programação de Aplicação) é basicamente um conjunto de rotinas e padroes estabelicidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

# REST

/* 
-Analogia-
Restaurante Limpinho,
Que te atenda bem,
Te dê aquilo que vc pediu.

Cliente não pode, pedir Gritando, Xingando. 
*/

Um Acrônimo para Representational State Transfer ( Transferência de Estado Representativo)

Será feita a transferência de dados de maneira simbólica, figurativa, representativa, de maneira didática.

A transferência de dados, geralmente, usando protocolo HTTP.

O Rest, delimita algumas obrigações nessas transferências de dados.

Resources seria então, uma entidade, um objeto.

### 6 NECESSIDADES (constraints) para ser RESTful

- _Cliente-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para Web e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Exemplo possível, utilizar tokens para comunicações.

 - _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

 - _Layered System_: 
https://graph.facebook.com/youtube
|---------URI------------||endpoint|

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente;

## RESTful

RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint

### VERBOS HTTP

- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource.

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found!
- 5xx: Server Error
  500: Internal Server Error

## MATERIAL DE REFERÊNCIA BASE
https://www.youtube.com/watch?v=ghTrp1x_1As&t=70s