import gameLogic from '../index.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const rulesFunction = () => {
    const number = Math.floor(Math.random() * 100);
    const simbols = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (simbols.length - 1));
    const randomSimbol = simbols[randomIndex];
    const question = `${number} ${randomSimbol} ${number}`;
    const answer = eval(question);
    return [question, answer];
};
    gameLogic(rules, rulesFunction);
};
