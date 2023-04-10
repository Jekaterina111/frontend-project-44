import gameLogic from '../index.js';

export default () => {
    let rules = 'What is the result of the expression?';
    
const rulesFunction = () => {
    let number = Math.floor(Math.random() * 100);
    const simbols = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (simbols.length - 1));
    const randomSimbol = simbols[randomIndex];
    let question = `${number} ${randomSimbol} ${number}`;
    let answer = eval(question);
   return [question, answer];
   }
   gameLogic(rules, rulesFunction);
}
