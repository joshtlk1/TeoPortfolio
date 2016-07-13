$(document).ready(function(){
var $navigation = $(".navigation");
$($navigation).hover(function() {
		$(this).fadeTo("fast", 0.25); 
			}, function() {
		$(this).fadeTo("fast", 1); 
			}
			);


$("ul li").click(function() {
	$(this).css('background-color', 'red');
	$(this).text("Clicked!");
})

});

