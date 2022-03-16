let array = [];

let BTN = document.querySelector(".button");

BTN.addEventListener('click',foutnine);

function foutnine(){
for(let i = 0 ;i < 49; i++){
    array[i] = getRandomIntInclusive(100,1000)
    
 }
 console.log(array)
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }