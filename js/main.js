let form;
$(function () {
    form = $('#formCadastro');
    form.submit(validar);
});

//limpa erros
function limparErro() {
    let arrayErros = $('.erro');
    console.log(arrayErros);
    $(".erro").remove();
}

//função validar
function validar(e) {
    let valido = true;
    limparErro();

    //texto validação
    let nome = $('#nome');
    if ($(nome).val() == "") {
        console.log('vazio');
        valido = false;
        let erro = $('<p>').addClass('erro');
        $(erro).text("Digite seu Nome");
        $(nome).after(erro);
    }

    let email = $('#email');
    if ($(email).val().toLowerCase() == "") {
        console.log('email vazio');
        valido = false;
        let erro = $('<p>').addClass('erro');
        $(erro).text("Digite seu E-mail");
        $(email).after(erro);
    }

    let celular = $('#celular');
    if ($(celular).val() == "") {
        console.log('vazio');
        valido = false;
        let erro = $('<p>').addClass('erro');
        $(erro).text("Digite o seu Celular");
        $(celular).after(erro);
    }

    //validação select
    let curso = $('#curso');
    if ($(curso).val() == "") {
        console.log('vazio');
        valido = false;
        let erro = $('<p>').addClass('erro');
        $(erro).text("Escolha um Curso");
        $(curso).after(erro);
    }

    //validação radio
    let horario = $('#horarios').find('input[name="horario"]:checked');
    if (horario.length == 0) {
        console.log('vazio');
        valido = false;
        let erro = $('<p>').addClass('erro');
        $(erro).text("Defina um horario");
        $('#horarios').append(erro);
    }

    //checkbox
    let interesses = $('#curinteresses').find('input[name="interesses"]:checked');
    console.log(interesses);
    if (interesses.length == 0) {
        console.log('fax');
        valido = false;
        let erro = $('<p>').addClass('erro');
        $(erro).text("Selecione ao menos um interesse");
        $('#curinteresses').append(erro);
    }
    return valido;
}

//botão de enviar
$('submit').click( function () {
    
});
