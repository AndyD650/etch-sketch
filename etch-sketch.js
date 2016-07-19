$(document).ready(function() {

	$('body').append('<div class = "container"></div>')
	$(".container").append('<ul></ul>').append('<ul></ul>').append('<ul></ul>').prepend('<ul></ul>');
	$('ul').append('<li></li>').append('<li></li>').append('<li></li>').append('<li></li>');
	$('li').append('<div></div>');

	$('.container').css({
		'margin': 'auto',
	});

	$('li').css({
		'list-style-type': 'none',
		'width': '50px',
		'height': '50px',
		'border-style': 'solid',
	});

	$('li div').css({
		'width': '50px',
		'height': '50px',
	});

	$('ul').css({
		'display': "inline-block",
		'margin': '0px 0',
	    'padding': '0px',  
	});

	$('li div').hover(function () {
		$(this).css('background-color', 'blue');
	});

$('button').on('click', function(){
	var cells = prompt("How many cells should your new grid be?");
	$('.container').remove();
	$('body').append('<div class = "container"></div>');
	for (var i = 0; i < cells; i++) {
		$('.container').append('<ul></ul>');
	};
	
	for (var i = 0; i < cells; i++) {
		$('ul').append('<li></li>');
	};
	var width_value = 200/cells;
	var width_px = width_value + 'px';
	
	$('li').css({
		'list-style-type': 'none',
		'border-style': 'solid',
		'width': width_px,
		'height': width_px,
	});

	$('ul').css({
		'display': "inline-block",
		'margin': '0px 0',
	    'padding': '0px',  
	});
	$('li').hover(function () {
		$(this).css('background-color', 'blue');
	});
	
});

	
});

