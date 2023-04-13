import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default () => {

let winPlus = 0;
while (winPlus < 3) {
  let number = Math.floor(Math.random() * 100);
  
  let answer = readlineSync.question('Question: ' + number);
  let answer2 = answer.toLowerCase();

  if ((answer2 === 'yes' && number % 2 === 0) || (answer2 === 'no' && number % 2 !==0)){
    console.log('Your answer: ' + answer + '\nCorrect!');
     winPlus += 1;
  } else {
    console.log(`'${answer2}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    return
  }
} 
console.log(`Congratulations, ${userName}!`);
}


