import gameLogic from '../index.js';

export default () => {
    let number = Math.floor(Math.random() * 100);
    const simbols = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (simbols.length - 1));
    const randomSimbol = simbols[randomIndex];
    let rules = 'What is the result of the expression?';
    
const rulesFunction = () => {
    let question = `${number} ${randomSimbol} ${number}`;
    let answer = eval(question);
   return [question, answer];
   }
   gameLogic(rules, rulesFunction);
}
