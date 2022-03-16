let BTN = document.querySelector(".button");
let container = document.querySelector(".container")

BTN.addEventListener('click',addElement);

/*-------------------------------------------------- */
/*-------------------------------------------------- */
/*-------------------------------------------------- */
function addElement(){
    for(let i = 1; i <= 49; i++){

    const node = document.createElement('div');
    const textNode = document.createTextNode (i);
        node.appendChild(textNode);
        node.className += "container__item"
        node.style.padding = "20px";
        node.style.paddingLeft = "20px";
        container.appendChild(node);
        
 }
    remove();
}

function remove(){
    BTN.removeEventListener('click', addElement)
}

