$(document).ready(function() {
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });



  $('.car-menu__more').click(function () {
    $('.car-menu__more').toggleClass('open');
  });

  let owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    autoplay: true,
  });

  $('.owl-dot').click(function () {
    owl.trigger('stop.owl.autoplay');
    owl.trigger('play.owl.autoplay');
  });

//  owl.on('changed.owl.carousel', function(e) {
//    owl.trigger('stop.owl.autoplay');
//    owl.trigger('play.owl.autoplay');
//  });
//
//  owl.on('mousewheel', '.owl-stage', function (e) {
//    if (e.deltaY>0) {
//      owl.trigger('next.owl');
//    } else {
//      owl.trigger('prev.owl');
//    }
//    e.preventDefault();
//  });

  $(window).scroll(function (event) {
    let scroll = $(window).scrollTop();

    if (scroll >= 8600) {
      $('.client-info__car-img').addClass('active');
    } else {
      $('.client-info__car-img').removeClass('active');
    }

    if (scroll >= 120) {
      $('.fixed-items__btns').addClass('btn_visible');
    } else {
      $('.fixed-items__btns').removeClass('btn_visible');
    }
  });

});