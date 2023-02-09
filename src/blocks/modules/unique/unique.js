import { Swiper, EffectFade } from "swiper";

Swiper.use(EffectFade);

let windowWidth;
let uniqueSlider,
    uniqueMobile;
windowWidth = $(window).width();

getSlider();

$(window).on('resize', function() {
    windowWidth = $(window).width();

    if (windowWidth < 767) {
        getSlider();
    }
})

function getSlider() {
    uniqueSlider = new Swiper(".unique__items", {
        slidesPerView: 2,
        spaceBetween: 12,
        resistance: true,
        resistanceRatio: 0,
        allowTouchMove: true,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        on: {
            slideChange: function() {
                if (uniqueMobile !== 'undefined' && uniqueMobile !== null) {
                    uniqueMobile[0].slideTo(this.realIndex);
                }
            },
        },   
        breakpoints: {
            600: {
                allowTouchMove: false,
                spaceBetween: 0,
                centeredSlides: false,
                loop: false,
            },
        },
    });

    uniqueMobile = new Swiper(".unique__mobile", {
        slidesPerView: 1,
        resistance: true,
        resistanceRatio: 0,
        centeredSlides: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            slideChange: function() {
                uniqueSlider.slideTo(this.realIndex);
            },
        },
    });
}