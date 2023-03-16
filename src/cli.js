import readlineSync from 'readline-sync';

export default (name) => {
const name = readlineSync.question('May I have your name?');
console.log('Hello ' + name + '!');
return name;
}