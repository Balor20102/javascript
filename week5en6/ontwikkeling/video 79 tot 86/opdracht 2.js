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

let can = document.getElementById("Done");
let cant = document.getElementById("Cant");

let getalen = [];
let answers = [];
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

/*---------------------------------------------------*/
/*-------eventlisteners------------------------------*/
/*---------------------------------------------------*/

item1.addEventListener('click',add1);
item2.addEventListener('click',add2);
item3.addEventListener('click',add3);
item4.addEventListener('click',add4);
item5.addEventListener('click',add5);
item6.addEventListener('click',add6);
item7.addEventListener('click',add7);
item8.addEventListener('click',add8);


can.addEventListener('click' , vergelijk, answer);
cant.addEventListener('click', reset);


/*---------------------------------------------------------------------------------------*/
/*--functions--------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------*/


/*-----------------------------------------------*/
/*---------antwoord opslaan----------------------*/
/*-----------------------------------------------*/
function add1(){
   answers.push(getalen[0])
   console.log(answers);
}

function add2(){
    answers.push(getalen[1])
    console.log(answers);
 }

 function add3(){
    answers.push(getalen[2])
    console.log(answers);
 }

 function add4(){
    answers.push(getalen[3])
    console.log(answers);
 }

 function add5(){
    answers.push(getalen[4])
    console.log(answers);
 }

 function add6(){
    answers.push(getalen[5])
    console.log(answers);
 }

 function add7(){
    answers.push(getalen[6])
    console.log(answers);
 }

 function add8(){
    answers.push(getalen[7])
    console.log(answers);
 }

 /*-----------------------------------------------*/
/*---------check----------------------------------*/
/*------------------------------------------------*/
function vergelijk(){

    if (answers.length == 1){
        let j = answers[0] 

        if(ans = j){
            antwoord.style.backgroundColor = "green";

            answer()
        }
    }

    if (answers.length == 2){
        let j = answers[0] + answers[1]

        if(ans = j){
            antwoord.style.backgroundColor = "green";

            answer()
        }
    }

    if (answers.length == 3){
        let j = answers[0] + answers[1] + answers[2];

        if(ans = j){
            antwoord.style.backgroundColor = "green";

            answer()
        }
    }

    if (answers.length == 4){
        let j = answers[0] + answers[1] + answers[2] + answers[3];

        if(ans = j){
            antwoord.style.backgroundColor = "green";

            answer()
        }
    }

}


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
     
     return ans;
}

/*-----------------------------------------------*/
/*---------reset---------------------------------*/
/*-----------------------------------------------*/

function reset(){
    answers = [];
    getalen = [];
    antwoord.style.backgroundColor ="aquamarine";
    answer();
    }

/*-----------------------------------------------*/
/*---------random--------------------------------*/
/*-----------------------------------------------*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

