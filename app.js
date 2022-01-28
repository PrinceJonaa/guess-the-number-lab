const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  prevGuess: [],
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}