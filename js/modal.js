//image modal

$(document).ready(function() {
	
	$('.grid-item').click(function() {
		console.log("a");
		var imgLink = $(this).html();
		makeModal(imgLink);
	});
	$('#modal').click(function() {
		hideModal();
	})

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