const quizData = [
  {
    question: "01) No HTML5, o evento que é disparado quando um objeto é carregado é:?",
    a: "begin",
    b: "load",
    c: "ready",
    d: "start",
    correct: "b"
  },
  {
    question: "02) Quais elementos HTML podem ser contidos dentro de um formulário HTML <form></form>??",
    a: "<text> ; <number> ; <radio> ; <list>",
    b: "<fieldset> ; <datalist> ; <option> ; <input>",
    c: "<input> ; <button> ; <target> ; <submit>",
    d: "<action> ; <script> ; <method> ; <autocomplete>",
    correct: "b"
  },
  {
    question: "03) Qual classe Bootstrap 5 centraliza um texto em uma tag HTML <p>?",
    a: "text-center",
    b: "middle",
    c: "justified",
    d: "center",
    correct: "a"
  },
  {
    question: "04) Em uma página HTML, para que é utilizada a tag <a></a>?",
    a: "Inserção de imagem.",
    b: "Inserção de link.",
    c: "Definição de parágrafo.",
    d: "Definição de título.",
    correct: "b"
  },
  {
    question: "05) Sobre a utilização de formulários na linguagem HTML, quais dos atributos abaixo foram introduzidos no HTML5?",
    a: "autofocus, placeholder e required.",
    b: "autofocus, placeholder e disabled.",
    c: "autofocus, readonly e required.",
    d: "placeholder, readonly e disabled.",
    correct: "a"
  },
  {
    question: "06) No contexto do HTML, a sintaxe correta para um comentário, delimitando um trecho que NÃO deve ser exibido pelo browser, é:  ",

    a: "</--Comentario--\>",
    b: "<!--Comentario-->",
    c: "<\ comentario--!>",
    d: " <!-- C -->",
    correct: "b"
  },
 
  {
    question: "07) Acerca de JBoss Seam, JPA, facelets, JNDI e JDBC, assinale a opção correta.?",
    a: "Facelets, componentes da arquitetura J2EE, permitem localizar objetos, distribuí-los e integrá-los por meio dos mecanismos integração e localização de serviços de nome.",
    b: "JBoss Seam é um framework ORM (object-relational mapping) utilizado em aplicações que facilitem as operações de persistência de objetos em bancos de dados relacionais por meio de uma conexão JDBC.",
    c: "JDBC, uma biblioteca vinculada a API da arquitetura JEE, define como um cliente pode acessar bancos de dados OO exclusivamente.",
    d: "JPA, um framework utilizado na camada de persistência, define uma forma para mapear POJO (plain old Java objects) para um banco de dados.",
    correct: "d"
  },
  
    
  {
    question: "08) Apache Tomcat Web Server implementa que tecnologias?",
    a: "Apenas JavaServer Pages e Java Servlets",
    b: "Apenas Java Servlets",
    c: "Apenas JavaServer Pages",
    d: "Apenas Java Message Services",
    correct: "a"
  },
  
   {
      question: "09) Eu sou ... ?",
    a: "Lindo.",
    b: "Inteligente",
    c: "Atencioso",
    d: "Programador",
    correct: "a"
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>Você respondeu ${score}/${quizData.length} perguntas corretamente</h2>
             
            
             
            <button onclick="history.go(0)">Jogar de novo?</button>
        `;
    }
  }
});
