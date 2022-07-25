const firstname = "cédric";
let age = "34 ans";
let job = "apprenant sirius programmation";



console.log(`Je m'appelle ${firstname}, j'ai ${age} et je suis ${job}`);


let myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];
// First Exo

function myAlphanbetLength(param)
console.log(myAlphabet.length);


// Second Exo

  let planets = new Array("Terre","Mars","jupiter","pluton","mercure");
  
  planets.forEach(planet => {
    console.log(planet);
  });

// Exo 3

  let someDataTypes = [23,'male', true, undefined];

  console.log(typeof someDataTypes[0]);

// Ex 4

  let mother = ['Bonjour'];
  console.log(mother);
  let slicedMother = mother.slice();
  slicedMother.push('Coucou');
  console.log(slicedMother); 

// Ex 5

let furnitures = ['Table', 'Chairs', 'Couch'];

furnitures.forEach((furniture) => {
    let newArrayOfFurniture = new String(furniture);
    console.log(newArrayOfFurniture.split(''));
});

// Exo 6

let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , true];
let values3 = ["Mars", "Strawberry", 9];

values1.shift();
values1.splice(1, 2);
console.log(values1)
values2.splice(0, 2)
values2.pop
console.log(values2)
values3.splice(0, 2)
console.log(values3)

// exo 7

