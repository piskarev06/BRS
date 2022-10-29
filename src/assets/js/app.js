const swiper = new Swiper(".intro__slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".intro__pagination",
  },

  // breakpoints: {
  //   520: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //     spaceBetween: 25,
  //   },
  //   1360: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  // },
});
// End of Slider

const iconMenu = document.querySelector(".header__icon");
const menuBody = document.querySelector(".header__menu");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
// End of Burger
