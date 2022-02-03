const objectOne = {
    name: 'Piet Janssens',
    job: 'Fighter',
    getJobAndName: function(name, job){
        return `My name is ${name} and I am a ${job}.`;
    },
};
console.log(objectOne.getJobAndName(objectOne.name, objectOne.job));