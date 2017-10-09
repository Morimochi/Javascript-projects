var input = $('input');

$('.numpad div,.operator div').click(function () {
    entry = $(this).text(); 
    //input clicked value
    input.val( input.val() + entry );
   
    arr = input.val().toString().split('');
    //prevent duplication of operators and dot
    if( isNaN(entry) && isNaN(arr[arr.length-2]) ){
         input.val(arr.splice(0, arr.length-1).join(''));
        }
    //set input limit
    if(input.val().length > 17){
        input.val(arr.splice(0, 18).join(''));
    }  
    //replace math symbols with operators
    if(entry === '×'||'='||'÷'){
      input.val(input.val().replace('=','').replace('×','*').replace('÷','/'));
    }
 });

 $('.ac').click(function () {
     input.val('');
 });

$('.del').click(function() {
    x = input.val().toString().split('').splice(0,input.val().length-1).join('');
    input.val(x);
});

$('.equal').click(function() {
    input.val(eval(input.val()));  
});
