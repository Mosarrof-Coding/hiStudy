// let school = Array.from(document.querySelectorAll('.school'));
// school.map((item, index)=>{
//     item.addEventListener('onload', (nin)=>{
//         setInterval(() => {
//             nin.classList.remove('active');
//         }, 2000);
//     })
//     setInterval(() => {
//         school[index].classList.add('active');
//     }, 2000);
// })


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
})