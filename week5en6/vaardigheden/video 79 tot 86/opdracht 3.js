let a = document.querySelector('.grid-container__item-a');
let b = document.querySelector('.grid-container__item-b');
let c = document.querySelector('.grid-container__item-c');

a.addEventListener('click', geklikt);
b.addEventListener('click', geklikt);
c.addEventListener('click', geklikt);

function geklikt (){
    console.log('Geklikt')
}