// main.js for jumpstart
$(document).ready( function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    slidesPerRow: 1,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollAmount = 0;
  $(window).scroll( function(){
    var curTop = $(this).scrollTop();
    if ( (curTop - scrollAmount) > 50 ) {
      var navbarH = $('.navbar').outerHeight();
      $('.navbar').animate({top: '-' + navbarH}, 150);
      scrollAmount = curTop ;
    } else if ( scrollAmount - curTop > 50 ) {
      $('.navbar').animate({top: '0px'}, 150);
      scrollAmount = curTop;
    }
  });
});
