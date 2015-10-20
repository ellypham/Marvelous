
var marvelApp = {};
marvelApp.publicKey = '6e1457926542a2c765f64c571114fa4e';

marvelApp.getCharacters = function(){
    $.ajax({
        url:'http://gateway.marvel.com/v1/public/characters',
        method: 'GET',
        dataType: 'json',
        data:{
            apikey: marvelApp.publicKey,
            limit:100
        }
    }).then(function(res){
        console.log(res);
    });
};