anuncios= window.localStorage;

conjAnuncios=[]

function cadastrarItem(){
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
    
}