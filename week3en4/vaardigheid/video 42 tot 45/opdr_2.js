const objectOne = {
    firstName: 'Henk',
    lastName: 'de Vries',
    age: 2022 - 1993,
    job: 'teacher',
    friends: [ 'Koe', 'Vos'],
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(`My job is being a ${objectOne.job} and I am ${objectOne.age} years old`)

