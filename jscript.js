var formValido = {
    nome: false, sobrenome: false, email: false, celular: false, curso: false, modalidade: false

};

    function ValidacaoOk () {
        if (formValido.nome && formValido.sobrenome && formValido.email && formValido.celular && formValido.curso && formValido.modalidade) {
            $('#submit_button').removeAttr('disabled');
        } else {
            $('#submit_button').attr('disabled', true);

        }
    }

$('#nome').on('input',function() {
    let nome = $(this).val()
    if(nome.length < 2) {
        $('#nome_invalido').text('Digite um nome valido').show();
        formValido.nome = false;
        ValidacaoOk ();   
    } else {
        $('#nome_invalido').hide();
        formValido.nome = true;
        ValidacaoOk ();
        var testeRegexp = new RegExp (/^[a-zA-Z]+$/);
        if (!testeRegexp.test(nome)){
            $('#Caractere_invalido').text('Apenas letras são permitidas neste campo').show();
            formValido.nome = false;
            ValidacaoOk
        } else {
            $('#Caractere_invalido').hide();
            formValido.nome = true;
            ValidacaoOk
        }
    }
});

$('#sobrenome').on('input',function() {
    let sobrenome = $(this).val()
    if(sobrenome.length < 2) {
        $('#sobrenome_invalido').text('Digite um sobrenome valido').show();
        formValido.sobrenome = false;
        ValidacaoOk (); 
    } else {
        $('#sobrenome_invalido').hide();
        formValido.sobrenome = true;
        ValidacaoOk (); 
        const testeRegexp = new RegExp (/^[a-zA-Z]+$/);
        if (!testeRegexp.test(sobrenome)){
            $('#Caractere_invalido_Sobrenome').text('Apenas letras são permitidas neste campo').show();
        formValido.sobrenome = false;
        ValidacaoOk (); 
        } else {
            $('#Caractere_invalido_Sobrenome').hide();
        formValido.sobrenome = true;
        ValidacaoOk (); 
        }
    }
});

$('#email').on('input',function() {
    let email = $(this).val()
    if(email.length < 2) {
        $('#email_invalido').text('Digite um endereço de e-mail válido').show();
        formValido.email = false;
        ValidacaoOk (); 
    } else {
        $('#email_invalido').hide();
        formValido.email = true;
        ValidacaoOk (); 
        const testeRegexp = new RegExp (/[a-zA-z0-9._%+-]+@[a-z]+\.[a-z]{2,3}$/);
        if (!testeRegexp.test(email)){
            $('#email_invalido').text('Digite um endereço de e-mail válido').show();
        formValido.email = false;
        ValidacaoOk (); 
        } else {
            $('#email_invalido').hide();
        formValido.email = true;
        ValidacaoOk (); 
        }
    }
});

$('#celular').on('input',function() {
    let celular = $(this).val()
    if(celular.length < 12) {
        $('#celular_invalido').text('Digite um número de celular válido').show();
        formValido.celular = false;
        ValidacaoOk (); 
    } else {
        $('#celular_invalido').hide();
        formValido.celular = true;
        ValidacaoOk (); 
        const testeRegexp = new RegExp (/\(\d{2,}\) \d{4,}\-\d{4}$/);
        if (!testeRegexp.test(celular)){
            $('#celular_invalido').text('Digite um número de celular válido').show();
        formValido.celular = false;
        ValidacaoOk (); 
        } else {
            $('#celular_invalido').hide();
        formValido.celular = true;
        ValidacaoOk (); 
        }
    }
});

$('#curso').on('input',function() {
    let curso = $(this).val()
    if(curso == '0') {
        $('#curso_invalido').text('Selecione uma opção').show();
        formValido.curso = false;
        ValidacaoOk (); 
    } else {
        $('#curso_invalido').hide();
        formValido.curso = true;
        ValidacaoOk (); 
    }
});


$('.modalidade').on('input',function() {
    let modalidade = $(this).val()
    if (modalidade == '') {
        $('#modalidade_invalida').text('Ao menos uma modalidade deve ser selecionada').show();
        formValido.modalidade = false;
        ValidacaoOk (); 
    } else {
        $('#modalidade_invalido').hide();
        formValido.modalidade = true;
        ValidacaoOk (); 
    }
});



    
