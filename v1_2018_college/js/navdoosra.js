$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 70) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 70) {
        $('#global-nav').removeClass('scrolled-nav');
      } 
      
    }); 
    
  });