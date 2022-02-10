
 function getAge (birthYear, year, day, Birthday ){
    let old = year - birthYear;
    let days = day - Birthday;

    return `i am ${old} years old and ${days} days`;
}

console.log(getAge(2002, 2022, 41, 20));
