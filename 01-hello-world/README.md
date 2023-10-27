# 01HelloWorld - 12/10/2023

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

## Importância das interfaces

- Toda entidade que vamos trabalhar precisa de uma **interface**;
- Isso vai tornar nosso código mais simples ao longo do programa;
- Padronizando ele e **facilitando a manutenção**;
- Vamos implementar uma interface à nossa lista de animais
- E fazer um evento que tabém utilizará este recurso.

## Pipe Operator

- Os **pipe operators** são recursos para trabalhar com strings nos templates
- Podemos realizar **diversas funções**, como deixar o texto em caixa alta;
- A sintaxe é: **{{ dado | algum PipeOperator }}**;
- Desta maneira, nos poupamos de regras de CSS ou manipulação de strings com JS.

## Two way data binding

- O **Two way data binding** é um recurso muito interessante para trabalho com formulários;
- Basicamente conseguimos **alterar props** e o template com o preenchimento de inputs;
- É necessário importar o **FormsModule** no componente principal;
- É também declarar o **ngModel** no input, além de preencher também o atributo name, todos com o mesmo valor.

## Services

- O **Service** é outra oparte fundamental da arquitetura Angular;
- Geralmente ficam as **requisições para as APIs** que utilizamos no projeto;
- Precisamos criar o service com: **ng generate service <nome>;
- Importar no componente e iniciar no **constructor**;
- Depois é possível acessar os métodos dele.