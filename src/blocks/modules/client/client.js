import { Swiper, Pagination, EffectFade } from "swiper";

Swiper.use([Pagination, EffectFade]);

let windowWidth;
let clientSlider,
    clientMobile;
windowWidth = $(window).width();

getSlider();

$(window).on('resize', function() {
    windowWidth = $(window).width();

    if (windowWidth < 767) {
        getSlider();
    }
})

function getSlider() {
    clientSlider = new Swiper(".client__items", {
        slidesPerView: 1,
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
                centeredSlides: false,
                loop: false,
            },
        },
        pagination: {
            el: ".client .swiper-pagination",
            type: "progressbar",
        },
        on: {
            slideChange: function() {
                if (clientMobile !== 'undefined' && clientMobile !== null) {
                    clientMobile.slideTo(this.realIndex);
                }
            },
        }, 
    });

    clientMobile = new Swiper(".client__mobile", {
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
                clientSlider.slideTo(this.realIndex);
            },
        },
    });
}

