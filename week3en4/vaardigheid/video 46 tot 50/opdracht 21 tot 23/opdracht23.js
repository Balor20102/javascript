for (let part = 1; part <= 3; part++){
    console.log(`let's start part ${part}!`);
    let subpart = 0;
    while (subpart < 5){
        console.log(subpart);
        subpart++;
        part++;
    }
}

/*
let's start part 1!
 0
 1
 2
 3
 4
 door de 2 keer part++ komt hij gelijk op 3
 */