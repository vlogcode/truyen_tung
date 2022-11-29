jQuery(document).ready(function ($) {
  jQuery(".top-up").click(function () {
    jQuery("html, body").animate(
      {
        scrollTop: jQuery("html").offset().top,
      },
      1000
    );
  });
  // if(jQuery('.slide_home').length>0){
  //     jQuery('.slide_home').slick({
  //         dots: true,
  //         arrows:true,
  //         infinite: false,
  //         autoplaySpeed: 3000,
  //         speed: 300,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         responsive: [
  //             {
  //                 breakpoint: 1025,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1,
  //                     infinite: true,
  //                     dots: true
  //                 }
  //             },
  //             {
  //                 breakpoint: 768,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1
  //                 }
  //             },
  //             {
  //                 breakpoint: 480,
  //                 settings: {
  //                     slidesToShow: 1,
  //                     slidesToScroll: 1
  //                 }
  //             }
  //         ]
  //     });
  // }
  $(".slide_home").slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // // autoplay: true,
    // autoplaySpeed: 1000,
    // dots: true,

    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'


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

