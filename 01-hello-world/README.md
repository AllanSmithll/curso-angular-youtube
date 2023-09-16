# 01HelloWorld

## Compartilhamento de dados

- Em Angular, podemos compartilhar dados do componente pai com o componente filho;
- Para isso, usarei o exemplo de chamada do componente o nome do dados que será recebidoo com a seguinte sintaxe: [dado];
- E no código .ts do componente filho vou utilizar o decorator @input, que tem papel entregar o dado para o template

## Diretivas

- Em Angular, temos um recurso chamado *diretivas*;
- Que podem realizar diversas funções no sistema, como aplicr estilos a um elemento
- Elas começam sempre com ng, o nome fica: ngAlgumaCoisa;
- Vamos ver na prática

## Renderização condicional

- É possível exibir determinado conteúdo por meio de uma condicional;
- Utilizar a diretiva ngIf para isso;
- Os valores podem ser dinâmicos (propriedades), mas podemos realizar outros tipos de comparação
- Há a possível também de imprimir um cenário para validação de falso, com o else.