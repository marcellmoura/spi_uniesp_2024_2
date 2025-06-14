function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(mensagem) {

    /*

    var mensagem = {
            nome: "nome da pessoa", 
            email: "email informado", 
            mensagem: "a mensagem informada"} 

    */

    return $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(mensagem)
    });
}

function validarUsuario(objLoginSenha) {

    //email: admin@admin.com
    //senha: '1234'

    /*

    var objLoginSenha = {
            email: "email informado", 
            senha: "senha informada"} 

    */

    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    return retorno;
}