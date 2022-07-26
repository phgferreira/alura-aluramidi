# aluramidi
Projeto para aprendizado no curso da Alura de Javascript para Web
Fonte: https://cursos.alura.com.br/course/javascript-web-paginas-dinamicas/task/97745

A tag <audio src="sounds/keyq.wav" id="som_tecla_pom"></audio> carrega o som pelo html mas não faz nada, precisa do parametro controls (<audio controls src= ...>) para que seja exibido uma mini painel do navegador que possamos mexer no som.

Adiconado o parametro onclick nos botões invocando um método de alerta onde é exibido os nomes dos sons que serão tocados.

Também não é recomendado executar o Javascript in-line, ou seja, dentro da tag do html

Existe uma convenção de desenvolvedores Javascript que determinam utilizar o nome main para o arquivo principal, sempre.

document.querySelector('') => Usando o mesmo padrão de busca do CSS (element, #id, .class), é um método de busca que retorna a referência do elemento