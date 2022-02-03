'use strict'

const nameCheck = (name) => {
    switch(name){
        case 'Jorn':
            return 'great';
        default:
            return 'okish';
    }
}

const Month = (birthMonth) => {

    switch(birthMonth){
        case 'jan':
            return 'january';
        default:
            return 'febuari';
    }
}

const money = money => money * 2;

const sentence = (name, salary, birthMonth) => {
    const wordOne = nameCheck(name);
    const wordTwo = money(salary);
    const wordThree = Month(birthMonth);

    console.log(`The name is ${name} and I 'am ${wordOne}
    and my birthmonth ${wordThree}. 
    My salary is ${wordTwo} and it just got doubled!`);
}
sentence('Frits', 3000, 'jan');