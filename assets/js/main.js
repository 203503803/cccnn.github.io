(function($) {
  
  "use strict";  

  $(window).on('load', function() {

     /* Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });



    /* ==========================================================================
    countdown timer
    ========================================================================== */
     jQuery('#clock').countdown('2024/01/01',function(event){
      var $this=jQuery(this).html(event.strftime(
            '<div class="header-countdown pt-70 d-flex justify-content-center">'+'<div class="single-count-content count-color-1"><span class="count">%D</span><p class="text">天/Days</p></div>'+'<div class="single-count-content count-color-2"><span class="count">%H</span><p class="text">时/Hours</p></div>'+'<div class="single-count-content count-color-3"><span class="count">%M</span><p class="text">分/Minutes</p></div>'+'<div class="single-count-content count-color-4"><span class="count">%S</span><p class="text">秒/Seconds</p></div></div>'));
    });


    // one page navigation 
    $('.onepage-nev').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));