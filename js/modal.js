//image modal

$(document).ready(function() {

        // set the returned contents in a new base <html> tag.
        // var response = $('<html />').html(data),
        //     anchors, hrefValuesList = [ ],
        //     i, end;

        // now you can search the returned html data using .find().
        // anchors = response.find('a');

        // grab all your href values from each anchor element.
        // end = anchors.length;
        // for (i = 0; i < end; i++) {
        //     hrefValuesList.push( anchors[ i ].href );
        // }
    // var doc = $('html');
    // console.log(doc);
    // console.log(doc.find('grid-item'));
	$('.grid').on("click", '.grid-item', function() {
		console.log("a");
		var imgLink = $(this).html();
		makeModal(imgLink);
	});

	$('#modal').click(function() {
			hideModal();
	});
});
	
function makeModal(imageHtml) {
	$('#modal').show();
	$('#modal').after('<div id="modalImg">' + imageHtml + '</div>');
	$('#modal').css('class: active');
};
function hideModal() {
	$('#modal').hide();
	$('#modalImg').remove();
	$('#modal').css('class: ""');
}