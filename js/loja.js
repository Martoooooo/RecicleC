window.onload = () => {
    criarAnuncio();
};

function abrirFormulario(anuncio){
    document.getElementById("fundoPopup").style.display= "block";
    document.getElementById(anuncio).style.display = "block";

}
function fecharFormulario(anuncio){

    document.getElementById("fundoPopup").style.display= "none";
    document.getElementById(anuncio).style.display = "none";
}

function abrirSenha(campoSenha){
    document.getElementById(campoSenha).style.display= "block";


}

function excluirAnuncio(anuncio, senha, senhaConfirm){

    
    var senhaV= $("#" + senha).val()

    if(senhaV == senhaConfirm){
        document.getElementById(anuncio).innerHTML= "anuncio excluído";

    } else{
        console.log("natan");
    }
    

    
}

