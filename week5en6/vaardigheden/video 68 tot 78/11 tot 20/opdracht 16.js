document.querySelector('.Klik').addEventListener("click",addOne)

let i = 0;

function addOne(){
 i++
 let j = i*i;
document.querySelector('.One')
.innerHTML = `${j}`;
}

/*_________________________________________________________________________*/
/*_________________________________klik CSS________________________________*/
/*_________________________________________________________________________*/
document.querySelector('.Klik')
.style.backgroundColor = "pink";

document.querySelector('.Klik')
.style.width = "150px";

document.querySelector('.Klik')
.style.height = "100px";

document.querySelector('.Klik')
.style.fontSize = "50px";

document.querySelector('.Klik')
.style.textAlign = "center";

document.querySelector('.Klik')
.style.paddingTop = "50px";

/*_________________________________________________________________________*/
/*_________________________________One CSS________________________________*/
/*_________________________________________________________________________*/

document.querySelector('.One')
.style.backgroundColor = "blue";

document.querySelector('.One')
.style.width = "150px";

document.querySelector('.One')
.style.height = "100px";

document.querySelector('.One')
.style.fontSize = "50px";

document.querySelector('.One')
.style.textAlign = "center";

document.querySelector('.One')
.style.paddingTop = "50px";


