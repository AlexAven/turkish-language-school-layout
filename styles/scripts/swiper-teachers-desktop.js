var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  freemode: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {

    699: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});