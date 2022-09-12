/* ***************** NAVBAR BUTTON ***************** */
const navbarButton = document.querySelector(".navbar-toggler");

navbarButton.addEventListener("click", () => {
  if (!navbarButton.classList.contains("collapsed")) {
    navbarButton.classList.add("active");
  } else {
    navbarButton.classList.remove("active");
  }
});

/* ***************** PORTFOLIO ***************** */
$(function () {
  "use strict";

  // portfolio filter
  $(".filter-container").imagesLoaded(function () {
    var filterizr = $(".filter-container").filterizr();
  });

  $(".portfolio-filter-menu li").on("click", function () {
    $(".portfolio-filter-menu li").removeClass("active");
    $(this).addClass("active");
  });

  // magnific popup
  $(".portfolio").each(function () {
    $(this).magnificPopup({
      delegate: ".portfolio-popup",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });
});

/* ***************** INSERT SHADOW TO NAV ON SCROLLING ***************** */
const scrollNav = () => {
  const nav = document.querySelector(".navbar");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? nav.classList.add("scrollNav")
    : nav.classList.remove("scrollNav");
};
window.addEventListener("scroll", scrollNav);
