import $ from 'jquery';

$('.dropdown__top').on('click', function() {
    const parent = $(this).parent();
    $(parent).toggleClass('open');
});