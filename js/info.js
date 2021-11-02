function trocarTipoLixo(){
    if ($("#listaEscolha").val() == "LE"){
        document.getElementById("lixoEletronico").style.display="block";
        document.getElementById("lixoCivil").style.display="none";
        document.getElementById("lixoOrganico").style.display="none";
        document.getElementById("lixoToxico").style.display="none";
        document.getElementById("lixoReciclavel").style.display="none";

    } else if($("#listaEscolha").val() == "RCC"){
        document.getElementById("lixoEletronico").style.display="none";
        document.getElementById("lixoCivil").style.display="block";
        document.getElementById("lixoOrganico").style.display="none";
        document.getElementById("lixoToxico").style.display="none";
        document.getElementById("lixoReciclavel").style.display="none";

    } else if($("#listaEscolha").val() == "LO"){
        document.getElementById("lixoEletronico").style.display="none";
        document.getElementById("lixoCivil").style.display="none";
        document.getElementById("lixoOrganico").style.display="block";
        document.getElementById("lixoToxico").style.display="none";
        document.getElementById("lixoReciclavel").style.display="none";

    } else if($("#listaEscolha").val() == "LT"){
        document.getElementById("lixoEletronico").style.display="none";
        document.getElementById("lixoCivil").style.display="none";
        document.getElementById("lixoOrganico").style.display="none";
        document.getElementById("lixoToxico").style.display="block";
        document.getElementById("lixoReciclavel").style.display="none";

    } else if($("#listaEscolha").val() == "LR"){
        document.getElementById("lixoEletronico").style.display="none";
        document.getElementById("lixoCivil").style.display="none";
        document.getElementById("lixoOrganico").style.display="none";
        document.getElementById("lixoToxico").style.display="none";
        document.getElementById("lixoReciclavel").style.display="block";

    }else if($("#listaEscolha").val() == ""){
        document.getElementById("lixoEletronico").style.display="none";
        document.getElementById("lixoCivil").style.display="none";
        document.getElementById("lixoOrganico").style.display="none";
        document.getElementById("lixoToxico").style.display="none";
        document.getElementById("lixoReciclavel").style.display="none";
    }
}

