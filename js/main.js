$(document).ready(function() {
  $('.progress-menu__list-item:nth-child(1)').addClass('point');

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

  $('.tab-list__item:nth-child(1)').addClass('active');

  $(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    console.log(scroll);

    /* Moves car */
    if (scroll >= 8600) {
      $('.client-info__car-img').addClass('active');
    } else {
      $('.client-info__car-img').removeClass('active');
    }

    /* Show fixed buttons on right side*/
    if (scroll >= 120) {
      $('.fixed-items__btns').addClass('btn_visible');
    } else {
      $('.fixed-items__btns').removeClass('btn_visible');
    }

    if (scroll < 980) {
      $('.progress-menu__list-item:nth-child(1)').addClass('point');
      $('.progress-menu__list-item:nth-child(2)').removeClass('point');
    }

    if (scroll >= 980) {
      $('.progress-menu__list-item:nth-child(1)').removeClass('point');
      $('.progress-menu__list-item:nth-child(2)').addClass('point');
      $('.progress-menu__list-item:nth-child(3)').removeClass('point');
    }
    if (scroll >= 2879) {
      $('.progress-menu__list-item:nth-child(2)').removeClass('point');
      $('.progress-menu__list-item:nth-child(3)').addClass('point');
      $('.progress-menu__list-item:nth-child(4)').removeClass('point');
    }
    if (scroll >= 4892) {
      $('.progress-menu__list-item:nth-child(3)').removeClass('point');
      $('.progress-menu__list-item:nth-child(4)').addClass('point');
      $('.progress-menu__list-item:nth-child(5)').removeClass('point');
    }
    if (scroll >= 6561) {
      $('.progress-menu__list-item:nth-child(4)').removeClass('point');
      $('.progress-menu__list-item:nth-child(5)').addClass('point');
      $('.progress-menu__list-item:nth-child(6)').removeClass('point');
    }
    if (scroll >= 8055) {
      $('.progress-menu__list-item:nth-child(5)').removeClass('point');
      $('.progress-menu__list-item:nth-child(6)').addClass('point');
      $('.progress-menu__list-item:nth-child(7)').removeClass('point');
    }
    if (scroll >= 9397) {
      $('.progress-menu__list-item:nth-child(6)').removeClass('point');
      $('.progress-menu__list-item:nth-child(7)').addClass('point');
    }
  });
  
  /* Popup-share */

  // Shows popup window on click
  $('.share').click(function () {
    $('.popup-mask').addClass('active');
    $('.popup-share').addClass('active');
  });

  // Exit from popup window with click on exit button
  $('.popup-share__exit').click(function () {
    $('.popup-mask').removeClass('active');
    $('.popup-share').removeClass('active');
  });

  // Exit from popup window with click on mask
  $('.popup-mask').click(function () {
    $('.popup-mask').removeClass('active');
    $('.popup-share').removeClass('active');
    $('.header').removeClass('active');
    $('.popup-catalog').removeClass('active');
  });

  /* Popup-catalog */
  // Shows popup window on click
  $('.catalog').click(function () {
    $('.popup-mask').addClass('active');
    $('.popup-catalog').addClass('active');
    $('.header').addClass('active');
  });

  
});