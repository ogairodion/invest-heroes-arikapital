import { Swiper, EffectFade } from "swiper";

Swiper.use(EffectFade);
 
let windowWidth;
let getItemsSlider,
    getMobile;
windowWidth = $(window).width();

getSlider();

$(window).on('resize', function() {
    windowWidth = $(window).width();

    if (windowWidth < 767) {
        getSlider();
    }
})

function getSlider() {
    getItemsSlider = new Swiper(".get__items", {
        slidesPerView: 2,
        spaceBetween: 12,
        resistance: true,
        resistanceRatio: 0,
        allowTouchMove: true,
        centeredSlides: true,
        observer: true,
        observeParents: true,   
        breakpoints: {
            600: {
                allowTouchMove: false,
                spaceBetween: 0,
                centeredSlides: false,
                loop: false,
            },
        },
        on: {
            slideChange: function() {
                if (getMobile !== 'undefined' && getMobile !== null) {
                    getMobile.slideTo(this.realIndex);
                }
            },
        }
    });

    getMobile = new Swiper(".get__mobile", {
        slidesPerView: 1,
        resistance: true,
        resistanceRatio: 0,
        centeredSlides: true,
        observer: true,
        observeParents: true,   
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            slideChange: function() {
                getItemsSlider.slideTo(this.realIndex);
            },
        },
    });
}


