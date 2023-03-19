import readlineSync from 'readline-sync';

export default (answer) => {
    answer = readlineSync.question('"Question: " + Math.floor(Math.random() * 10)');
    console.log('Your answer: ' + answer);
    return answer;
    }