const form = window.document.getElementById("form")
const username = window.document.getElementById("username")
const email = window.document.getElementById("email")
const senha = window.document.getElementById("senha")
const celular = window.document.getElementById("celular")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    itens();
})


function itens() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const celularValue = celular.value;

    if (usernameValue === "") {
        setErrorfor(username, "O nome do usuásrio é obrigatorio");
    }else{
        steSucess(username)
    }

    if(emailValue === ""){
        setErrorfor(email , "O email é Obrigatório")
    }else{
        steSucess(email)
    } 

     if(senhaValue === ""){
        setErrorfor(senha , "Senha é Obrigatória")
    }else{
        steSucess(senha)
    }

    if(celularValue === ""){
        setErrorfor(celular, "Número de telefone é Obrigatório")
    }else{
        steSucess(celular)
    }



}

function setErrorfor(input, messagem) {

    const caixaform = input.parentElement;
    const small = caixaform.querySelector("small")

    small.innerText = messagem;

    caixaform.className = "caixa-form error"
}

function steSucess(input) {

    const caixaform = input.parentElement;


    caixaform.className = "caixa-form sucess"
}

