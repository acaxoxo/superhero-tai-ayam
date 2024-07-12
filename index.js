import generateName from 'sillyname';
import superheroes from 'superheroes';

const sillyName = generateName();
console.log(`My name is ${sillyName}`);

const randomSuperhero = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${randomSuperhero}`);