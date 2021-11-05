comentario= window.localStorage;

function enviarFeedback(){

    var conjFeedbacks= JSON.parse(comentario.getItem("conjFeedbacks")) || [];
    
    var feedback= $("#feedbackText").val();
    
    var nomeIdentificado= $("#feedbackNome").val();
    
    dadosFeedback=[feedback, nomeIdentificado];

    conjFeedbacks.push(dadosFeedback);
    comentario.setItem("conjFeedbacks", JSON.stringify(conjFeedbacks));


}