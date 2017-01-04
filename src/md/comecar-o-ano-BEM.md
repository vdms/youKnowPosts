# Começando o ano BEM

Ano passado, o QuickLessons começou a passar por inúmeras e profundas mudanças. Para manter essas novas áreas e componentes organizados, escaláveis e sempre legíveis definimos algumas regras na forma de escrever o CSS.

Pode-se dividir as regras relacionadas a CSS em dois grandes blocos: as de formatação de código e as de convenção de nomenclatura para seletores. Sobre essas últimas que falarei hoje.

A metodologia que utilizamos no QL é a **Bloco, Elemento e Modificador**, comumente conhecida como **BEM**. Ela foi [desenvolvida](https://en.bem.info/) pelo time da Yandex, com o intuito de ajudar os desenvolvedores a entenderem melhor a relação entre HTML e CSS dos projetos.

## As três partes

* O **bloco** que é uma abstração em alto nível de um componente. Cada **bloco** deve ser considerado como o elemento pai. Um exemplo é o botão de um site ou aplicação: _.btn { }_
* Os itens "filhos" do bloco, **elementos**, que devem ser colocados sempre dentro do elemento pai e são indicados por dois _underscores_: _.btn__price { }_. Um bloco pode ter vários elementos e os elementos sempre dependem do bloco.
* Por fim, os **modificadores**, que manipulam o bloco de forma a mudar o tema ou estilo de um componente sem influenciar outros elementos com os quais não possui relação alguma. A indicação de modificadores é feita por meio de dois hifens, após o nome do bloco. Por exemplo: _.btn--success { }_ .

Juntando as três partes em um código CSS teremos:

```css
/* Bloco */
.btn {}

/* Elemento que depende do bloco para existir */
.btn__price {}

/* Modificador que atua no estilo do bloco*/
.btn--success {}
.btn--lg {}
```

E o markup poderia ser algo como:

```html
<button class="btn btn--lg btn--success" onclick="subscribe()">
  <span class="btn__text">Assinar por</span>
  <span class="btn__price">R$15,99</span>
</button>
```

Veja um exemplo no Codepen abaixo:

<!-- inserir codepen http://codepen.io/vdms/pen/mRydYK -->

Se outro desenvolvedor tivesse escrito o código acima e eu não fosse muito familiar com o CSS, ainda assim seria possível ter uma boa ideia da responsabilidade de cada classe e de como elas dependem umas das outras.

Essa **separação de responsabilidades**, principalmente no que toca os modificadores, é bastante bacana para evitar replicação de código. Um exemplo pode ser visto abaixo:

### Não utilizando BEM (24 linhas)

```css
.btn-default {
    background-color: #dedede;
    border: 0px solid transparent;
    border-radius: .25em;
    display: inline-block;
    font-size: 14px;
    padding: .75em 1.5em;
}

.btn-success {
    background-color: #8bc34a;
    border: 0px solid transparent;
    border-radius: .25em;
    display: inline-block;
    font-size: 14px;
    padding: .75em 1.5em;
}

.btn-error {
    background-color: #e51c53;
    border: 0px solid transparent;
    border-radius: .25em;
    display: inline-block;
    font-size: 14px;
    padding: .75em 1.5em;
}
```

### Utilizando BEM (14 linhas de código)

```css
/* Bloco */
.btn {
    background-color: #dedede;
    border: 0px solid transparent;
    border-radius: .25em;
    display: inline-block;
    font-size: 14px;
    padding: .75em 1.5em;
}

/* Modificador que atua no estilo do bloco*/
.btn--success {
    background-color: #8bc34a;
}

.btn--error {
    background-color: #e51c53;
}
```

Observação: No HTML usaremos "btn btn--success" ou invés de apenas "btn-success". Não há problema algum em utilizar mais de uma classe em um mesmo elemento.

## Por que utilizar BEM

Agora que vimos as partes que constam na metodologia, podemos listar algumas possíveis vantagens em usá-la:

* Se quiser criar um novo estilo de um componente, é fácil ver **todos os modificadores e elementos** que já existem pertencentes àquele bloco. Pode ser que você nem precise escrever mais nenhum CSS porque já existirá um modificador fazendo o que você precisa.

* Se estivermos lendo o _markup_ ao invés do CSS, poderemos ter uma rápida ideia de **que parte depende de outra** (como vimos no exemplo que .btn__text depende de .btn), ainda que não saibamos o que ele faz.

* Designers e desenvolvedores podem nomear com consistência os componentes de forma a facilitar a comunicação entre os membros do time. Em outras palavras, BEM auxilia a todos que estão no projeto a estarem sempre na mesma página quanto ao comportamento e estilos de cada bloco da aplicação.

Além disso, [Harry Roberts](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces) acrescenta que isto aumenta a confiança dos designers e desenvolvedores para lidar com códigos antigos e desconhecidos, que geralmente as pessoas não querem mexer com medo de _bugar_ alguma outra área da aplicação, pois não sabem até onde os efeitos daquela modificação chegarão.

Com mais confiança e clareza, levamos menos tempo para modificar e atualizar os componentes. Ainda que não seja perfeita, ela fornece uma base sólida para escrevermos códigos de fácil manutenção no futuro.

## Classes e mais classes

A proposta do BEM é utilizar somente classes (sem ID's, tags ou atributos) como seletores. Isso faz com que **a especificidade dos seletores seja sempre baixa** e plana, o que é [uma boa ideia](https://css-tricks.com/strategies-keeping-css-specificity-low/). Quem mexe com CSS sabe o quanto podemos acabar brigando com a especificidade dos seletores e sim, **!important**, estou de olho em você.

## Sem BEM, o mundo do CSS está perdido

Não! Você pode muito bem escrever bom CSS sem BEM, utilizando outras metodologias à sua escolha, como: [SMACSS](https://smacss.com/), [OOCSS](http://oocss.org/), [INUIT](https://github.com/inuitcss) ou criar sua própria regra. O que sugiro é que ao menos tenha diretrizes guiando o trabalho do time para que o código se mantenha coeso e fácil de fazer manutenção.

## Para o BEM e avante

A preocupação com a nomenclatura de classes é um de tantos recursos que utilizamos para manter nosso CSS organizado.

Escrevemos cada componente em seu próprio arquivo e juntamos todos antes de enviar para produção. Eles seguem uma ordem de importação chamada de Triângulo Invertido, ou ITCSS, proposta pelo Harry Roberts. Você pode conferi-la [nesse vídeo](https://www.youtube.com/watch?v=1OKZOV-iLj4).

Além disso, usamos SCSS ao invés de _CSS vanilla_, o que nos permite utilizar mixins, variáveis, funções de cor etc, facilitando e flexibilizando o nosso CSS. Em outra publicação apresentarei um pouco do SCSS.

Se leu até aqui, parabéns e obrigado! Espero que tenha ajudado a entender um pouco sobre a abordagem que escolhemos para nomear nossas classes.

Até a próxima.

## Referências

* [CSS Tricks](https://css-tricks.com/bem-101/)
* [The BEM project website](https://en.bem.info/)
* [Side effects in CSS](http://philipwalton.com/articles/side-effects-in-css/)
* [Chaining BEM modifiers](http://philipwalton.com/articles/side-effects-in-css/)
* [BEM principles](http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/)
* [More transparent UI code with namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces)