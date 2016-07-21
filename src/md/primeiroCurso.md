# Meu primeiro curso

[Em uma publicação](https://youknow.afferolab.com.br/youknow/app/#/seam/viewBlog.seam?cid=271986&personId=857579&blogId=851837&conversationPropagation=none#j_idt130:4:j_idt132) comentei que integro a equipe do QuickLessons e que estamos trabalhando em **profundas mudanças** nele. Aqui trabalhamos com três públicos-alvo: *administradores de contra*, *criadores de conteúdo* e os *usuários que irão consumir o curso exportado*.

Para melhor entender o contexto dos *criadores de conteúdo*, conversei com a equipe e me ofereci para criar um curso online. Acredito que essa experiência, aliada à entrevistas e observações de uso, ajudará na **identificação de problemas** e **possíveis soluções** a serem cuidados pelo QuickLessons em sua nova versão.

Como a *criação de conteúdo* de um curso não faz parte do escopo, utilizarei um conteúdo já existente como base: um folheto da Affero Lab, cujo título é Guia rápido de Desenvolvimento de Conteúdos Light.

Vale ressaltar que **a maior parte do QuickLessons ainda está antiga**. A principal implicação desse legado está na área de estilos do curso, a qual ainda não foi refeita.

Isto posto, **mãos à obra**.

## Esqueleto

Acredito que devo iniciar a montagem do curso por sua estrutura, para ter a visão geral do curso que será montado. O QuickLessons não oferece uma ajuda ou predefinições para montar um curso. Você deve manualmente criar níveis de acordo com sua necessidade, incluindo introduções, conclusões e exercícios/avaliações.

Ainda irei consultar DI's sobre boas práticas, mas na minha cabeça um curso deve ter uma introdução e uma conclusão, além do conteúdo... claro. Dessa forma, a estrutura ficou assim:

- Introdução
- Público-alvo
- Objetivos
- Arquitetura
- Conteúdo
- Objetos de aprendizagem
- Avaliação
- Conclusão

> Optei por não incluir exercícios no curso para não ter que **gerar conteúdo**. No futuro, se alguém quiser levar adiante o curso, sinta-se a vontade! Será ótimo ter um curso básico de DI aqui no youKnow.

A estruturação em si foi simples, embora um pouco confusa: por vezes criei um nível como filho (um dentro do outro) e não como irmão (no mesmo nível hierárquico). Tudo rapidamente corrigido com "cliques e arrastes".

![Na imagem, o nível 'Avaliação' está erradamente dentro do nível 'Objetos de aprendizagem'](http://i.imgur.com/Fff0wtA.png)

> O processo foi um pouco repetitivo e tem margem para aprimoramento. Imaginando que essa estrutura já existe digitada em algum outro canto (Word, PPT, e-mail...), ela poderia ser reaproveitada de alguma forma.

## Primeiras telas

Ao tentar montar a primeira tela, senti a necessidade de impor algumas regras a este experimento, para que eu tenha as limitações mais próximas as dos outros usuários. Dessa forma:

- Somente poderei utilizar as tipografias oferecidas pelo QuickLessons;
- Não poderei utilizar CSS no código fonte das caixas de texto para mudar nenhuma aparência;
- Somente poderei utilizar imagens disponíveis na Internet, uma vez que o QuickLessons visa atender produtores independentes, que muitas vezes não possuem equipe de design;

Logo de cara, não encontro nenhuma tipografia que realmente me satisfaça. Todas as disponíveis são aquelas opções que vem com os sistemas operacionais: Arial, Times New Roman, Trebuchet etc. De qualquer forma, sigo com a **Georgia**.

> Com tantas tipografias *open source* por aí, como as oferecidas pelo [Google Fonts](https://fonts.google.com/),  o QuickLessons pode/deve se aproveitar de tipografias mais interessantes.

## Reaproveitamento de efeitos

Efeitos? Sim! O QuickLessons em sua nova versão permitirá o usuário aplicar alguns efeitos em elementos de imagem, texto e vídeo.

Apliquei em algumas telas esse novo recurso do QuickLessons.

A partir da segunda vez, vi que não havia indicação na listagem de efeitos uma indicação de que o efeito X ou Y já tinha sido utilizado (seja na última cena ou em qualquer cena). Eu tinha que lembrar qual tinha sido usado...algo nada bacana de acontecer.

Enquanto aplicava um ou outro efeito, me deu vontade de mesclar efeitos oferecidos.

> Fui eu mesmo quem planejou os efeitos e eu mesmo tive vontade de mesclá-los na hora da montagem de um curso. **Nada como testar o projetado**. Se comigo aconteceu isso, é provável que aconteça com usuários reais. Mal posso esperar pelos *feedbacks* após testar o QuickLessons por aí a fora!

> É possível que parte desses problemas será resolvida na definição do **Estilo do Curso**, onde poderemos definir um efeito padrão a ser aplicado em todo o curso.

> Talvez os estilos oferecidos precisem ser mais flexíveis e intercambiáveis. Um problema vem a minha mente logo de cara ao considerar essa possibilidade: mais opções para o usuário podem reduzir a produtividade dele. Precisaremos testar e validar um bocado informações relativas a esse recurso.

## Reaproveitamento de estilos de texto

Ao longo das cenas que criei, quis replicar o **estilo de título** ao longo do curso.

Por conta da praticidade de produção e para não querer impor aos usuários que toda tela deva ter um título, o QuickLessons não oferece caixas de texto separadas só para títulos. E se não há caixas de textos só para títulos também não há um estilo geral para eles.

Vi-me avançando e voltando nas cenas para poder reaplicar os mesmos estilos (tamanho da letra e peso, por exemplo).

> Acredito que teremos nessa nova versão do QuickLessons a definição de estilos de títulos, tal qual o Word tem (com bem menos opções, certamente).

## Fim do primeiro tempo

Ainda estamos ajustando inúmeros recursos no QuickLessons. A exportação do curso ainda não leva em conta as novidades implementadas e, por isso, ainda não tenho como ir até o final do processo de produção e compartilhar um endereço de curso com vocês.

No entanto, essa primeira parte da edição de curso já serviu para apontar diversos itens a serem trabalhados por nós.

Se você puder separar um tempo para colaborar com a equipe QuickLessons, nos avise. Criaremos um *login asap* para você! =)

Se você leu até aqui, um muito obrigado!

Até a próxima.

///////////////////////
 Há um folheto que circula na Affero Lab há anos, cujo título é *Guia de Desenvolvimento de Conteúdos Light*, onde são apresentadas questões básicas para se montar um curso. Enquanto aprendo com o folheto, utilizarei-o como base de meu curso.

> O panfleto apresenta conteitos/etapas para a construção do curso: **público-alvo**, **objetivos**, **arquitetura**, **conteúdo**, **objetos de aprendizagem** e **avaliação**. Tentarei segui-lo na hora de relatar minha experiência para facilitar minha vida, ok? :)

- Definição de padrões para títulos (incluindo all caps).
- Ajuste de padding e posicionamento do texto na tela.
