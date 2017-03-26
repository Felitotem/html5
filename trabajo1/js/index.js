$(document).ready(function() {
//Animation.css
$('.anisamus').each(function() {
        animationHover(this, 'bounce');
    });


    function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

//Flexslider
  $('.flexslider').flexslider({
    animation: "slide"
  });

//Beforeafter

    $("#container").twentytwenty();


//Reloj



  $("#testResizableArray").sevenSeg({ digits: 12 });
  $("#testResizableDiv2").resizable({ aspectRatio: true });

  var iArrayValue = 178450258562;
  setInterval(function() {
      $("#testResizableArray").sevenSeg({ value: iArrayValue });
      if(++iArrayValue > 999999999999) {
          iArrayValue = 178450258562;
      }
  }, 50);



});
