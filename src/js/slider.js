let splide = new Splide( '.splide', {
    perPage:4,
    perMove:1,
    type: 'loop',
    pagination: false,
    // gap: '0.1rem',
    autoplay:true,
    arrows: false,
    focus: 'center',
    breakpoints: {
        1300: {
            perPage: 3
        },
        1100: {
            perPage: 3
        },
        767: {
            perPage: 2
        },
        389: {
            perPage:1
        }
    }
});

splide.mount();