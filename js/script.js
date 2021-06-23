$(window).on("load", function () {

    let nome = $("#nome");
    let email = $("#email");
    let celular = $("#celular");
    let curso = $("#curso");


    $("#erroName").hide();
    $("#erroEmail").hide();
    $("#erroCelular").hide();
    $("#erroCurso").hide();
    $("#erroRadio").hide();
    $("#errocheckbox").hide();
    $("#erroEnviar").hide();
    $("#erroName").hide();

    let nomeFunciona = false;
    let emailFunciona = false;
    let celularFunciona = false;
    let cursoFunciona = false;
    let horarioFunciona = false;
    let escolhaFunciona = false;

    //validação de nome

    function testeNome() {
        if (nome.val() == "") {
            $("#erroName").show();
            nomeFunciona = false;
        } else {
            $("#erroName").hide();
            nomeFunciona = true;
        }
    }
    //validação de E-mail
    function validarEmail(email) {
        const re = /([a-z0-9_.]*\@([a-z]*)\.([a-z]{1,3})(\.[a-z]*)?)/g;
        return re.test(email);
    }
    function testeEmail() {
        if (!validarEmail(email.val())) {
            $("#erroEmail").show();
            emailFunciona = false;
        } else {
            $("#erroEmail").hide();
            emailFunciona = true;
        }
    }

    //validação de celular

    let tamanhoNumero = $("#celular").val().length;

    function testeCelular() {
        if (celular.val() == "" || $("#celular").val().length != 11) {
            $("#erroCelular").show();
            celularFunciona = false;
        } else {
            $("#erroCelular").hide();
            celularFunciona = true;
        }
    }
    nome.focusout(testeNome);
    email.focusout(testeEmail);
    celular.focusout(testeCelular);

    //validação de curso
    function testeCurso() {
        if (curso.val() == "") {
            $("#erroCurso").show()
            cursoFunciona = false;
        } else {
            $("#erroCurso").hide()
            cursoFunciona = true;
        }
    }
    //validação de horario
    function TesteHorario() {
        if (!$("#manha:checked").is(':checked') &&
            !$("#tarde:checked").is(':checked') &&
            !$("#noite:checked").is(':checked')) {

            $("#erroRadio").show()
            horarioFunciona = false;
        } else {
            $("#erroRadio").hide()
            horarioFunciona = true;
        }

    }

    //validação do tipo de curso
    function testaEscolha() {
        if (!$("#ecursos:checked").is(':checked') &&
            !$("#workshops:checked").is(':checked') &&
            !$("#meetups:checked").is(':checked')) {

            $("#errocheckbox").show()
            escolhaFunciona = false;
        } else {
            $("#errocheckbox").hide()
            escolhaFunciona = true;
        }
    }
    nome.focusout(testeNome);
    email.focusout(testeEmail);
    celular.focusout(testeCelular);
    curso.focusout(testeCurso);

    //validação do botão
    $("#enviar").on("click", function () {
        testeNome();
        testeEmail();
        testeCelular();
        testeCurso();
        testaEscolha();
        TesteHorario();


        if (nomeFunciona && emailFunciona && celularFunciona && cursoFunciona && horarioFunciona && escolhaFunciona) {
            return true
        } else {
            $("#erroEnviar").show();
            return false;
        }

    })


})



