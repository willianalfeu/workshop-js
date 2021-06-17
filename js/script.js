//getElementById
//getElementsByClassName (array)
//querySelector (elemento)
//querySelectorAll (array)


const regexEmail = /([a-z0-9_.]*\@([a-z]*)\.([a-z]{1,3})(\.[a-z]*)?)/g;
//n esta funcionando
const regexNumero = /[0-9]{1,7}([0-9]{0}?)/g;

let form;
function load(){
    form = document.getElementById("formCadastro");
    form.onsubmit = validarFormulario;
    //form.addEventListener("submit", validarFormulario);
}

function validarEmail(email){
    return regexEmail.test(email);
}

function limparError(){
    let arrayErro = document.getElementsByClassName("erro");
    while(arrayErro.length>0){
        arrayErro[0].remove();
    }
}

let validarFormulario = function(){
//function validarFormulario(){
    let ehValido = true;
    limparError();
        
    let erro = document.createElement("p");
    erro.className = "erro";
    
    let nome = document.querySelector("#nome");
    if(nome.value.length==0){
        ehValido = false;
        erro.textContent = "nome inválido";
        nome.after(erro.cloneNode(true));
    }

    let email = document.querySelector("#email");
    if(validarEmail(email.value.toLowerCase())==false){
        ehValido = false;
        erro.textContent = "e-mail inválido";
        email.after(erro.cloneNode(true));
    }
    
    let celular = document.querySelector("#celular");
    if(regexNumero.test(celular.value.toLowerCase())==false){
        ehValido = false;
        erro.textContent = "celular inválido";
        celular.after(erro.cloneNode(true));
    }

    let curso = document.querySelector("#curso");
    if(curso.value == "0"){
        ehValido = false;
        erro.textContent = "curso inválido";
        curso.after(erro.cloneNode(true));
    }

    /*
    let opcaoOnline = document.querySelector("#online");
    let opcaoPresencial = document.querySelector("#presencial");
    if(opcaoOnline.checked==false && opcaoPresencial.checked==false ){
        ehValido = false;
        erro.textContent = "opção inválido";
        opcaoOnline.parentElement.append(erro.cloneNode(true));
    }*/

    let opcao = document.querySelectorAll('input[name="opcao"]:checked');
    if(opcao.length != 1){
        ehValido = false;
        erro.textContent = "opção inválido";
        document.querySelector("#online").parentElement.append(erro.cloneNode(true));
    }

    let interesses = document.querySelectorAll('input[name="interesses"]:checked');
    if(interesses.length == 0){
        ehValido = false;
        erro.textContent = "selecione pelo menos uma opção";
        document.querySelector("#EAD").parentElement.append(erro.cloneNode(true));
    }

    return ehValido;
}