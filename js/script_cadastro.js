function verificarPreenchimento(){
    var nome= document.getElementById("cadastroNome").value;
    var sobrenome= document.getElementById("cadastroSobrenome").value;
    var email= document.getElementById("cadastroEmail").value;
    var telefone= document.getElementById("cadastroTelefone").value;
    var senha= document.getElementById("cadastroSenha").value;
    var confSenha= document.getElementById("cadastroConfSenha").value;

    if (nome == "" || sobrenome == "" || email == "" || telefone == "" || senha == "" || confSenha == ""){
        console.log("há campos que não foram preenchidos, por favor, preencha-os novamente");
        document.getElementById("formularioCadastro").innerHTML += "<h2>há campos que não foram preenchidos, por favor, preencha-os novamente</h2>";
        
    } else{
        console.log("Cadastro realizado com sucesso");
    }

}