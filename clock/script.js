


function runTime(){
	var time = new Date();

	var sec = time.getSeconds();
	var secDeg = sec/60*360;
	$('.sec-hand').css('transform','rotate('+ secDeg +'deg)');

	var min = time.getMinutes();
	var minDeg = min/60*360;
	$('.min-hand').css('transform','rotate('+ minDeg +'deg)');

	var hour = time.getHours();
	var hourDeg = hour/12*360;
	$('.hour-hand').css('transform','rotate('+ hourDeg +'deg)');

}

setInterval(runTime,1000);