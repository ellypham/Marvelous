
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
            name: "spider-man"
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
//             var time = $('<h4>').addClass('time').text('Preparation time: ' + value.totalTimeInSeconds/60 + ' minutes');
//             var image = $('<img>').addClass('image').attr('src', value.imageUrlsBySize[90].replace(/s90/g,'s300'));
//             var ingredientsList = $('<h3>').addClass('ingredientTitle').text('List of Ingredients:');
//             var ingredients = $('<p>').addClass('ingredientTitle').text(value.ingredients);
       
//             var checkbox = $('<input type="checkbox" class="userSelectedRecipe">').val(value.id).addClass('selectedRecipes')
//             ;
//             var checkboxText = $('<p>').addClass('addToList').text('Add to Shopping list:').append(checkbox)
//             ;
//             var recipeContainer = $('<div>').addClass('displayedRecipe').append(recipeTitle,time, checkboxText, checkbox,  image, ingredientsList, ingredients );
//             $('#selectedRecipes').append(recipeContainer); 
               $('.gallery-cell').append(galleryCell); 
               $('.comic-gallery').flickity({
                 // options//
                 cellAlign: 'left',
                 contain: true,
                 wrapAround: true
               });
});
};


