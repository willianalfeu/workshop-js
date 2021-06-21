let form;
function start() {
    form = $("#formCadastro");
    form.onsubmit = validar;
    form.addEventListener("submit", validar);
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


let validar = function () {

    let valido = true;
    let erro = document.createElement("div");
    erro.className = "erro";

    limparErros();

    //validacao text
    let name = $("#nome").val()
    if (name == "") {
        valido = false;
        erro.textContent = "Nome inválido";
        nome.after(erro.cloneNode(true));

    }

    //validacao e-mail

    let CorrreioEletronico = $("#email").val()

    if (!validarEmail(CorrreioEletronico.toLowerCase())) {
        valido = false;
        erro.textContent = "E-mail inválido";
        email.after(erro.cloneNode(true));

    }


    //valida telefone

    let tell = $("#celular").val()
    let tamanho_celular = tell.length


    if (tell == "" || tamanho_celular != 11) {
        valido = false;
        erro.textContent = "Celular inválido";
        celular.after(erro.cloneNode(true));

    }

    //validação select

    let course = $("#curso").val()

    if (course == "") {
        valido = false;
        erro.textContent = "Curso inválido";
        curso.after(erro.cloneNode(true));

    }

    //validação radio 

    let time = $(".group input[type=radio]:checked").val()

    if (time == null) {
        valido = false;
        erro.textContent = "Por favor escolha um horario";
        manha.parentElement.append(erro.cloneNode(true));

    }

    //validação checkbox

    let interests = $(".group input[type=checkbox]:checked").val()

    if (interests == undefined) {
        valido = false;
        erro.textContent = "Selecione pelo menos uma opção";
        document.getElementById("meetups").parentElement.append(erro.cloneNode(true));

    }

    return valido;
}