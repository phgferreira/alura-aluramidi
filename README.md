# aluramidi
Projeto para aprendizado no curso da Alura de Javascript para Web
Fonte: https://cursos.alura.com.br/course/javascript-web-paginas-dinamicas/task/97745

A tag <audio src="sounds/keyq.wav" id="som_tecla_pom"></audio> carrega o som pelo html mas não faz nada, precisa do parametro controls (<audio controls src= ...>) para que seja exibido uma mini painel do navegador que possamos mexer no som.

Adiconado o parametro onclick nos botões invocando um método de alerta onde é exibido os nomes dos sons que serão tocados.

Também não é recomendado executar o Javascript in-line, ou seja, dentro da tag do html

Existe uma convenção de desenvolvedores Javascript que determinam utilizar o nome main para o arquivo principal, sempre.

document.querySelector('') => Usando o mesmo padrão de busca do CSS (element, #id, .class), é um método de busca que retorna a referência do elemento.

Se o script depente de algum elemento do body do HTML, a tag <script/> precisa estar no final do body porque se ele for lido antes da construção do body os elementos ainda não terão sido criados.

Existe uma política nos navegadores que não permite a execução de códigos que são executados assim que carrega a página.

onclick do elemento button não é uma função e sim um atributo, ele recebe um método utilizando de atribuição.
Toda vez que é colocado () no final da função, a mesma é executada então para atribuir uma função a um elmento é necessário não colocar ().

querySelectorAll() permite selecionar uma lista de vários elementos, basta que todos eles tenham algo em comum, seja elemento, id ou classe.

const informa que uma determinada variável será constante, ou seja, inauterável.

No Javascript é possível fazer uma referência receber uma função anônima
Ex: const referencia = function() {
    // Aqui dentro também pode-se utilizar variáveis do escopo externo
}

Template String é a possibilidade de inserir vavriáveis dentro de uma string, deixando-o dinâmico
Ex: `texto padrão ${variavel}`