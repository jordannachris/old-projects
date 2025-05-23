function linguagem() {
    var a;
    let b;
    const c = 5;

    // Valores, tipos e operadores
    let numero = 0;
    let boleano = true;
    let texto = '';
    let data = new Date(); //data de hoje 

    typeof numero;
    typeof boleano;
    typeof texto;
    typeof data;

    numero == '0'; //true
    numero === 0; //true
    !boleano; //false
    data > new Date(2020, 01, 01); //true 

    // null e undefined
    let indefinido;
    let nulo = null;

    typeof indefinido; //undefined
    typeof nulo; // object 

    //Arrays e Objetos
    let lista = [];
    let objeto = {};

    //laços e blocos de execução
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }

    //foreach
    for (const valor of lista) {
        console.log(valor);
    }

    //while
    while (false) { }

    //do-while
    do { } while (false);

    // forEach do obj array
    lista.forEach(() => { });


    // unica linha
    if (lista) console.log('array');
    else console.log('objeto');

    // bloco
    if (objeto) {
        console.log('objeto');
    } else {
        console.log('vazio');
    }

    // switch case
    let x = 1
    switch (x) {
        case 1:
            console.log('1');
            break;
        default:
            console.log('desconhecido');
    }

    //ternário
    true ? 'verdadeiro' : 'falso';

}

const funcao = function () {
    linguagem();
}
const funcao2 = () => {
    funcao();
}


/*
// Eventos do navegador
document.addEventListener('DOMContentLoaded', function(){
    console.log('ola mundo');
  });
  function onSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log('subimetido');
  }
*/


/**
 * Executa o submit do formulário da página
 * @param {Event} event Evento de submit
 */
const onSubmit = (event) => {
    event.preventDefault();
    const submitedValue = {
        nome: event.target.nome.value,
        tipo: event.target.tipo.value,
    };
    console.log(submitedValue);
};
/**
 * executa após carregamento do conteúdo do DOM
 */
const onLoad = () => {
    const footerEl = document.querySelector(".footer p");
    const formEl = document.querySelector("form");
    if (footerEl)
        footerEl.innerHTML += ` - ${new Date().getFullYear()}`;
    if (formEl)
        formEl.addEventListener("submit", onSubmit);
};
document.addEventListener("DOMContentLoaded", onLoad);