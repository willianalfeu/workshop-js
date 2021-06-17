let form;
function start() {
    form = document.getElementById("formCadastro");
    form.onsubmit = validar;
    //form.addEventListener("submit", validar);
}

function limparErros() {
    let arrayErros = document.getElementsByClassName("erro");
    while (arrayErros.length > 0) {
        let element = arrayErros[0];
        element.remove();
    }
}

function validarEmail(email) {
    const re = /([a-z0-9_.]*\@([a-z]*)\.([a-z]{1,3})(\.[a-z]*)?)/g;
    return re.test(email);
}

//function validar(){
let validar = function () {
    let valido = true;
    limparErros();

    let erro = document.createElement("p");
    erro.className = "erro";

    //validacao text
    let nome = document.getElementById("nome");
    if (nome.value == "") {
        valido = false;
        erro.textContent = "nome inválido";
        nome.after(erro.cloneNode(true));
    }

    let email = document.getElementById("email");
    if (validarEmail(email.value.toLowerCase())==false) {
        valido = false;
        erro.textContent = "email inválido";
        email.after(erro.cloneNode(true));
    }

    let celular = document.getElementById("celular");
    if (celular.value == "") {
        valido = false;
        erro.textContent = "celular inválido";
        celular.after(erro.cloneNode(true));
    }

    //validação select
    let curso = document.getElementById("curso");
    if (curso.value == "") {
        valido = false;
        erro.textContent = "curso inválido";
        curso.after(erro.cloneNode(true));
    }

    //validação radio 1
    let manha = document.getElementById("manha");
    let tarde = document.getElementById("tarde");
    if (manha.checked == false && tarde.checked == false) {
        valido = false;
        erro.textContent = "horario inválido";
        //manha.parentElement.append(erro.cloneNode(true));
    }

    //validação radio 2
    let horario = document.querySelectorAll('input[name="horario"]:checked');
    if (horario.length != 1) {
        valido = false;
        erro.textContent = "horario inválido";
        manha.parentElement.append(erro.cloneNode(true));
    }

    //validação checkbox
    let interesses = document.querySelectorAll('input[name="interesses"]:checked');
    if (interesses.length == 0) {
        valido = false;
        erro.textContent = "selecione pelo menos uma opção";
        document.getElementById("meetups").parentElement.append(erro.cloneNode(true));
    }

    return valido;
}