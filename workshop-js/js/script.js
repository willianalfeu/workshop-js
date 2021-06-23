$(window).on("load", function () {//(window == página html)essa function faz com que o bloco seja executado assim que a página carregar
    let nome = $("#nome");
    let email = $("#email");
    let celular = $("#celular");
    let curso = $("#curso");
    let redireciona = $(".redirecionarPagina");
    let qtdValidada = 0;

    //valida nome
    function validaNome() {
        if (nome.val() == "") {
            //nome.after("<p>Nome inválido</p>").addClass(".pNome");//porque não é possível adicionar uma classe ao elemento criado desta forma?
            $(".pNome").remove();
            $("<p style='color:#FC2727'>Nome inválido</p>").addClass("pNome").insertAfter(nome);
            qtdValidada--;
        } else {
            $(".pNome").remove();
        }
    }

    //valida email
    function validaEmail() {
        let inputEmail = email.val();
        var regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (!regexEmail.test(inputEmail)) {//aqui o regex testa o valor digitado pelo usuário
            $(".pEmail").remove();
            $("<p style='color:#FC2727'>Email inválido</p>").addClass("pEmail").insertAfter(email);
            qtdValidada--;
        }
        else {
            $(".pEmail").remove();
        }
    }

    //valida celular
    function validaCelular() {
        let inputCelular = celular.val();
        var regexCelular = /[1-9]{2}[9]{1}\d{4}\d{4}/i;
        if (!regexCelular.test(inputCelular)) {
            $(".pCelular").remove();
            $("<p style='color:#FC2727'>Celular inválido, digite apenas o ddd com os 9 dígitos do número</p>").addClass("pCelular").insertAfter(celular);
            qtdValidada--;
        } else {
            $(".pCelular").remove();
        }
    }

    //valida select   
    function validaCurso() {
        if ($(curso).val() == 0) {
            $(".pSelect").remove();
            $("<p style='color:#FC2727'>Você precisa selecionar um item</p>").addClass("pSelect").insertAfter(curso);//cria o elemento
            qtdValidada--;
        } else {
            $(".pSelect").remove();//remove o elemento
        }
    }

    //valida radio    
    function validaHorario() {
        let inputHorario = $("#radioHorario").find("input");//aqui eu desci na árvore do DOM e acessei os radios através do seu elemento "pai"
        if (inputHorario.is(":checked") == false) {
            $(".pHorario").remove();
            $("<p style='color:#FC2727'>É necessário selecionar um horário</p>").addClass("pHorario").insertAfter("#radioHorario");
            qtdValidada--;
        } else {
            $(".pHorario").remove();
        }
    }

    //valida checkbox
    function validaInteresse() {
        let inputInteresses = $("#interesses").find("input");
        if (inputInteresses.is(":checked") == false) {
            $(".pInteresse").remove();
            $("<p style='color:#FC2727'>É necessário selecionar ao menos um interesse</p>").addClass("pInteresse").insertAfter("#interesses");
            qtdValidada--;
        } else {
            $(".pInteresse").remove();
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

        if (qtdValidada < 0) {//(qtdValidada < 0) cada campo incorreto decrementa -1
            $(".pValidacoes").remove();
            $("<p style='color:#FC2727'>Verifique os valores não informados</p>").addClass("pValidacoes").insertAfter("#enviar");
            console.log("valor de respostas preenchidas incorretamente: " + (-1 * qtdValidada));
        } else {//(qtdValidada = 0) validação completada sem decrementos
            $(".pValidacoes").remove();
            // window.location.href = "enviado.html";//envia para a próxima página
            $("#formCadastro").submit();//envia para a próxima página com jQuery
        }
        qtdValidada = 0;
    }

    // Ao ser clicado da início as validações
    redireciona.on("click", function () {
        event.preventDefault();//aqui eu modifico o comportamento padrão para impedir que seja redirecionado a próxima página automaticamente    
        verificarValidacoes();
    });
    
});