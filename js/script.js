$(document).ready(function(){
  
  $('#welcome-logo').css("transform", "translateY(0%)").css("opacity", "1");
  $('.welcome-h2-wrap span').css("transition-delay", "1s").css("opacity", "1");
  
  
  
  //  Arro button and scroll
  
  $('#down-arrow').on('click', function(e){
    e.preventDefault();
    $('body').animate({
      scrollTop: window.pageYOffset + $(window).height()
    }, 300);
  })
  
  // Hide ScrollDown Arrow
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 2) {
      $('#down-arrow').css('display', 'none');
        // apply effects and animations
    }else{
      $('#down-arrow').css('display', 'flex');
    }
  });
  
  // Burger Button

  /*$(".container-burger").click(function(){
    $(this).toggleClass("change");
    $(".main-nav").toggleClass("menu");
    
  });*/
  
  
   /*if($('#main-nav').is("display", "block")) {
        $('body').addClass("fixedposition");
     }else{
        $('body').removeClass("fixedposition");
     }
  
  */
  
  
  
});