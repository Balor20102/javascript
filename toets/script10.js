let array = [];

let BTN = document.querySelector(".button");
let container = document.querySelector(".container")
BTN.addEventListener('click',foutnine);

function foutnine(){
for(let i = 0 ;i < 49; i++){
    array[i] = getRandomIntInclusive(100,1000)
    const node = document.createElement('div');
    const textNode = document.createTextNode (array[i]);
        node.appendChild(textNode);
        node.style.padding = "20px";
        node.style.paddingLeft = "20px";
        node.className += "container__item"
        container.appendChild(node);
 }
 console.log(`${document.querySelectorAll(".container__item")}`)
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }