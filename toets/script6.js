let BTN = document.querySelector(".button");
let container = document.querySelector(".container")

BTN.addEventListener('click',test);

/*-------------------------------------------------- */
/*-------------------------------------------------- */
/*-------------------------------------------------- */
function test(){
for(let i = 0; i <= 49; i++){
    task(i);
}
}

function task(i){
    setTimeout(function(){
        const node = document.createElement('div');
        const textNode = document.createTextNode (i);
            node.appendChild(textNode);
            node.className += "container__item"
            node.style.padding = "20px";
            node.style.paddingLeft = "40px";
            container.appendChild(node);
    }, 1000 * i);
}
