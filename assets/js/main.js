(function ($, window) {
  $(document).ready(function () {
    $(window).on("scroll", function () {
      $(".header__bottom-bar").css("padding-top", "0rem");
      $(".header__bottom-bar").css("padding-bottom", "0rem");
      $(".header").addClass("stick");
      $(".header__bottom-bar, .mega-menu").css(
        "transition",
        "all 0.3s linear 0s"
      );
      $("#layerslider-container-fw").css("margin-top", "12.6rem");
      $(".mega-menu").css("top", "100%");

      $('#topcontrol').css("display", "block");
      $("#topcontrol").on("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
      if ($(window).scrollTop() == 0) {
      $('#topcontrol').css("display", "none");

        $(".header__bottom-bar").css("padding-top", "2rem");
        $(".header__bottom-bar").css("padding-bottom", "2rem");
        $(".header__bottom-bar, .mega-menu").css("transition", "");
        $(".header").removeClass("stick");

        $("#layerslider-container-fw").css("margin-top", "");
        $(".mega-menu").css("top", "132%");
      }
    });

    $(".turnBoxFaceNum1").each(function (index, value) {
      $(this).on("click", function () {
        $(this).siblings().css("display", "block");
        $(this).css("display", "none");
      });
    });
    $(".turnBoxFaceNum2").each(function (index, value) {
      $(this).on("click", function () {
        $(this).siblings().css("display", "block");
        $(this).siblings().addClass("animate__animated animate__flipInX");
        $(this).css("display", "none");
      });
    });

    $(".page-item").each(function (index, value) {
      $(this).on("click", function () {
        $(this).addClass("active");

        $(".page-item").not(this).removeClass("active");

        let hreflink = $(this).children().attr("href");

        $(".our-cause").each(function (index, value) {
          if ($(this).attr("id") == hreflink) {
            $(this).css("display", "block");
          } else {
            $(this).css("display", "none");
          }
        });
      });
    });
  });
})(jQuery, window);
