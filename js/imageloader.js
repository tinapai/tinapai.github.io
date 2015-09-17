
$(document).ready(function() {
	//start by loading tab 1
	tab('tab1'); //see tab() in tabbing.js

	layoutMasonry('tab1Grid');
});

//put all the images in ARRAY into the html
function loadImages(array) {
	for (var i = 0; i < array.length; i++) { 
    	$('#' + activeTab + 'Grid').append('<div class="grid-item">' + array[i] + '</div>');
	}

	layoutMasonry(activeTab + 'Grid');
}

//layout Masonry after every image has loaded
//parameter GRIDID is a String; example 'tab1Grid', 'tab2Grid', etc.
function layoutMasonry(gridId) {
	$('#' + gridId).imagesLoaded(function() {
    	$('#' + gridId).masonry({
			itemSelector: '.grid-item',
			columnWidth: 200,
			gutter: 10,
		});
    });
}

var illustrationArray = [
	'<img class="ill" src="images/illustrations/thumbnails/20150716 visa illustration.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/icecreamtruck.jpg"/>',
	'<img class="ill" src="images/illustrations/thumbnails/TinachaunPoint.png">',
	'<img class="ill" src="images/illustrations/thumbnails/Christmas2013Dad.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/img670.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/img671.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/img674.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/img676.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/img679.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/img682.png"/>',
	'<img class="ill" src="images/illustrations/thumbnails/img683.png"/>',
	];

var graphicsArray = [
	'<img class="gra" src="images/infographics/thumbnails/20150619.budget.tpai-02.png"/>',
	'<img class="gra" src="images/infographics/thumbnails/Administration.tpai.png"/>',
	'<img class="gra" src="images/infographics/thumbnails/Berkeley.tpai.png">',
	'<img class="gra" src="images/infographics/thumbnails/bitcoin.tpai0.png"/>',
	'<img class="gra" src="images/infographics/thumbnails/budget.tpai.png"/>',
	'<img class="gra" src="images/infographics/thumbnails/Calso.tpai.png"/>',
	'<img class="gra" src="images/infographics/thumbnails/descriptions.tpai.png"/>',
	'<img class="gra" src="images/infographics/thumbnails/lawsuit.tpai.png"/>',
	'<img class="gra" src="images/infographics/thumbnails/PAC-color.tpai.png"/>',
	];

// var photoArray = [
// 	'<img class="pho" src="images/photos/IMG_7713.jpg"/>',
// 	'<img class="pho" src="images/photos/IMG_8393.jpg"/>',
// 	'<img class="pho" src="images/photos/IMG_8395.jpg">',
// 	'<img class="pho" src="images/photos/IMG_8677.jpg"/>',
// 	'<img class="pho" src="images/photos/IMG_8679.jpg"/>',
// 	//'<img class="pho" src="images/photos/TeaTasting.gif"/>',
// 	// '<img class="pho" src="images/photos/img674.png"/>',
// 	// '<img class="pho" src="images/photos/img676.png"/>',
// 	// '<img class="pho" src="images/photos/img679.png"/>',
// 	// '<img class="pho" src="images/photos/img682.png"/>',
// 	// '<img class="pho" src="images/photos/img683.png"/>',
// 	];

var uiArray = [
	// '<img class="ui" src="images/uis/AAA web ui 3.pdf"/>',
	'<img class="pho" src="images/uis/thumbnails/AAAWebUi2.png"/>',
	];

var abtMeArray = [];

var tabArrayMap = {
    'tab1': abtMeArray,
    'tab2': illustrationArray,
    'tab3': graphicsArray,
    'tab4': uiArray,
};
