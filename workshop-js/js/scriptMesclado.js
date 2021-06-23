let form;

function start() {
    form = $("#formCadastro");
    form.on("submit",validar);
    /* 
    form = document.getElementById("formCadastro");
    form.onsubmit = validar;
    form.addEventListener("submit", validar); */
}  

function limparErros() {

    //let arrayErros = $(".erro");
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

let validar = function () {
    let valido = true;
    /* let erro = $("<p>").addClass("erro"); */
    let erro = document.createElement("p");
    erro.className = "erro";
    limparErros();

    //validacao text
    let nome = $("#nome");
    if (nome.val() == "") {
        valido = false;
        erro.textContent = "Nome inválido";
        nome.after(erro.cloneNode(true));
    }

    let email = $("#email");
    if (validarEmail(email.val().toLowerCase()) == false) {
        valido = false;
        erro.textContent = "E-mail inválido";
        email.after(erro.cloneNode(true));
    }

    let celular = $("#celular");
    if (celular.val().length < 9) {
        valido = false;
        erro.textContent = "Celular inválido, digite ao menos 9 números";
        celular.after(erro.cloneNode(true));
    }

    //validação select
    let curso = $("#curso");
    if (curso.val() == "") {
        valido = false;
        erro.textContent = "Selecione um curso";
        curso.after(erro.cloneNode(true));
    }

    //validação radio 
    let periodo = $(".group input[type=radio]:checked").val();
    if (periodo == null) {
        valido = false;
        erro.textContent = "Selecione um horário";
        manha.parentElement.append(erro.cloneNode(true));
    }

    //validação checkbox
    let interesseCurso = $(".group input[type=checkbox]:checked").val();
    if (interesseCurso == null) {
        valido = false;
        erro.textContent = "Selecione ao menos um interesse";
        document.getElementById("meetups").parentElement.append(erro.cloneNode(true));
    }
    return valido;
}