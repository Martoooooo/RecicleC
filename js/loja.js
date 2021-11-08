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



function abrirSenha(anuncio, botaoDelete){
    
    document.getElementById(anuncio).style.display= "block";
    document.getElementById(botaoDelete).style.display= "block";

}




function excluirAnuncio(anuncio){
    if (conjAnuncios[i][9] ==  document.getElementById("inputSenhaConfirmacao").value){
        document.getElementById(anuncio).innerHTML= "";
    }
}