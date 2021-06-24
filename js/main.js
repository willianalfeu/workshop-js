$(function ($) {
  $("#celular").mask("(00)00000-0000");

  $(".erro").hide();

  const regexNome = /^[A-Za-záàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ']+$/i;
  const regexSobrenome = /^[A-Za-záàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ'\s]+$/i;
  const regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+.[A-Z]{2,4}\b$/i;
  const regexCelular = /\([1-9]{2}\)[9]{1}\d{4}\-\d{4}/i;

  $("#nome").focusout(function () {
    if (!regexNome.test($("#nome").val())) {
      $("#erroNome").show();
    } else {
      $("#erroNome").hide();
    }
  });
  $("#sobrenome").focusout(function () {
    if (!regexSobrenome.test($("#sobrenome").val())) {
      $("#erroSobrenome").show();
    } else {
      $("#erroSobrenome").hide();
    }
  });
  $("#email").focusout(function () {
    if (!regexEmail.test($("#email").val())) {
      $("#erroEmail").show();
    } else {
      $("#erroEmail").hide();
    }
  });
  $("#celular").focusout(function () {
    if (!regexCelular.test($("#celular").val())) {
      $("#erroCelular").show();
    } else {
      $("#erroCelular").hide();
    }
  });
  $("#curso").click(function () {
    if ($("#curso").val() == "") {
      $("#erroCurso").show();
    } else {
      $("#erroCurso").hide();
    }
  });

  $("input[name=horario]").click(function () {
    if ($("input[name=horario]").is(":checked")) {
      $("#erroHorario").hide();
    }
  });

  $("input[name=interesses]").click(function () {
    if (!$("input[name=interesses]").is(":checked")) {
      $("#erroInteresses").show();
    } else {
      $("#erroInteresses").hide();
    }
  });

  $("#formCadastro").submit(function () {
    let valido = true;

    if (!regexNome.test($("#nome").val())) {
      valido = false;
      $("#erroNome").show();
    }

    if (!regexSobrenome.test($("#sobrenome").val())) {
      valido = false;
      $("#erroSobrenome").show();
    }

    if (!regexEmail.test($("#email").val())) {
      valido = false;
      $("#erroEmail").show();
    }

    if (!regexCelular.test($("#celular").val())) {
      console.log(valido);
      valido = false;
      $("#erroCelular").show();
    }

    if ($("#curso").val() == "") {
      valido = false;
      $("#erroCurso").show();
    }

    if ($("input[name=horario]:checked").length != 1) {
      valido = false;
      $("#erroHorario").show();
    }

    if ($("input[name=interesses]:checked").length == 0) {
      valido = false;
      $("#erroInteresses").show();
    }
    return valido;
  });
});

function limparErros() {
  $(".erro").remove();
}