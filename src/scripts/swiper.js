new Swiper(".image-slider", {
  slidesPerView: 1.5,
  spaceBetween: 130,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    785: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1150: {
      slidesPerView: 1.5,
    },

    1200: {
      slidesPerView: 2.5,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
