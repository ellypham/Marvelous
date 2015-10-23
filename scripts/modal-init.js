(function(){
	var $content = $('#share-options').detach();

	$('.doctorStrange, .spiderMan, .thanos, .blackPanther, .lukeCage, .jessicaJones, .ironFist, .inhumans').on('click', function(){
		modal.open({content: $content, width:700, height:500});
	});
}());