var time = $(".time");
var isRun = true;

//click to decrement
$(".minus").click(function() {
  $(this).siblings(".length").text(function() {
    if ($(this).text() > 0) {
      return $(this).text() - 1;
    }
  });
});
//click to increment
$(".plus").click(function() {
  $(this).siblings(".length").text(function() {    
      return Number($(this).text()) + 1;    
  });
});

//click to start session
$(".clock").one("click", startSession);
//click to pause/resume
$(".push").one("click", isFalse);

function isFalse() {
  if (time.text() !== "start") {
    isRun = false;
    $(".push").text("resume").one("click", isTrue);
  } else {
    $(".push").one("click", isFalse);
  }
}
function isTrue() {
  isRun = true;
  $(".push").text("pause").one("click", isFalse);
}
function startSession() {
  $('.clock').addClass('color');
  time.text($(".session .length").text());
  set = setInterval(sessionRun, 1000);
  $(".minus,.plus").addClass("hide");
  $(".wrap").slideUp(300);
}
function sessionRun() {
  if (isRun) {
    time.text(time.text() - 1);
    //add 'break' text and hide zero
    if (time.text() == 0) {
      time.css("opacity", "0");
      $(".clock").append('<div id="x">break</div>');
    }
    //remove 'break' text and reveal numbers
    //start break time
    if (time.text() < 0) {
      time.css("opacity", "1");
      $(".clock #x").remove();
      clearInterval(set);
      startBreak();
    }
  }
}
function startBreak() {
  if (isRun) {
    time.text($(".break .length").text());
    set = setInterval(breakRun, 1000);
  }
}
function breakRun() {
  if (isRun) {
    time.text(time.text() - 1);
    //add 'start/end' text and hide zero
    if (time.text() == 0) {
      time.css("opacity", "0");      
      if ($(".count .length").text() > 0) {
        $(".clock").append('<div id="x">start</div>');
      }else{
        $(".clock").append('<div id="x">end</div>');
      }
    }
    //remove 'start/end' text and reveal numbers
    if (time.text() < 0) {
      time.css("opacity", "1");
      $(".clock #x").remove();
      //run session if count > 0
      if ($(".count .length").text() > 0) {
        clearInterval(set);
        startSession();
        $(".count .length").text($(".count .length").text() - 1);
      } else {
        //stop session
        clearInterval(set);
        time.text("start");
        $(".minus,.plus").removeClass("hide");
        $(".wrap").slideDown(300);
        $(".clock").one("click", startSession).removeClass('color');
      }
    }
  }
}
//click to stop
$(".stop").on("click", stop);

function stop() {
  if (time.text() !== "start") {
    clearInterval(set);
    $(".clock").one("click", startSession).removeClass('color');
    time.text("start").css("opacity", "1");
    $(".minus,.plus").removeClass("hide");
    $(".wrap").slideDown(300);
    $(".clock #x").remove();
    if ($(".push").text() === "resume") {
      isTrue();
    }
  }
}
