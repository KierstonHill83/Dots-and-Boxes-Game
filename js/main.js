  //- - - - - - - - //
 //   Game Class   //
//- - - - - - - -//

//Game class that has a property of player and grid class.
function Game() {
  this.player1 = new Player("red");
  this.player2 = new Player("blue");
  this.grid = new Grid(this.player1, this.player2);
  this.currentPlayer = 1; // either 1 or 2
}

//If the current player is player 1, the current player will reassign to 2 and become player 2. If not, the current player will be player 1. Using an exclusive or.
Game.prototype.switchTurns = function() {
  //check if there is a winner. If there is a winner the turn cannot change.???
  this.currentPlayer ^= 1;
};

//Start the game.
Game.prototype.startGame = function() {
  //reset the game method:
    // clear the board on the dom
    // new Game(); might happen on the dom, play again?
};


//- - - - - - - - //
// Player Class  //
//- - - - - - - -//

//Update each player score and give each player a color
function Player(playerColor) {
  this.playerScore = 0;
  this.playerColor = playerColor;
}


//- - - - - - - - //
//   Grid Class   //
//- - - - - - - -//

//Put each border ID that was clicked into the empty array. Define what each border ID is.
function Grid(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.clickedBorder = [];
  this.$borderID = $("td");
}

//Takes in the borderID and player(the current Player). The player that was the current player(1 or 2) is now passed into the clickedBox Array. It will show up in the array at the index of the box that was clicked.
Grid.prototype.updateClickedBoxArray = function(borderID) {
  //console.log(borderID);
  this.clickedBorder.push(parseInt(borderID));
  console.log(this.clickedBorder);
  this.checkForWinner();
  return this.clickedBorder;
};

//Check for the winner. If there are still nulls in the array, continue to play. If there are no nulls in the array, alert the winner.
Grid.prototype.checkForWinner = function() {
  //Using recursion to call back on itself. Keep looking for nulls until there are no more.
  if (this.clickedBorder.indexOf([1,5,7,14]) === 1) {
    console.log("hello");
      this.checkForWinner();
  }
  //When there are no more nulls go into the getWinner function
  if (this.clickedBorder.indexOf([1,5,7,14]) === 0) {
      console.log("it works");
      //getWinner();
  }


};


//If player 1's score is greater than player 2's score, they are the winner. Otherwise player 2 is the winner.
Grid.prototype.getWinner = function() {
    /// find game object and check player 1 score vs player 2 score.

  if (this.player1.playerScore > this.player2.playerScore) {
    // alert("Player 1 is the Winner!");
  }
  else {
    // alert("Player 2 is the Winner!");
  }
};


var winningCombos = [
  [1,5,7,14],
  [2,7,9,15],
  [3,9,11,16],
  [4,11,13,17],
  [14,18,20,27],
  [15,20,22,28],
  [16,22,24,29],
  [17,24,26,30],
  [27,31,33,40],
  [28,33,35,41],
  [29,35,37,42],
  [30,37,39,43],
  [40,44,46,53],
  [41,46,48,54],
  [42,48,50,55],
  [43,50,52,56]
];


// function winningCombos(array) {
//   switch(array) {
//     case [1,5,7,14]:
//       $("#6").css("background", "red");
//       break;
//     case [2,7,9,15]:
//       $("#8").css("background", "red");
//       break;
//     case [3,9,11,16]:
//       $("#10").css("background", "red");
//       break;
//     case [4,11,13,17]:
//       $("#12").css("background", "red");
//       break;
//     case [14,18,20,27]:
//       $("#19").css("background", "red");
//       break;
//     case [15,20,22,28]:
//       $("#21").css("background", "red");
//       break;
//     case [16,22,24,29]:
//       $("#23").css("background", "red");
//       break;
//     case [17,24,26,30]:
//       $("#25").css("background", "red");
//       break;
//     case [27,31,33,40]:
//       $("#32").css("background", "red");
//       break;
//     case [28,33,35,41]:
//       $("#34").css("background", "red");
//       break;
//     case [29,35,37,42]:
//       $("#36").css("background", "red");
//       break;
//     case [30,37,39,43]:
//       $("#38").css("background", "red");
//       break;
//     case [40,44,46,53]:
//       $("#45").css("background", "red");
//       break;
//     case [41,46,48,54]:
//       $("#47").css("background", "red");
//       break;
//     case [42,48,50,55]:
//       $("#49").css("background", "red");
//       break;
//     case [43,50,52,56]:
//       $("#51").css("background", "red");
//       break;
//   }
// }
