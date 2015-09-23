
$(document).ready(function() {
	//start by loading tab 1
	tab('tab1'); //see tab() in tabbing.js
	console.log("mobilechecking: " + window.mobilecheck());
	if (window.mobilecheck) {
		layoutMobileMasonry('tab1Grid')
	} else {
		layoutMasonry('tab1Grid');		
	}
});

window.mobilecheck = function() { //credits go to http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

//put all the images in ARRAY into the html
function loadImages(array) {
	for (var i = 0; i < array.length; i++) { 
    	$('#' + activeTab + 'Grid').append('<div class="grid-item">' + array[i] + '</div>');
	}
	var isMobile = window.mobilecheck();
	if (isMobile) {
		console.log(isMobile);
		layoutMobileMasonry(activeTab + 'Grid');
	} else {
		layoutMasonry(activeTab + 'Grid');
	}
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

function layoutMobileMasonry(gridId) {
	$('#' + gridId).imagesLoaded(function() {
    	$('#' + gridId).masonry({
			itemSelector: '.grid-item',
			columnWidth: 400,
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
