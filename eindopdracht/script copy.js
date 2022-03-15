/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*---------dobbelstenen----------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let images = [
    "img/dice1.png",
    "img/dice2.png",
    "img/dice3.png",
    "img/dice4.png",
    "img/dice5.png",
    "img/dice6.png"
]

let dice = document.querySelectorAll("img");
let BTN  = document.querySelector(".Btn")

let dice1 = document.querySelector("#die-1")
let dice2 = document.querySelector("#die-2")
let dice3 = document.querySelector("#die-3")
let dice4 = document.querySelector("#die-4")
let dice5 = document.querySelector("#die-5")

const die = [dice1, dice2, dice3, dice4, dice5];


let dobbels = new Array(5).fill("");
const vastHoud = new Array(5).fill("");

/*-----------------------------------*/
/*---------addEventListeners---------*/
/*-----------------------------------*/
BTN.addEventListener('click', doOneRoll);
BTN.addEventListener('click', roll);


/*-----------------------------*/
/*---------random--------------*/
/*-----------------------------*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

/*-----------------------------*/
/*---------shake--------------*/
/*-----------------------------*/
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
    }, 

    1000
    );
   
}

/*-----------------------------*/
/*--show on screen/in to string*/
/*-----------------------------*/

function doOneRoll(){
    for(let i = 0; i < vastHoud.length; i++){
        if(vastHoud[i] === "") {
            dobbels[i] = getRandomIntInclusive(1, 6);
            die[i].setAttribute("src", images[dobbels[i] -1]);
        }
    }
}


/*--------------------------------------------------------------------------------------------------------------------*/
/*---------hold dice--------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
const dices = document.querySelectorAll('.dices').forEach((value, key) => {
    value.style.backgroundColor = "green";
    value.addEventListener('click', function(){
        value.style.backgroundColor = "lightgreen";
        vastHoud[key] = dobbels[key];
    });
});


/*--------------------------------------------------------------------------------------------------------------------*/
/*---------antwooden---uppersection-----------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
let gegooit1 = []

let start = document.querySelector(".start");

let Aces1 =     document.querySelector('.Aces1');
let Twos1 =     document.querySelector(".Twos1");
let Threes1 =   document.querySelector(".Threes1");
let Fours1 =    document.querySelector(".Fours1");
let Fives1 =    document.querySelector(".Fives1");
let Sixes1 =    document.querySelector(".Sixes1");
let TOTAL1 =    document.querySelector('.Total1')
let bon1 =      document.querySelector('.bonus1');
let totUp1 =    document.querySelector(".totalUpper1");

const Ace =     [Aces1];
const Two =     [Twos1];
const three =   [Threes1];
const four =    [Fours1];
const five =    [Fives1];
const six =     [Sixes1];
const total12 = [ TOTAL1];
const bonus =   [ bon1];
const totUp =   [ totUp1];

let player = 0;
let round = 0;
let rollen = 3;


Ace[player].addEventListener("click",Aces);
Two[player].addEventListener("click",twos);
three[player].addEventListener("click",threes);
four[player].addEventListener("click",fours);
five[player].addEventListener("click",fives);
six[player].addEventListener("click",sixes);

total12[player].addEventListener("click", total);



/*-------------------------------------------------------*/
/*---------functions-------------------------------------*/
/*-------------------------------------------------------*/

function Aces(){
    let Aces = 0;
    for( let i = 0; i <= 4; i++ ){
        if( dobbels[i] == 1){
            Aces++
        }
    }
    Ace[player].innerHTML = Aces;
    Ace[player].style.backgroundColor = "lightgreen";
    gegooit1[0] = Aces;
    acesRemove();
}

function twos(){
    let twos = 0;
    for( let i = 0; i <= 4; i++ ){
        if( dobbels[i] == 2){
            twos++
        }
    }
    twos *= 2;

    Two[player].innerHTML = twos;
    Two[player].style.backgroundColor = "lightgreen";
    gegooit1[1] = twos;

    twosRemove();
}

function threes(){
    let threes = 0;
    for( let i = 0; i <= 4; i++ ){
        if( dobbels[i] == 3){
            threes++
        }
    }
    threes *= 3;
    three[player].innerHTML = threes;
    three[player].style.backgroundColor = "lightgreen";
    gegooit1[2]= threes;
    threesRemove();
}

function fours(){
    let fours = 0;
    for( let i = 0; i <= 4; i++ ){
        if( dobbels[i] == 4){
            fours++
        }
    }
    fours *= 4;
    four[player].innerHTML = fours;
    four[player].style.backgroundColor = "lightgreen";
    gegooit1[3] = fours;
    foursRemove();
}

function fives(){
    let fives = 0;
    for( let i = 0; i <= 4; i++ ){
        if( dobbels[i] == 5){
            fives++
        }
    }
    fives *= 5;
    five[player].innerHTML = fives;
    five[player].style.backgroundColor = "lightgreen";
    gegooit1[4] = fives;
    fivesRemove();
}

function sixes(){
    let sixes = 0;
    for( let i = 0; i <= 4; i++ ){
        if( dobbels[i] == 6){
            sixes++
        }
    }
    sixes *= 6;
    six[player].innerHTML = sixes;
    six[player].style.backgroundColor = "lightgreen";
    gegooit1[5] = sixes;
    sixesRemove();
}

function total(){
    
let total1 = 0;
    for( let i = 0; i <= 5; i++){
         total1 += gegooit1[i];
         console.log( total1)

    }
    total12[player].innerHTML = total1;
    total12[player].style.backgroundColor = "lightgreen"

    if( total1 >= 63){
        total1 += 35;
        bonus[player].innerHTML = "35"  
        bonus[player].style.backgroundColor = "lightgreen"
    }

    totUp[player].innerHTML = total1  
    totUp[player].style.backgroundColor = "lightgreen"
}

/* ----------------------------delete-----------------------------*/

function acesRemove(){
    Ace[player].removeEventListener("click",Aces);
}

function twosRemove(){
    Two[player].removeEventListener("click",twos);
}

function threesRemove(){
    three[player].removeEventListener("click",threes);
}

function foursRemove(){
    four[player].removeEventListener("click",fours);
}

function fivesRemove(){
    five[player].removeEventListener("click",fives);
}

function sixesRemove(){
    six[player].removeEventListener("click", sixes);
}

function diceHoldReset(){
     document.querySelectorAll('.dices').forEach((value) => {
        value.style.backgroundColor = "green";
        vastHoud.fill("");     
        console.log(vastHoud);
    });
}

/*--------------------------------------------------------------------------------------------------------------------*/
/*---------antwooden---lowersection-----------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/

let kind31 = document.querySelector(".threeofakind1");
let kind41 = document.querySelector(".fourofakind1");
let fullhouse1 = document.querySelector(".fullHouse1");
let lowStraight1 = document.querySelector(".");
let highStraight1 = document.querySelector("."); 
let yathzee1 = document.querySelector(".");
let chance1 = document.querySelector(".");
let yathzeeBonus1 = document.querySelector(".");
let totalLow1 = document.querySelector(".");
let totalUpper1 = document.querySelector(".");
let grandTotal1 = document.querySelector(".");
