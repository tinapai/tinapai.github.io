// tabbing stuff
$(document).ready(function() {
	//when you click a tab, this will make a call to switch tabs
	$('.tab').click(function() {
		target = $(this).attr('id')
		tab(target);
	});
});

var availableTabs = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5']; //used to be: var availableTabs = ['#tab1', '#tab2', '#tab3'];
var activeTab = 'tab1';
var loadedTabs = [];

//switch tabs (changing the visibility of pages) such that TAB is the new active tab
//parameter TAB is type String; should look like 'tab1' or 'tab2' etc.
function tab(tab) {
	if ($.inArray(tab, availableTabs) == -1) {
		console.log("invalid tab. Please update your available tabs");
	} else {
		var arrayLength = availableTabs.length;
		for (var i = 0; i < arrayLength; i++) {
			//maybe have problems where tab doesn't exist
		    $("#"+availableTabs[i] + 'Content').hide(); 
		    $("#"+availableTabs[i] + 'Content').css({'class': ''});
		    $("#"+availableTabs[i]).css({'background': 'rgb(0, 45, 60)'});
		}
		$("#" + tab + 'Content').show();
		$("#" + tab + 'Content').css({'class': 'active'});
		activeTab = tab;
		$("#" + tab).css({'background': 'rgb(67, 153, 152)'});
		if ($.inArray(tab, loadedTabs) == -1) {
			loadTab(activeTab);
		}
		if (window.mobilecheck()) {
			layoutMobileMasonry(activeTab + 'Grid');
		} else {
			layoutMasonry(activeTab + 'Grid');
		}
	}
};


//Loads the images for the tab you want
//parameter TAB is type String; should look like 'tab1' or 'tab2' etc.
function loadTab(tab) {
	console.log(tab)
	var arrayToLoad = tabArrayMap[tab]; //see Array tabArrayMap in imageloader.js
	loadImages(arrayToLoad);
	loadedTabs.push(tab);
}