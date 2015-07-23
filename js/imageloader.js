
$(document).ready(function() {
	//start by loading tab 1
	tab('tab1'); //see tab() in tabbing.js

	//layout Masonry after each image loads
	$('.grid').imagesLoaded(function() {
    	$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: 200,
			gutter: 10,
		});
    });
});

//put all the images in ARRAY into the html
function loadImages(array) {
	for (var i = 0; i < array.length; i++) { 
    	$('#' + activeTab + 'Grid').append('<div class="grid-item">' + array[i] + '</div>');
	}
}

var illustrationArray = [
	'<img class="ill" src="images/illustrations/Lava.png"/>',
	'<img class="ill" src="images/illustrations/icecreamtruck.jpg"/>',
	'<img class="ill" src="images/illustrations/TinachaunPoint.png">',
	'<img class="ill" src="images/illustrations/Christmas2013Dad.png"/>',
	'<img class="ill" src="images/illustrations/img670.png"/>',
	'<img class="ill" src="images/illustrations/img671.png"/>',
	'<img class="ill" src="images/illustrations/img674.png"/>',
	'<img class="ill" src="images/illustrations/img676.png"/>',
	'<img class="ill" src="images/illustrations/img679.png"/>',
	'<img class="ill" src="images/illustrations/img682.png"/>',
	'<img class="ill" src="images/illustrations/img683.png"/>',
	];

var graphicsArray = [
	'<img class="gra" src="images/infographics/20150619.budget.tpai-02.png"/>',
	'<img class="gra" src="images/infographics/administration.tpai.png"/>',
	'<img class="gra" src="images/infographics/Berkeley.tpai.png">',
	'<img class="gra" src="images/infographics/bitcoin.tpai0.png"/>',
	'<img class="gra" src="images/infographics/budget.tpai.png"/>',
	'<img class="gra" src="images/infographics/Calso.tpai.png"/>',
	'<img class="gra" src="images/infographics/descriptions.tpai.png"/>',
	'<img class="gra" src="images/infographics/lawsuit.tpai.png"/>',
	'<img class="gra" src="images/infographics/PAC-color.tpai.png"/>',
	];

var photoArray = [
	'<img class="pho" src="images/photos/IMG_7713.jpg"/>',
	// '<img class="pho" src="images/photos/icecreamtruck.jpg"/>',
	// '<img class="pho" src="images/photos/TinachaunPoint.png">',
	// '<img class="pho" src="images/photos/Christmas2013Dad.png"/>',
	// '<img class="pho" src="images/photos/img670.png"/>',
	// '<img class="pho" src="images/photos/img671.png"/>',
	// '<img class="pho" src="images/photos/img674.png"/>',
	// '<img class="pho" src="images/photos/img676.png"/>',
	// '<img class="pho" src="images/photos/img679.png"/>',
	// '<img class="pho" src="images/photos/img682.png"/>',
	// '<img class="pho" src="images/photos/img683.png"/>',
	];

var tabArrayMap = {
    'tab1': illustrationArray,
    'tab2': graphicsArray,
    'tab3': photoArray
};
