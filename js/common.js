$(document).ready(function() {
  function fixedWidth() {
    colWidth = $(".col").width();
    $(".review-fixed").css("width", colWidth);
  }

  //Скрываем и показываем header при скроле страницы
  var currentScroll = $(window).scrollTop();

  // $(window).addEventListener(scroll, function() {
  //   console.log(currentScroll);
  //   $("#header").removeClass("open");
  // });

  // if (currentScroll < 300 || currentScroll === 0) {

  // }

  function fixedHeader() {
    var newScroll = $(window).scrollTop();

    if (newScroll > 100) {
      $("body").removeClass("overflow-hidden");
      $(".menu-list").removeClass("active");

      $("#menu-container .menu-list").css(
        {
          left: "-100%",
          transition: "all .9s ease"
        },
        400
      );

      $(".menu-link").removeClass("active");
      $(".menu-submenu")
        .removeClass("open")
        .css("display", "none");
      $(".accordion-toggle").removeClass("active-tab");
      $("#header").addClass("hide");
      $(".main-menu").removeClass("open");
    } else {
      $("#header").removeClass("hide");
    }

    //проверяем направление скрола
    if (newScroll < currentScroll) {
      //scrolling up
      $("#header").addClass("show");
    } else if (newScroll > currentScroll) {
      //scrolling down
      $("#header").removeClass("show");
    }

    currentScroll = newScroll;

    if (currentScroll < 300) {
      $("#header").removeClass("show");
    }
  }

  fixedHeader();

  $(window).on("scroll", function() {
    fixedHeader();
    fixedWidth();
    /*отзывы исправление скролла формы*/
    if ($(window).height() < 650) {
      $(".review-fixed").removeClass("sticky top bottom");
    }
    /*END отзывы исправление скролла формы*/
  });
  //  Инициализация слайдера

  if ($(document).width() < 7440) {
    slidesIn = {
      slidesInWrapper: 4,
      slidesGallery: 3,
      slidesLastNews: 3
    };
  }
  if ($(document).width() < 1340) {
    slidesIn = {
      slidesInWrapper: 3,
      slidesGallery: 3,
      slidesLastNews: 3
    };
  }
  if ($(document).width() < 1120) {
    slidesIn = {
      slidesInWrapper: 2,
      slidesGallery: 2,
      slidesLastNews: 2
    };
  }
  if ($(document).width() < 600) {
    slidesIn = {
      slidesInWrapper: 1,
      slidesGallery: 1,
      slidesLastNews: 1
    };
  }

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: slidesIn.slidesInWrapper,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var mySwiperGallery = new Swiper(".gallery-swiper-container", {
    slidesPerView: slidesIn.slidesGallery,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var mySwiperLastNews = new Swiper(".swiper-last-news", {
    slidesPerView: slidesIn.slidesLastNews,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var mySwiperReviews = new Swiper(".reviews-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".reviews-button-next",
      prevEl: ".reviews-button-prev"
    }
  });
  var mySwiperServise = new Swiper(".swiper-container-servise", {
    autoHeight: true, //enable auto height
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  $("select").styler();

  // $(".fansy-item a").simpleLightbox(); - вынес в index.html был конфликт на внутренних страницах

  new WOW().init();

  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate(
      {
        left: activeState ? "0%" : "-100%"
      },
      300
    );
  }
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list")
    .find(".accordion-toggle")
    .click(function() {
      $(this)
        .next()
        .toggleClass("open")
        .slideToggle("fast");
      $(this)
        .toggleClass("active-tab")
        .find(".menu-link")
        .toggleClass("active");

      $(".menu-list .accordion-content")
        .not($(this).next())
        .slideUp("fast")
        .removeClass("open");
      $(".menu-list .accordion-toggle")
        .not(jQuery(this))
        .removeClass("active-tab")
        .find(".menu-link")
        .removeClass("active");
    });

  $(".call-back-header").on("click", function(e) {
    e.preventDefault();
    $.magnificPopup.close();

    var _this = $(this);

    setTimeout(function() {
      $.magnificPopup.open({
        items: {
          src: "#my-popup",
          type: "inline"
        }
      });
    }, 500);
  });
  $(".telefon__button").on("click", function(e) {
    e.preventDefault();
    $.magnificPopup.close();

    var _this = $(this);

    setTimeout(function() {
      $.magnificPopup.open({
        items: {
          src: "#my-popup",
          type: "inline"
        }
      });
    }, 500);
  });
  $(".call-back-mob").on("click", function(e) {
    e.preventDefault();
    $.magnificPopup.close();

    var _this = $(this);

    setTimeout(function() {
      $.magnificPopup.open({
        items: {
          src: "#my-popup",
          type: "inline"
        }
      });
    }, 500);
  });
});
