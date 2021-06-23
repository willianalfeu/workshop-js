$(function ($) {
  $("#celular").mask("(00)00000-0000");
});
$(window).on("load", function () {
  let nome = $("#nome");
  let sobrenome = $("#sobrenome");
  let email = $("#email");
  let celular = $("#celular");
  let curso = $("#curso");
  let enviar = $("#enviar");
  let horario = $("#radioHorario");
  let interesses = $("#checkboxInteresses");

  let qtdValidacoesCorretas = 0;

  function testaNome() {
    const regexNome = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+$/i
    if (!regexNome.test(nome.val())) {
      $("#erroNome").text("Nome inválido!").show();
    } else {
      $("#erroNome").text("Nome inválido!").hide();
      qtdValidacoesCorretas++;
    }
  }
  function testaSobrenome() {
    const regexSobrenome = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i
    if (!regexSobrenome.test(sobrenome.val())) {
      $("#erroSobrenome").text("Sobrenome inválido!").show();
    } else {
      $("#erroSobrenome").text("Sobrenome inválido!").hide();
      qtdValidacoesCorretas++;
    }
  }


  function testaEmail() {
    const regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}\b$/i;
    if (!regexEmail.test(email.val())) {
      $("#erroEmail").text("E-mail inválido!").show();
    } else {
      $("#erroEmail").text("E-mail inválido!").hide();
      qtdValidacoesCorretas++;
    }
  }

  function testaCelular() {
    const regexCelular = /\([1-9]{2}\)[9]{1}\d{4}-\d{4}/i;;
    if (!regexCelular.test(celular.val())) {
      $("#erroCelular").text("Celular inválido!").show();
    } else {
      $("#erroCelular").text("Celular inválido!").hide();
      qtdValidacoesCorretas++;
    }
  }

  function testaCurso() {
    if (curso.val() == "") {
      $("#erroCurso").text("Curso inválido!").show();
    } else {
      $("#erroCurso").text("Curso inválido!").hide();
      qtdValidacoesCorretas++;
    }
  }

  function testaHorario() {
    if (
      !$("#manha:checked").is(":checked") &&
      !$("#tarde:checked").is(":checked")
    ) {
      $("#erroHorario").text("Horário inválido!").show();
    } else {
      $("#erroHorario").text("Horário inválido!").hide();
      qtdValidacoesCorretas++;
    }
  }
  function testaInteresses() {
    if (
      !$("#ead:checked").is(":checked") &&
      !$("#workshops:checked").is(":checked") &&
      !$("#meetups:checked").is(":checked")
    ) {
      $("#erroInteresses").text("Selecione um campo").show();
    } else {
      $("#erroInteresses").text("Selecione um campo").hide();
      qtdValidacoesCorretas++;
    }
  }
  nome.focusout(function () {
    if (nome.val() == "") {
      $("#erroNome").text("Nome inválido!").show();
    } else {
      $("#erroNome").text("Nome inválido!").hide();
    }
  });
  sobrenome.focusout(function () {
    if (sobrenome.val() == "") {
      $("#erroSobrenome").text("Sobrenome inválido!").show();
    } else {
      $("#erroSobrenome").text("Sobrenome inválido!").hide();
    }
  });
  email.focusout(function () {
    if (email.val() == "") {
      $("#erroEmail").text("E-mail inválido!").show();
    } else {
      $("#erroEmail").text("E-mail inválido!").hide();
    }
  });
  celular.focusout(function () {
    if (celular.val() == "") {
      $("#erroCelular").text("Celular inválido!").show();
    } else {
      $("#erroCelular").text("Celular inválido!").hide();
    }
  });
  curso.click(function () {
    if (curso.val() == "") {
      $("#erroCurso").text("Curso inválido!").show();
    } else {
      $("#erroCurso").text("Curso inválido!").hide();
    }
  });
  horario.click(function () {
    if (
      !$("#manha:checked").is(":checked") &&
      !$("#tarde:checked").is(":checked")
    ) {
      $("#erroHorario").text("Horário inválido!").show();
    } else {
      $("#erroHorario").text("Horário inválido!").hide();
    }
  });
  interesses.click(function () {
    if (
      $("#ead:checked").is(":checked") ||
      $("#workshops:checked").is(":checked") ||
      $("#meetups:checked").is(":checked")
    ) {
      $("#erroInteresses").text("Selecione um campo").hide();
    } else {
      $("#erroInteresses").text("Selecione um campo").show();
    }
  });

  enviar.click(function () {
    testaNome();
    testaSobrenome();
    testaEmail();
    testaCelular();
    testaCurso();
    testaHorario();
    testaInteresses();
    if (qtdValidacoesCorretas > 6) {
      window.location.href = "enviado.html";
    } else {
      $("#erroEnviar").text("Preencha todo o Formulário").show();
    }
    console.log("qtdValidacoesCorretas " + qtdValidacoesCorretas);
    qtdValidacoesCorretas = 0;
  });

});
