window.onload = () => {
    criarAnuncio();
};

function abrirSenha(){
    
    if (document.getElementById("inputSenhaConfirmacao").style.display= "none"){
        document.getElementById("inputSenhaConfirmacao").style.display= "block";
        
    }
        
}
function fecharSenha(){
    document.getElementById("inputSenhaConfirmacao").style.display="none";
}


function abrirFormulario(){
    document.getElementById("fundoPopup").style.display= "block";
    document.getElementById("dadosVendedor").style.display = "block";
}
function fecharFormulario(){
    document.getElementById("fundoPopup").style.display= "none";
    document.getElementById("dadosVendedor").style.display = "none";
}

