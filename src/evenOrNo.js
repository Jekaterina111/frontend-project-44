import readlineSync from 'readline-sync';
import hello from '../src/cli.js';


export default (answer) => {
 let number = Math.floor(Math.random() * 10);
 const eventOrNo = (number) => (number % 2 === 0) ? "yes" : "no";
  answer = readlineSync.question('Question:' + number);
  let answer2 = answer.toLowerCase();
  if (answer2 === eventOrNo(number)){
    console.log('Your answer: ' + answer + '\nCorrect!'); 
  } else {
    console.log(`'$answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${hello()}!`)
  }
  
return answer;
 }

