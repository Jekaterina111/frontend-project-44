import gameLogic from '../index.js';

export default () => {
let rules = 'Find the greatest common divisor of given numbers.';
const rulesFunction = () => {
    let number = Math.floor(Math.random() * 100);
    let number2 = Math.floor(Math.random() * 100);
    let gcd = (x, y) => (!y ? x : nodeModules(y, x % y));
    let question = `${number }${number2}`;
    let answer = gcd(question);
   return [question, answer];
   }
   gameLogic(rules, rulesFunction);
};