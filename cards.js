'use strict';

const cardExpand = document.querySelectorAll('expand');
const body = document.querySelector('body');
// const uche = document.querySelectorAll('.uche');

// cardExpand.addEventListener('click', () => {
// })

// cardExpand.forEach(pand => {
//     pand.addEventListener('click', () => {
//         pand.classList.toggle('expanding');
//         // for (let x in cardExpand) {
            
//         // }
//     })
// })

// function checking() {
//     if ()
// }

const arr = Array.from(cardExpand);
console.log(arr);
const lengthArr = arr.length;
console.log(lengthArr);

const random = Math.floor(Math.random() * lengthArr); 
console.log(random);

function load() {
    const randomElement = arr[random];
    randomElement.classList.add('expanding');
    console.log(randomElement);
}



cardExpand.forEach(pand => {
    pand.addEventListener('click', () => {
        cardExpand.forEach(pand => {
            pand.classList.remove('expanding');
        })
        pand.classList.add('expanding');
    })
})