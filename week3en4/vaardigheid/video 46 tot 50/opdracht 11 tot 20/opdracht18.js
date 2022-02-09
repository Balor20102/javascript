const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayTwo = [];
let z = 0;

/*
opdracht a
for( let i = 0; i <= arrayOne.length - 1; i++){
    arrayOne[i] = arrayOne[i] * 2;
    console.log(arrayOne[i])
}
*/

/* 
opdracht b
for ( let j = 1; j <= arrayOne.length - 1 ; j += 2){
    arrayTwo.push ( arrayOne[j] );
    
    console.log(arrayTwo[z]);
    z++;
}
*/

/* 
opdracht c
for ( let j = 0; j <= arrayOne.length - 1; j += 2){
    arrayTwo.push ( arrayOne[j] );
    
    console.log(arrayTwo[z]);
    z++;
}
*/


// opdracht d en e
for( let i = 0; i <= arrayOne.length - 1; i++){
    arrayTwo.push( arrayOne[i] * 2);
}
console.log(arrayOne.concat(arrayTwo));


