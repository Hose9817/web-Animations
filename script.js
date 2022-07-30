'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate([
//     {transform: 'translateY(0)'},
//     {transform: 'translateY(100px)'},
//     {transform: 'translateY(-100px)'},
//     {transform: 'translateY(0)'},
// ],{
//     duration: 3000,
//     iterations: Infinity
// });   

let phoneAnimation;

btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([{
                transform: 'translateY(0) rotate(0deg)',
                filter: 'opacity(100%)'
            },
            {
                transform: 'rotate(120deg)',
                filter: 'opacity(75%)'
            },
            {
                transform: 'rotate(240deg)',
                filter: 'opacity(50%)'
            },
            {
                transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(25%)'
            },
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});

let macbookAnimation;

btnMacbook.addEventListener('click', () => {
    if (!macbookAnimation) {
        macbookAnimation = images[1].animate([{
                transform: 'translateX(0px) rotate(0deg)'
            },
            {
                transform: 'translateX(50px) rotate(45deg)'
            },
            {
                transform: 'translateX(100px) rotate(90deg)'
            },
            {
                transform: 'translateX(50px) rotate(45deg)'
            },
            {
                transform: 'translateX(0px) rotate(0deg)'
            },
        ], {
            duration: 2000,
            iterations: Infinity
        });
    } else if (macbookAnimation.playState === 'paused'){
        macbookAnimation.play();
    } else {
        macbookAnimation.pause();
    }

});