
/*
    1. adicionando listener para o evento 'ready' (onload) 
        - duas formas de definir a função ready
        
        $(document).ready(function(){ ... });

        $(function(){ ... });
*/
$(function () {
    //esconde msgs ao abrir a tela
    $(".erro").hide();

    $("#formCadastro").submit(function () {
        let ehValido = true;

        $(".erro").hide();

        if ($("#nome").val() == "") {
            ehValido = false;
            $("#erroNome").show();
        }

        if ($("#email").val() == "") {
            ehValido = false;
            $("#erroEmail").show();
        }

        if ($("#celular").val() == "") {
            ehValido = false;
            $("#erroCelular").show();
        }

        if ($("#curso").val() == "") {
            ehValido = false;
            $("#erroCurso").show();
        }

        if ($("input[name=horario]:checked").length != 1) {
            ehValido = false;
            $("#erroHorario").show();
        }

        if ($("input[name=interesses]:checked").length == 0) {
            ehValido = false;
            $("#erroInteresses").show();
        }

        return ehValido;
    });
});

function limparErros() {
    $(".erro").remove();
}