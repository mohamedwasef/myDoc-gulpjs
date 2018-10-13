$('.menu li').click(function(){
	var id = "#" + $(this).attr('goto');
	var top = $(id).position().top;
	$('html').scrollTop(top);
});
