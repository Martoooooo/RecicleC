
anuncios= window.localStorage;

function cadastrarItem(){

    var conjAnuncios = JSON.parse(anuncios.getItem("conjAnuncios")) || [];

    var emailVendedor= $("#emailVendedor").val();
    var telefoneVendedor= $("#telefoneVendedor").val();
    var nomeVendedor= $("#nomeVendedor").val();

    var nomeProduto= $("#nomeProduto").val();
    var valorProduto= $("#valorProduto").val();
    var descricaoProduto= $("#descricaoProduto").val();
    var senhaConfirmacao= $("#senhaConfirmacao").val();



    var facebook= $("#facebook").val();
    var instagram= $("#instagram").val();
    var instagramEmpresa= $("#instagramEmpresa").val();
    var site= $("#site").val();


    anuncioUnico=[emailVendedor, telefoneVendedor, nomeVendedor, nomeProduto, valorProduto, descricaoProduto, senhaConfirmacao,
    facebook, instagram, instagramEmpresa, site];

    conjAnuncios.push(anuncioUnico);
    anuncios.setItem("conjAnuncios", JSON.stringify(conjAnuncios));

    if((nomeVendedor != "") && (nomeProduto != "") && (valorProduto != "") && (senhaConfirmacao != "")){
        
        location.href = "../paginas/loja.html";        

    } else{

        if (document.getElementById("avisos").innerHTML == "Há campos necessários que não foram preenchidos. Por favor, preencha-os"){
            document.getElementById("avisos").innerHTML == "";

        }else { 
            document.getElementById("avisos").innerHTML += "Há campos necessários que não foram preenchidos. Por favor, preencha-os";

        }
    }
}



function criarAnuncio(){

    anuncios= window.localStorage;

    var conjAnuncios= JSON.parse(anuncios.getItem("conjAnuncios"));

    //cria todos os anuncios
    for(var i=0; i< conjAnuncios.length; i++){
        console.log(i)

        document.getElementById("anuncios").innerHTML +=   `
                                                            <div class="anuncioUnico card">

                                                                <img src="https://static.wixstatic.com/media/830d71_d544e83561f341df83afe2f41ca996ff~mv2_d_2149_3024_s_2.jpg/v1/fill/w_195,h_274,al_c,q_80,usm_0.66_1.00_0.01/830d71_d544e83561f341df83afe2f41ca996ff~mv2_d_2149_3024_s_2.webp" class="card-img-top" alt="...">
                                                                <div class="card-body">

                                                                    <h5 class="card-title"> ${conjAnuncios[i][3]} </h5>
                                                                    <h3 class="preco"> ${conjAnuncios[i][4]} </h3>
                                                                    <p class="card-text">${conjAnuncios[i][5]}</p>

                                                                    <a href="#" class="btn btn-primary" onclick="abrirFormulario${i})"> Comprar </a>

                                                                </div>

                                                            </div>

                                                            <!--Janela do vendedor-->

                                                            <div id="dadosVendedor${i}" class="white_content">

                                                                <div class= "dadosVendedor">
                                                                    <div class="botoesManipPopup">
                                                                        <div>
                                                                            <button onclick="fecharFormulario${i}()" type="submit" class="botaoFecharPopup btn btn-primary">Fechar</button>

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
    }

    
}
