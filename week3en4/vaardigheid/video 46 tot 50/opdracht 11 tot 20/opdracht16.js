const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arrayOne)

arrayOne.reduce(myFunc);

function myFunc (total, num){
    return total + num;
}
console.log(myFunc())