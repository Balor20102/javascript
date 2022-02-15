/*_________________________________________________________*/
/*______________________________1__________________________*/
/*_________________________________________________________*/
document.querySelector('.grid-container__item-1').addEventListener("click", hello);

function hello(){
    console.log('hello world')
}

/*_________________________________________________________*/
/*______________________________5__________________________*/
/*_________________________________________________________*/
document.querySelector('.grid-container__item-3').addEventListener("click", JC)

function JC (){
    document.querySelector('.grid-container__item-3')
    .innerHTML = 'JSC is de beste';
}

/*_________________________________________________________*/
/*______________________________5__________________________*/
/*_________________________________________________________*/
    document.querySelector('.grid-container__item-5').addEventListener("click", JSC)

    function JSC(){
        for( let i = 0; i <= 9; i++){
            console.log('JSC');
        }
    }

document.querySelector('.grid-container__item-5').addEventListener("click", world)

    function world (){
        document.querySelector('.grid-container__item-6')
        .innerHTML = 'Hello World!';
    }