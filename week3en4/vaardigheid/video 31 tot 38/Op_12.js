'use strict'
var leeft = false;
var study = false;
var studer = false;

function studeren(age, school){
    if ( age > 10 ){
        leeft = true;
    }

    if 
    (school === 'vwo' || school === 'havo' || school === 'vmbo'){
        study = true;
    }

    if (leeft && study){
        studer = true;
        return studer; 
    }
}

console.log(studeren( 19,'havo'));