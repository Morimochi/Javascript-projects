

$(window).keydown(playSound);

function playSound(e) {

    var key = $(`.key[data-key="${e.keyCode}"]`);
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    key.addClass('playing');
    
    if(!audio){return;};
    audio.currentTime=0;
    audio.play();

    $(window).keyup(function(e) {
        key.removeClass('playing');
    })

}