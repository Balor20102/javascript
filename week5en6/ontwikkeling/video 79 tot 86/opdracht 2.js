/*----------------------------------------------*/
/*-element ophalen------------------------------*/
/*----------------------------------------------*/
let item1 = document.querySelector('.item-1');
let item2 = document.querySelector('.item-2');
let item3 = document.querySelector('.item-3');
let item4 = document.querySelector('.item-4');
let item5 = document.querySelector('.item-5');
let item6 = document.querySelector('.item-6');
let item7 = document.querySelector('.item-7');
let item8 = document.querySelector('.item-8');
let antwoord = document.querySelector('.antwoord')
let container = document.querySelector('.grid-container');

let getalen = [];
answer();

container.style.fontSize = "30px";
item1.innerHTML = getalen[0]; 
item2.innerHTML = getalen[1];
item3.innerHTML = getalen[2];
item4.innerHTML = getalen[3];
item5.innerHTML = getalen[4];
item6.innerHTML = getalen[5];
item7.innerHTML = getalen[6];
item8.innerHTML = getalen[7];
antwoord.innerHTML = ans;
antwoord.style.fontSize = "30px";

/*-----------------------------------------------*/
/*---------generate random-----------------------*/
/*-----------------------------------------------*/
function generateNumbers(){
    for ( let i = 0; i <= 7; i++){
        getalen[i] = getRandomIntInclusive(0,10);
    
    }

}

function answer(){
    generateNumbers();

    a = getRandomIntInclusive(0,7);
    b = getRandomIntInclusive(0,7);
    c = getRandomIntInclusive(0,7);

    ans = getalen[a] + getalen[b] + getalen[c];
     return ans;
}



/*-----------------------------------------------*/
/*---------random--------------------------------*/
/*-----------------------------------------------*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}
