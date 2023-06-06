
// demos mixitup-------------
$(function(){
    $('.mixitup').mixItUp({ 
        selectors: {
          target: '.tile',
          filter: '.filter',
          sort: '.sort-btn'
        },
            animation: {
            animateResizeContainer: false,
            effects: 'fade scale'
        }
    });
});

// $('.boo').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows:false,
// });