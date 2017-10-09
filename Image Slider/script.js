
var set = setInterval(slideRight,3000);
var index = 0;

$dot = $(".dots div");
$img = $('.container div');

$('.rightArrow').click(slideRight);
$('.leftArrow').click(slideLeft);

$dot.click(function(){
  n = $(this).index();
  index = n;
  showSlide(n);
});
  
function slideRight(){showSlide(index+=1);}
function slideLeft(){showSlide(index-=1);}

function showSlide(n){
  
  clearInterval(set);
  set = setInterval(slideRight,3000);
  var active = $('.active').index();
  
	$('.block').removeClass('block');
	$('.active').addClass('block').removeClass('right left active');
  $('.on').removeClass('on');
    
	if(index > $img.length-1){
    index = 0;
    n = 0;
	}
	if(index === -1){
		index = $img.length-1;
	}
	if(n > active){
		$img.eq(n).addClass('right active');
    console.log('right');
	}else{
		$img.eq(n).addClass('left active');
    console.log('left');
	}
  $dot.eq(n).addClass('on');
}



