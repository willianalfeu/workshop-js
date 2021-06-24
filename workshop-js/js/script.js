$(window).on("load", function () {//(window == página html)essa function faz com que o bloco seja executado assim que a página carregar
    let nome = $("#nome");
    let email = $("#email");
    let celular = $("#celular");
    let curso = $("#curso");
    let redireciona = $(".redirecionaPagina");
    let validacoesCorretas = 0;//essa variável recebe +1 a cada validação realizada com sucesso

    // Ao ser clicado da início as validações
    redireciona.on("click", function () {
        event.preventDefault();//aqui eu modifico o comportamento padrão para impedir que seja redirecionado a próxima página automaticamente    
        verificarValidacoes();
    });

    //valida nome
    function validaNome() {
        if (nome.val().length < 1) {
            //nome.after("<p>Nome inválido</p>").addClass(".pNome");//porque não é possível adicionar uma classe ao elemento criado desta forma?
            $(".pNome").remove();
            $("<p>Nome inválido</p>").addClass("pNome erro").insertAfter(nome);
        } else {
            $(".pNome").remove();
            validacoesCorretas++;
        }
    }

    //valida email
    function validaEmail() {
        let inputEmail = email.val();
        const regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (!regexEmail.test(inputEmail)) {//aqui o regex testa o valor digitado pelo usuário
            $(".pEmail").remove();
            $("<p>Email inválido</p>").addClass("pEmail erro").insertAfter(email);
        }
        else {
            $(".pEmail").remove();
            validacoesCorretas++;
        }
    }

    //valida celular
    function validaCelular() {
        let inputCelular = celular.val();
        const regexCelular = /[1-9]{2}[9]{1}\d{4}\d{4}/i;
        if (!regexCelular.test(inputCelular)) {
            $(".pCelular").remove();
            $("<p>Celular inválido, digite apenas o ddd com os 9 dígitos do número</p>").addClass("pCelular erro").insertAfter(celular);
        } else {
            $(".pCelular").remove();
            validacoesCorretas++;
        }
    }

    //valida select   
    function validaCurso() {
        if ($(curso).val() == 0) {
            $(".pSelect").remove();
            $("<p>Você precisa selecionar um item</p>").addClass("pSelect erro").insertAfter(curso);//cria o elemento
        } else {
            $(".pSelect").remove();//remove o elemento
            validacoesCorretas++;
        }
    }

    //valida radio    
    function validaHorario() {
        let inputHorario = $("#radioHorario").find("input");//aqui eu desci na árvore do DOM e acessei os radios através do seu elemento "pai"
        if (!inputHorario.is(":checked")) {//se diferente de checked
            $(".pHorario").remove();
            $("<p>É necessário selecionar um horário</p>").addClass("pHorario erro").insertAfter("#radioHorario");
        } else {
            $(".pHorario").remove();
            validacoesCorretas++;
        }
    }

    //valida checkbox
    function validaInteresse() {
        let inputInteresse = $("#interesses").find("input");//aqui eu desci na árvore do DOM e acessei os checks através do seu elemento "pai"
        if (!inputInteresse.is(":checked")) {//se diferente de checked
            $(".pInteresse").remove();
            $("<p>É necessário selecionar ao menos um interesse</p>").addClass("pInteresse erro").insertAfter("#interesses");
        } else {
            $(".pInteresse").remove();
            validacoesCorretas++;
        }
    }

    //verifica todas validações
    function verificarValidacoes() {
        validaNome();
        validaEmail();
        validaCelular();
        validaCurso();
        validaHorario();
        validaInteresse();

        if (validacoesCorretas < 6) {
            $(".pValidacoes").remove();
            $("<p>Verifique os valores não informados</p>").addClass("pValidacoes erro").insertAfter("#enviar");
        } else {
            $(".pValidacoes").remove();
            $("#formCadastro").submit();//força o envio para a próxima página com jQuery
            // window.location.href = "enviado.html";//envia para a próxima página
        }
        validacoesCorretas = 0;
    }

});