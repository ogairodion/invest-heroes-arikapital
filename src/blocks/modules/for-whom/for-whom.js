import Swiper from "swiper";

let forWhomSlider = new Swiper(".for-whom__items", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    resistance: true,
    resistanceRatio: 0,
    centeredSlides: true,
    breakpoints: {
        767: {
            spaceBetween: 20,
        },
        1399: {
            slidesPerView: 4,
            centeredSlides: false,
        },
    }
});