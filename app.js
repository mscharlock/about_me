'use strict';

var user = prompt('Welcome to Michelle\'s Website! What is your name?');
console.log('user: ',user);

alert('Nice to meet you, ' + user +'. To get to know me better, let\'s play a game. I\'ll ask you five questions about me.');

var michelleBorn = prompt('Was I born in the USA? Answer with Y/N, please.');
console.log('michelleBorn: ',michelleBorn);

if (michelleBorn === 'yes' || michelleBorn === 'y') {
  console.log('Good guess, but no! I was actually born in Germany!');
} elseif (michelleBorn === 'no' || michelleBorn === 'n') {
  console.log('Correct! I was not born in the US. I was actually born in Heidelberg, Germany.');
} else {
  console.log('I didn\'t understand your answer but I\'ll just tell you: I was born in Germany!');
}
};
