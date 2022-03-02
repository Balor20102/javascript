/*---------------------------------------------------------------------------*/
/*------------------berekenen------------------------------------------------*/
/*---------------------------------------------------------------------------*/
let Score = document.querySelector('.Score');
let item1 = document.querySelector('.item-1');
let item2 = document.querySelector('.item-2');
let item3 = document.querySelector('.item-3');
let antw = document.querySelector('.antw');
let submit = document.getElementById('submit');

let min = 1;
let maxkd = 10;
let maxpm = 100;
let want = 0;

let antwoord1 = 0;
let antwoord2 = 0;

let punt = 0;

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

/*---------------------------------------------------------------------------*/
/*------------------function-------------------------------------------------*/
/*---------------------------------------------------------------------------*/
Score.addEventListener('click', reken)
submit.addEventListener('click', berekenen)

function reken(){

    let i = Math.floor(Math.random() * 4);

    if (i == 0){
        item2.innerHTML="+";
        minMAxPM();
        maxMinPM();
        want = 0;
    }

    if (i == 1){
        item2.innerHTML="-";
        minMAxPM();
        maxMinPM();
        want = 1;
      }

    if (i == 2){
        item2.innerHTML="/";
        minMAxKd()
        maxMinKd();
        want = 2;
    }

    if (i == 3){
        item2.innerHTML="*";
        minMAxKd();
        maxMinKd();
        want = 3;
    }
}

/*---------------------------------------------------------------------------*/
/*------------------keer en delen--------------------------------------------*/
/*---------------------------------------------------------------------------*/
function minMAxKd() {
    min = Math.ceil(min);
    maxkd = Math.floor(maxkd);
    let getal1 = Math.floor(Math.random() * (maxkd - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    item1.innerHTML = getal1;
    antwoord1 = getal1;
    return getal1;
}

function maxMinKd (){
    min = Math.ceil(min);
    max = Math.floor(minMAxKd());
    let getal2 = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    item3.innerHTML = getal2;
    antwoord2 = getal2;
    return getal2; 
  }


/*---------------------------------------------------------------------------*/
/*------------------plus en min----------------------------------------------*/
/*---------------------------------------------------------------------------*/
function minMAxPM() {
    min = Math.ceil(min);
    maxpm = Math.floor(maxpm);
    let getal3 = Math.floor(Math.random() * (maxpm - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    item1.innerHTML = getal3;
    antwoord1 = getal3;
    return getal3;
}


  function maxMinPM (){
    min = Math.ceil(min);
    max = Math.floor(minMAxPM());
    let getal4 = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    item3.innerHTML = getal4;
    antwoord2 = getal4;
    return getal4; 
  }

/*---------------------------------------------------------------------------*/
/*------------------berekenen------------------------------------------------*/
/*---------------------------------------------------------------------------*/
  function berekenen(){
    if (want == 0){
      let antwoord = antwoord1 + antwoord2;
        if(antwoord == parseFloat(antw.value)){
            punt++;
            Scoretekenen();
            reset();
            reken();
            if (punt == 2){ MODAL();}
            return punt;
        }

  }

  if (want == 1){
    let antwoord = antwoord1 - antwoord2;
      if(antwoord == parseFloat(antw.value)){
          punt++;
          Scoretekenen();
          reset();
          reken();
          if (punt == 2){ MODAL();}
          return punt;
      }
      
  }

  if ( want == 2){
    let antwoord = antwoord1 / antwoord2;
      if(antwoord == parseFloat(antw.value)){
          punt ++;
          Scoretekenen();
          reset();
          reken();
          if (punt == 2){ MODAL();}
          return punt;
      }

  }

  if (want == 3){
    let antwoord = antwoord1 * antwoord2;
      if(antwoord == parseInt(antw.value)){
          punt++;
          Scoretekenen();
          reset();
          reken();
          if (punt == 2){ MODAL();}
          return punt;
          
      }

  }

}

/*---------------------------------------------------------------------------*/
/*------------------score----------------------------------------------------*/
/*---------------------------------------------------------------------------*/

function Scoretekenen(){
    Score.innerHTML = `Score ${punt}`
}

function reset(){
    want = 0;
    antwoord1 = 0;
    antwoord2 = 0;
}



/*---------------------------------------------------------------------------*/
/*-------MODAL---------------------------------------------------------------*/
/*---------------------------------------------------------------------------*/

if (punt == 2){ MODAL();}

    function MODAL() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
    punt = 0;
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
        punt = 0;
    }
 }