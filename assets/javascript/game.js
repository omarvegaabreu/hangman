//choosing a random word
//create an array of words



var words = [
  'javascript',
  'mongodb',
  'bootstrap',
  'nodejs',
  'html5',
  'css'
];

var words = words[Math.floor(Math.random() * words.length)];
console.log(words);

//array with answer create an empty array

var answerArray = [];

for (var i = 0; i = words.length; i++) {
  answerArray[i] = '_';
  break;
}

//variable tracks letter guessed

var remainingLetters = word.length;

// Game loop starts

while (remainingLetters > 0) {

  var answerArray = answerArray.join(' ');
  var el = document.getElementById(' demo ');
  el.innerHTML = answerArray.join(' ');
//player guess
  var guess = prompt(' Enter a letter, if you dare to play hangman!? ');
  if (guess === null) {
    prompt(' I win!!!!! ');
    break;
  } else if (guess.length !== 1) {
    alert(' Your fingers are too big! Just hit one letter!! ');
  } else {

    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }

  }
    
} // game loop ends

el.innerHTML = answerArray.join('  ');
alert(' Thank you google!! The answer was ' + words + '_');




