(function ($, window) {
  $(document).ready(function () {
    $(".our-causes-carousel").owlCarousel({
      nav: true,
      loop: true,
      margin: 30,
      items: 3,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      // animateIn: 'animate__fadeInRight'
      // responsive:{
      //     0:{
      //         items:1
      //     },
      //     600:{
      //         items:3
      //     },
      //     1000:{
      //         items:5
      //     }
      // }
    });
    $(".recent-news-carousel").owlCarousel({
      nav: true,
      loop: false,
      items: 1,
      dots: false,
      smartSpeed: 1000,
      URLhashListener:true,
      startPosition: 'URLHash',
      // animateIn: 'animate__slideInRight',
      // animateOut: 'animate__slideOutRight'
    });
    $(".news-container-btn").owlCarousel({
      nav: false,
      loop: false,
      items: 4,
      dots: false,
      smartSpeed: 1000,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
    
    $(".our-sponsors").owlCarousel({
      nav: true,
      loop: true,
      items: 4,
      dots: false,
      smartSpeed: 1000,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    

    $(".twitter-feed").owlCarousel({
      nav: false,
      loop: true,
      items: 1,
      dots: false,
      smartSpeed: 1000,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
    });

    $(".owl-prev").html('<i class="ion-android-arrow-back"></i>');
    $(".owl-next").html('<i class="ion-android-arrow-forward"></i>');


  
  })

})(jQuery, window);
