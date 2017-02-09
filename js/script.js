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