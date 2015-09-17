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
		var imgLink = findFullRes($(this).html());
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

// When IMAGEHTML is in format images/examplefolder/example.png
function findThumbnail(imageHtml) {
	tokens = imageHtml.split("/");
	newUrl = tokens[0] + "/" + tokens[1] + "/thumbnails" + tokens[2];
	return newUrl;
}
function findFullRes(thumbHtml) {
	tokens = thumbHtml.split("/");
	newUrl = tokens[0] + "/" + tokens[1] + "/" + tokens[3];
	return newUrl;
}