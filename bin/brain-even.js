#!/usr/bin/env node
import hello from '../src/cli.js';
import answerEventOrNo from '../src/evenOrNo.js';

console.log('Welcome to the Brain Games!');
console.log('Hello, ' + hello() + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
answerEventOrNo();
