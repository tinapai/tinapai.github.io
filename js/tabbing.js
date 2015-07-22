// tabbing stuff
$(document).ready(function() {

	var availableTabs = ['#tab1', '#tab2', '#tab3'];

	function tab(tab) {
		if (!$.inArray(tab, availableTabs)) {
			console.log("invalid tab. Please update your available tabs");
		} else {
			var arrayLength = availableTabs.length;
			for (var i = 0; i < arrayLength; i++) {
				//maybe have problems where tab doesn't exist
			    $(availableTabs[i] + 'Content').hide();
			    $(availableTabs[i] + 'Content').css({'class': ''});
			    $(availableTabs[i]).css({'background': '#B4B6BD'});
			}
			$("#" + tab + 'Content').show();
			$("#" + tab + 'Content').css({'class': 'active'});
			$("#" + tab).css({'background': '#E8E3E3'});

		}
	};

	$('.tab').click(function() {
		target = $(this).attr('id')
		tab(target);
	});
});