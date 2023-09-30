
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
// text-slider-banner
$('.slide-inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots:false,
    autoplay: true,
    autoplatSpeed: 3000,
});
//   mouse eventer banner======
let banner = document.querySelector('.banner');
banner.addEventListener('mousemove', function(mouse){
    let float = Array.from(document.querySelectorAll('.float'));
    // console.log(float);
    float.map((index, item)=>{
        index.parentElement.style.left = mouse.pageX * (1/50) + 'px';
        index.parentElement.style.top = mouse.pageY * (1/50) + 'px';
    })
});
