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
console.log(`my friends are ${objectOne.friends[0]} and ${objectOne.friends[1]}`)

