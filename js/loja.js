window.onload = () => {
    cadastrarItem();
};

function abrirSenha(){
    
    if (document.getElementById("inputSenhaConfirmacao").style.display= "none"){
        document.getElementById("inputSenhaConfirmacao").style.display= "block";
        
    }
        
}
function fecharSenha(){
    document.getElementById("inputSenhaConfirmacao").style.display="none";
}

function criarAnuncio(){

    anuncios= window.localStorage;

    var conjAnuncios= JSON.parse(anuncios.getItem("conjAnuncios"));

    //cria todos os anuncios
    for(var i=0; i< conjAnuncios.length; i++){
        document.getElementById("anuncios").innerHTML +=   `<div class="anuncioUnico card">

                                                                <img src="https://static.wixstatic.com/media/830d71_d544e83561f341df83afe2f41ca996ff~mv2_d_2149_3024_s_2.jpg/v1/fill/w_195,h_274,al_c,q_80,usm_0.66_1.00_0.01/830d71_d544e83561f341df83afe2f41ca996ff~mv2_d_2149_3024_s_2.webp" class="card-img-top" alt="...">
                                                                <div class="card-body">

                                                                    <h5 class="card-title"> ${conjAnuncios[i][3]} </h5>
                                                                    <p class="card-text">${conjAnuncios[i][5]}</p>

                                                                    <a href="#" class="btn btn-primary" onclick="abrirFormulario1()"> Comprar </a>

                                                                </div>

                                                            </div>

                                                            <!--Janela do vendedor-->

                                                            <div id="dadosVendedor${[i]}" class="white_content">

                                                                <div class= "dadosVendedor">
                                                                    <div class="botoesManipPopup">
                                                                        <div>
                                                                            <button onclick="fecharFormulario${[i]}()" type="submit" class="botaoFecharPopup btn btn-primary">Fechar</button>

                                                                        </div>
                                                                        <div> 
                                                                            <button onclick="abrirSenha()" type= "submit" class="botaoRemoverAnuncio btn btn-primary">Remover Anuncio</button>
                                                                        </div>
                                                                    </div>
                                                                    <br>
                                                                    <label>
                                                                        <h3>Vendedor(a): ${conjAnuncios[i][2]}</h3>
                                                                        <h4>Telefone: </h4>
                                                                        <h4>${conjAnuncios[i][1]}</h4>
                                                                        <h4>E-mail:  </h4>
                                                                        <h4>${conjAnuncios[i][0]}</h4>
                                                                    </label>

                                                                    <div class= "botoesContato">

                                                                        <label> Site <br>
                                                                            <button class= "botaoConexao site btn btn-primary" onclick= "location.href='${conjAnuncios[i][10]}'"> Site </button>
                                                                        </label>

                                                                        <label> Facebook <br>
                                                                            <a onclick="location.href='${conjAnuncios[i][7]}'" class="botaoConexao" >  <img src='https://www.itabirito.mg.leg.br/imagens/copy_of_face.png/image'> </a>
                                                                        </label>

                                                                        <!-- src= '' -->

                                                                        <label> Instagram <br>
                                                                            <a onclick="location.href='${conjAnuncios[i][8]}'" class="botaoConexao"> <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"> </a>
                                                                        </label>

                                                                        <label> Instagram (Empresa) <br>
                                                                            <a onclick="location.href='${conjAnuncios[i][9]}'" type="submit" class="botaoConexao"> <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"> </a>
                                                                        </label>

                                                                    </div>
                                                                </div>

                                                                <div class="senhaShhh" id= "inputSenhaConfirmacao">

                                                                    <label for="psw"><b>Senha de remoção</b></label>
                                                                    <input type="password" placeholder="Senha para remover anuncio" name="psw">

                                                                </div>

                                                            </div>`

                                                            console.log(conjAnuncios[i][0]);

    }

    
}

function abrirFormulario(){

    anuncios= window.localStorage;

    var conjAnuncios= JSON.parse(anuncios.getItem("conjAnuncios"));

    for(var i=0; i< conjAnuncios.length; i++){

        function abrirFormularioUnico(){
            document.getElementById("fundoPopup").style.display= "block";
            document.getElementById("dadosVendedor[i]").style.display = "block";
        }

    }
}   




function abrirFormulario(){
    document.getElementById("fundoPopup").style.display= "block";
    document.getElementById("dadosVendedor").style.display = "block";
}
function fecharFormulario(){
    document.getElementById("fundoPopup").style.display= "none";
    document.getElementById("dadosVendedor1").style.display = "none";
}

