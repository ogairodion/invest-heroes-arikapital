import $ from 'jquery';
import { Swiper, Pagination } from 'swiper';

Swiper.use(Pagination);

let img = $('.team__img'),
    windowWidth;

windowWidth = $(window).width();

let teamSlider = new Swiper(".team__items", {
    slidesPerView: 1,
    resistance: true,
    resistanceRatio: 0,
    breakpoints: {
        767: {
            slidesPerView: 'auto',
            allowTouchMove: false,
        },
    },
    pagination: {
        el: ".team .swiper-pagination",
        clickable: true,
    },
});

removeActive(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();

    removeActive(windowWidth);
});

teamSlider.on('slideChange', function() {
    $('.team__img').removeClass('active');
    $(img[this.activeIndex]).addClass('active');
});

function removeActive(windowWidth) {
    if (windowWidth > 767) {
        $('.team__img').removeClass('active');
    } else {
        $('.team__img').removeClass('active');
        $(img[teamSlider?.activeIndex]).addClass('active');
    }
}

// $('.team__img').on('click', function() {
//     if (teamSlider?.activeIndex == 0) {
//         teamSlider.slideTo(1);
//     } else {
//         teamSlider.slideTo(0);
//     }
// });