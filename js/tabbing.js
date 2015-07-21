// tabbing stuff
$(document).ready(function() {

	var availableTabs = ['#tab1', '#tab2'];

	function tab(tab) {
		if (!$.inArray(tab, availableTabs)) {
			console.log("invalid tab. Please update your available tabs");
		} else {
			var arrayLength = availableTabs.length;
			for (var i = 0; i < arrayLength; i++) {
				//maybe have problems where tab doesn't exist
			    $(availableTabs[i] + 'Content').hide();
			    $(availableTabs[i] + 'Content').css('class', '');
			}
			$("#" + tab + 'Content').show();
			$("#" + tab + 'Content').css('class', 'active');;

		}
	};

	$('#tab1').click(function() {
		tab("tab1");
	});

	$('#tab2').click(function() {
		tab("tab2");
	});
});