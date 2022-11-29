jQuery(document).ready(function ($) {
  jQuery(".top-up").click(function () {
    jQuery("html, body").animate(
      {
        scrollTop: jQuery("html").offset().top,
      },
      1000
    );
  });
 
  $(".slide_home").slick({
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // // autoplay: true,
    // autoplaySpeed: 1000,
    // dots: true,

    // dots: true,
    // infinite: true,
    // speed: 500,
    // fade: true,
    // cssEase: 'linear'
    slidesToShow: 3,
    slidesToScroll: 1,
 
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      
      {
        breakpoint: 869,
        settings: {
          slidesToShow: 3,
          arrow: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrow: false,
          slidesToScroll: 1,
        },
      },
    ],


  });

  $('.comic1').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: false,
    fade: false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrow: false,
        },
      },
      {
        breakpoint: 869,
        settings: {
          slidesToShow: 4,
          arrow: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrow: false,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.comic2').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrow: false,
        },
      },
      {
        breakpoint: 869,
        settings: {
          slidesToShow: 4,
          arrow: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrow: false,
          slidesToScroll: 1,
        },
      },
    ],
  });
          
});

// scrool top
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".top-up").addClass("add-show");
  } else {
    $(".top-up").removeClass("add-show");
  }
});

$(document).ready(function(){
  $(".kt_the_loai").click(function(){
    $(".js-show-menu").slideToggle(0);
  })
  $(".menu-mobe-show").click(function(){
    $(".collapse_t").slideToggle(0);
    $(".js-show-menu").show(0);
  })
  $(".coating").click(function(){
    $('.js-show-menu').hide();
    $(".js-show-menu").show(0);
    $(".js-show-menu").hide(0);
    // $(".collapse_t").hide(0);
  })
  
})

$(window).click(function(e) {
  if ($(e.target).is('.js-show-menu')) {
      $('.js-show-menu').hide();

  }
});