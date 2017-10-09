


function alterImg(){
	
	var spacingVal = $('input[name="spacing"]').val();
	$('img').css('padding',''+ spacingVal +'px');

	var hueVal = $('input[name="hue"]').val();
	$('img').css('filter','hue-rotate('+ hueVal +'deg)');

	var colorVal = $('input[name="color"]').val();
	$('.imgWrap').css('background',''+ colorVal +'');
}	


$('input').change(alterImg);
$('input').mousemove(alterImg);