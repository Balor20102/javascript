/*_________________________________________________________________________*/
/*_________________________________Test____________________________________*/
/*_________________________________________________________________________*/
document.querySelector('.Klik').addEventListener("click",addOne);

let i = 0;

function addOne(){
 i = Math.floor(Math.random()* 10);
 console.log(i);
 One.src = array[i];

}

/*_________________________________________________________________________*/
/*_________________________________array____________________________________*/
/*_________________________________________________________________________*/
let One = document.querySelector('.One');

let array = []
array[0] = One.src = '../img/1.jpg';
array[1] = One.src = '../img/2.jfif';
array[2] = One.src = '../img/3.jfif';
array[3] = One.src = '../img/4.jfif';
array[4] = One.src = '../img/5.jfif';
array[5] = One.src = '../img/6.jfif';
array[6] = One.src = '../img/7.jfif';
array[7] = One.src = '../img/8.jpg';
array[8] = One.src = '../img/9.jpg';
array[9] = One.src = '../img/10.png';

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


