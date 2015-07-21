
$(document).ready(function() {

	$("#demo").html("My First JavaScript");

	var illustrationArray = [
		'<img class="ill" src="images/illustrations/Lava.png"/>',
		'<img class="ill" src="images/illustrations/img670.png"/>',
		'<img class="ill" src="images/illustrations/img671.png"/>',
		'<img class="ill" src="images/illustrations/img674.png"/>',
		'<img class="ill" src="images/illustrations/img679.png"/>',
		'<img class="ill" src="images/illustrations/img676.png"/>',
		'<img class="ill" src="images/illustrations/img679.png"/>',
		'<img class="ill" src="images/illustrations/img682.png"/>',
		'<img class="ill" src="images/illustrations/img683.png"/>',
		'<img class="ill" src="images/illustrations/TinachaunPoint.png">',
		'<img class="ill" src="images/illustrations/Christmas2013Dad.png"/>',
		];

	for (i = 0; i < illustrationArray.length; i++) { 
    	$('.grid').append('<div class="grid-item">' + illustrationArray[i] + '</div>');
	}

	//layout Masonry after each image loads
	$('.grid').imagesLoaded(function() {
    	$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: 200,
			gutter: 10,
		});
    });
});
