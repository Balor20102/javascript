'use strict'

const yours = {
    name: 'Daniel',
    birthyear: 2002,
    job: 'none',
    place: 'Lelystad',

    getAge: function(name, job){
        if (!this.age) this.age = new Date().getFullYear() - this.birthyear;
        return this.age;
    }
}

const docent = {
    name: 'Rick',
    birthyear: 1987,
    job: 'teacher',
    place: 'Almere',

    getAge: function(name, job){
        if (!this.age) this.age = new Date().getFullYear() - this.birthyear;
        return this.age;
    }
}


const younger = {

    youngers: function(){

        if (docent.getAge() < yours.getAge()) {
            return yours.name;
        } else {
            return docent.name;
        }

     }
}

const woonplaats = {

    woon: function(){
        if (docent.place = 'Almere'){
            return docent.name;
        }

        if(yours.place = 'Almere'){
            return yours.name;
        }
    }

}

console.log (younger.youngers());
console.log (woonplaats.woon());