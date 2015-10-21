
var marvelApp = {};
marvelApp.publicKey = '6e1457926542a2c765f64c571114fa4e';

$(function(){
  marvelApp.init();  
});

marvelApp.init = function(){
    marvelApp.getCharacters(); 
}; 

marvelApp.getCharacters = function(){
    $.ajax({
        url:'http://gateway.marvel.com/v1/public/characters',
        method: 'GET',
        dataType: 'json',
        data:{
            apikey: marvelApp.publicKey,
            limit:10,
            // name: "spider-man"
        }
    }).then(function(res){
        var characters = (res.data);
        console.log(characters);
        marvelApp.displayCharacters(characters);
    });
};

marvelApp.displayCharacters = function(characters) {
    $.each(characters.results, function(i, value){
               var galleryCell = $('<img>').attr('src', value.thumbnail.path +'.' + value.thumbnail.extension);
               $('.comic-gallery').append(galleryCell); 
  });
    $('.comic-gallery').flickity({
      // options//
      cellAlign: 'left',
      imagesLoaded: true,
      contain: true,
      wrapAround: true
    });
};


