const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum; 
    do {  
    let userInput = this.getGuess();
    this.prevGuesses.push(this.getGuess);
    this.render(userInput);
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
    return;
  },

  getGuess: function() {
     let guess = null;
     do { guess = parseInt(prompt(`${this.title} \nGuess a number between ${this.smallestNum} and ${this.biggestNum}`));
     } while (
       isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum
     );
     return guess;
    },

  render: function(userGuess) { 

    if (userGuess === this.secretNum) {
      alert(`You guessed the number! It was ${this.secretNum} Previous guesses: ${this.prevGuesses.join(', ')}`);
    } else if (userGuess > this.secretNum) {
      alert(`Your guess of ${userGuess} was too high! Previous guesses: ${this.prevGuesses.join(', ')}`);
    } else if (userGuess < this.secretNum) {
      alert(`Your guess of ${userGuess} was too low ! Previous guesses: ${this.prevGuesses.join(', ')}`);
    }
  }
};

game.play();
