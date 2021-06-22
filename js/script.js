
/*
    1. adicionando listener para o evento 'ready' (onload) 
        - duas formas de definir a função ready
        
        $(document).ready(function(){ ... });

        $(function(){ ... });
*/
$(function () {
    $("#formCadastro").submit(function () {
        let ehValido = true;
        limparErros();

        let erro = $("<p>");
        $(erro).addClass("erro")

        if ($("#nome").val() == "") {
            ehValido = false;
            $(erro).html("nome inválido");
            $(erro).clone().insertAfter($("#nome"));
        }

        if ($("#email").val() == "") {
            ehValido = false;
            $(erro).html("email inválido");
            $(erro).clone().insertAfter($("#email"));
        }

        if ($("#celular").val() == "") {
            ehValido = false;
            $(erro).html("celular inválido");
            $(erro).clone().insertAfter($("#celular"));
        }

        if ($("#curso").val() == "") {
            ehValido = false;
            $(erro).html("curso inválido");
            $(erro).clone().insertAfter($("#curso"));
        }

        if ($("input[name=horario]:checked").length != 1) {
            ehValido = false;
            $(erro).html("horario inválido");
            $(erro).clone().insertAfter($("#manha").parent());
        }

        if ($("input[name=interesses]:checked").length == 0) {
            ehValido = false;
            $(erro).html("marque pelo menos umas opção");
            $(erro).clone().insertAfter($("#ead").parent());
        }

        return ehValido;
    });
});

function limparErros() {
    $(".erro").remove();
}