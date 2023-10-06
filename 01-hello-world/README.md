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

## Eventos

- Podemos ativar eventos nos componentes para disparar algum método;
- Um evento clássico que utilizamos mito é o click;
- A sintaxe é: (click)="algumaFuncao()";
- Os métodos ficaam na classe;
- Usado para acessar APIs

## Emitindo eventos

- Podemos comunicar eventos de um componente filho para o pai;
- Para isso, vamos precisar do **@Output**, que vai fazer a saída do evento do componente filho;
- **Na tag de invocação do componente no template**, escolhemos um método para executar quando o evento for emitido;
Exemplo: `(emit)="onEmit()"`

## Renderização de listas

- Outro recurso importante é o *loop* em listas;
- Para isso, vamos precisar de uma **propriedade com os itens da lista**;
- E no template do componente, vamos utilizar o *ngFor*;
- A sintaxe é: ***ngFor="let item of items"**
- Desta maneira, podemos renderizar template baseado em dados.