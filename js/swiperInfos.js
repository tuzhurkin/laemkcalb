new Swiper('.infos-slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        // draggable: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.infos-slider',
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
        },
        767: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4.5,
        },
    },

    slidesPerView: 3.5,
    spaceBetween: 25,
    centeredSlides: true,
    freeMode: true,   
    speed: 100,

    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,
});