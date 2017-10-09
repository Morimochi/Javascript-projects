function removeMenu(){ 
		$('.menu').each(function(){ $(this).slideUp(300); });	
	}
  
 function removeActive(){
    $(this).removeClass('active');
 }

function dropdown() {
  removeMenu();  
	if( $(this).find('span').hasClass('active') ){
		$('.link span').each(removeActive);
	}else{
		$('.link span').each(removeActive);
		$(this).find('.menu').slideDown(300);
    $(this).find('span').addClass('active');	
	}
    
   $('.container').click(function(){
    removeMenu();
    $('.link span').each(removeActive);
    $('.burger').removeClass('cross');
    $('.navbar').removeClass('showBar');
   });
}

$('.link').click(dropdown);

function fadeIn() {
    // nav lifted and turn black
    if (window.scrollY > 200) {$('nav').addClass('lift');}
    if (window.scrollY < 200) {$('nav').removeClass('lift');}

    if (window.scrollY > 200) {$('.nav-base').addClass('blackOut');}
    if (window.scrollY < 200) {$('.nav-base').removeClass('blackOut');}

    // elements fade in on scroll
    function show() {
        var showAt = window.scrollY + window.innerHeight * 0.85;
        var isShown = showAt > $(this).offset().top;

        if (isShown) { $(this).addClass('show'); }
        if (window.scrollY === 0) { $(this).removeClass('show'); }
    }
    $('h2, p, img').each(show);
}

$(window).scroll(fadeIn);


$('.burger').click(function(){
  
  if($('.navbar').hasClass('showBar')){
    removeMenu();
    $('.link span').each(removeActive);
    $(this).removeClass('cross');
    $('.navbar').removeClass('showBar');  
  }else{
    $(this).addClass('cross');
    $('.navbar').addClass('showBar');
  }
});