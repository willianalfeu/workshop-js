$(window).on("load", function () {//(window == página html)essa function faz com que o bloco seja executado assim que a página carregar

    /* alert("nome") */;
    let nome = $("#nome");
    let email = $("#email");
    let celular = $("#celular");
    let curso = $("#curso");
    let redireciona = $(".redirecionarPagina");
   

    //valida nome
    // function validaNome() {
    //     nome.on("input", function () {
    //         if (nome.val() == "") {
    //             //nome.after("<p>Nome inválido</p>").addClass(".pNome");//porque não é possível adicionar uma classe ao elemento criado desta forma?
    //             $("<p style='color:#FC2727'>Nome inválido</p>").addClass("pNome").insertAfter(nome);
    //         } else {
    //             $(".pNome").remove();
    //         }
    //     });
    // }

    //valida nome
    function validaNome() {
        if (nome.val() == "") {
            //nome.after("<p>Nome inválido</p>").addClass(".pNome");//porque não é possível adicionar uma classe ao elemento criado desta forma?
            $("<p style='color:#FC2727'>Nome inválido</p>").addClass("pNome").insertAfter(nome);
        } else {
            $(".pNome").remove();
        }
    }

    //valida email
    // function validaEmail() {
    //     email.on("input", function () {
    //         if (email.val() == "") {
    //             $("<p style='color:#FC2727'>Email inválido</p>").addClass("pEmail").insertAfter(email);
    //         } else {
    //             $(".pEmail").remove();
    //         }
    //     });
    // }

    //valida email
    function validaEmail() {
        if (email.val() == "") {
            $("<p style='color:#FC2727'>Email inválido</p>").addClass("pEmail").insertAfter(email);
        } else {
            $(".pEmail").remove();
        }
    }

    //valida celular
    // function validaCelular() {
    //     celular.on("input", function () {
    //         if (celular.val() == "") {
    //             $("<p style='color:#FC2727'>Celular inválido</p>").addClass("pCelular").insertAfter(celular);
    //         } else {
    //             $(".pCelular").remove();
    //         }
    //     });
    // }

    //valida celular
    function validaCelular() {
        if (celular.val() == "") {
            $("<p style='color:#FC2727'>Celular inválido</p>").addClass("pCelular").insertAfter(celular);
        } else {
            $(".pCelular").remove();
        }
    }

    //valida select   
    // function validaCurso() {
    //     curso.on("click", function () {
    //         if ($(curso).val() == 0) {
    //             // $("#select_error").show();//mostra elemento oculto
    //             $(".pSelect").remove();
    //             $("<p style='color:#FC2727'>Você precisa selecionar um item</p>").addClass("pSelect").insertAfter(curso);//cria o elemento
    //         } else {
    //             // $("#select_error").hide();//oculta elemento de msg de erro
    //             $(".pSelect").remove();//remove o elemento
    //         }
    //     });
    // }

    //valida select   
    function validaCurso() {
        if ($(curso).val() == 0) {
            // $("#select_error").show();//mostra elemento oculto
            $(".pSelect").remove();
            $("<p style='color:#FC2727'>Você precisa selecionar um item</p>").addClass("pSelect").insertAfter(curso);//cria o elemento
        } else {
            // $("#select_error").hide();//oculta elemento de msg de erro
            $(".pSelect").remove();//remove o elemento
        }
    }

    //valida radio    
    // function validaHorario() {
    //     let inputHorario = $("#radioHorario").find("input");//aqui eu desci na árvore do DOM e acessei os radios através do seu elemento "pai"
    //     titulo.on("click", function () {
    //         if (inputHorario.is(":checked") == false) {
    //             $(".pHorario").remove();
    //             $("<p style='color:#FC2727'>É necessário selecionar um horário</p>").addClass("pHorario").insertAfter("#radioHorario");
    //         } else {
    //             $(".pHorario").remove();
    //         }
    //     });
    // }

    //valida radio    
    function validaHorario() {
        let inputHorario = $("#radioHorario").find("input");//aqui eu desci na árvore do DOM e acessei os radios através do seu elemento "pai"
        if (inputHorario.is(":checked") == false) {
            $(".pHorario").remove();
            $("<p style='color:#FC2727'>É necessário selecionar um horário</p>").addClass("pHorario").insertAfter("#radioHorario");
        } else {
            $(".pHorario").remove();
        }
    }

    //valida checkbox
    // function validaInteresse(){
    //     let inputInteresses = $("#interesses").find("input");
    //     redireciona.on("click",function(){
    //         if (inputInteresses.is(":checked") == false) {
    //             $(".pInteresse").remove();
    //             $("<p style='color:#FC2727'>É necessário selecionar ao menos um interesse</p>").addClass("pInteresse").insertAfter("#interesses");
    //         }else { 
    //             $(".pInteresse").remove();
    //         }
    //     });
    // }
 
    //valida checkbox
    function validaInteresse() {
        let inputInteresses = $("#interesses").find("input");
        if (inputInteresses.is(":checked") == false) {
            $(".pInteresse").remove();
            $("<p style='color:#FC2727'>É necessário selecionar ao menos um interesse</p>").addClass("pInteresse").insertAfter("#interesses");
        } else {
            $(".pInteresse").remove();
        }
    }

    //----------------------------------------
    redireciona.on("click", function () {
        validaNome();
        validaEmail();
        validaCelular();
        validaCurso();
        validaHorario();
        validaInteresse();
    });
});