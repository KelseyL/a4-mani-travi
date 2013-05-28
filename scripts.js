$(document).ready(function(){
	$("#locations > li").find("img").click(function(){
		var location = $(this).closest(".city");
		var answer = location.data("location");
		var place = $('<p class="place">'+answer+'</p>');
		location.append(place);
	});
});