const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arrayOne)


    var sum = arrayOne.reduce(function(a, b){
        return a + b;
    },
     0);
    
    console.log(sum);

    if (sum < 100){
        console.log(sum);
        console.log(sum);
    }
    else{
        console.log('pop');
    }