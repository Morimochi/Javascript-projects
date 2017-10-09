$('.plus').click(function(){
  $('input').slideToggle(300);
});

$("input").keypress(function(e) {
  var todo = $(this).val();

  if (e.which === 13 && todo === "") {
  } else if (e.which === 13) {
    $("ul").append(
      "<li>" +
        '<i class="fa fa-trash-o" aria-hidden="true"></i>' +
         todo +
        "</li>"
    );
    $('li').slideDown(300);
    $(this).val("");
  }
});

$("ul").on("click", "li", function() {
  $(this).toggleClass("cross");
});

$('ul').on('click','.fa-trash-o',function(e){
  $(e.stopPropagation());
  $(this).parent().slideUp(300,function(){
    $(this).remove();
  });
});

