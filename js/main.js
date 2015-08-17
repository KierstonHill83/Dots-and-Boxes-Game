  //- - - - - - - - //
 //   Game Class   //
//- - - - - - - -//

//Game class that has a property of player and grid class.
function Game() {
  this.player1 = new Player("#339999");
  this.player2 = new Player("#B93E3E");
  this.currentPlayer = 0; // either 1 or 2
  this.grid = new Grid(this.player1, this.player2, this.currentPlayer);
}


//- - - - - - - - //
// Player Class  //
//- - - - - - - -//

//Update each player score and give each player a color
function Player(playerColor) {
  this.playerScore = 0;
  this.playerColor = playerColor;
  this.boxesWon = [];
}


//- - - - - - - - //
//   Grid Class   //
//- - - - - - - -//

//Put each border ID that was clicked into the empty array. Define what each border ID is.
function Grid(player1, player2, currentPlayer) {
  this.player = [player1, player2];
  this.clickedBorder = [];
  this.$borderID = $(".hor-border, .h1-border2");
  this.currentPlayer = currentPlayer;
}

//If the current player is player 1, the current player will reassign to 2 and become player 2. If not, the current player will be player 1. Using an exclusive or.
Grid.prototype.switchTurns = function() {
  this.currentPlayer ^= 1;
  $("#next-turn").html("Player " + (this.currentPlayer + 1));
  console.log(this.currentPlayer);
};

//Takes in the borderID and player(the current Player). The player that was the current player(1 or 2) is now passed into the clickedBox Array. It will show up in the array at the index of the box that was clicked.
Grid.prototype.updateClickedBoxArray = function(borderID) {
  this.clickedBorder.push(parseInt(borderID));
  console.log(this.clickedBorder);
  if (this.checkForWinner() === false) {
    this.switchTurns();
  }
};


  //first loop grabs the first array. The second loop grabs the values in the second array. Then the clickedBorder array checks each index of the array one at a time. If it is not a winning array move on.
Grid.prototype.checkForWinner = function() {
  var completedBox = false;
    for (var i = 0; i < copyWinCombo.length; i++) {
      var found = false;
      for (var j = 0; j < copyWinCombo[i].length; j++) {
        if (this.clickedBorder.includes(copyWinCombo[i][j])) {
          found = true;

        } else {
          found = false;
          break;
        }
      }


      if (found) {
       $("#box"+i).css("background", this.player[this.currentPlayer].playerColor);
       var output = copyWinCombo.slice(i, i+1);
       copyWinCombo[i] = [];
       this.player[this.currentPlayer].boxesWon.push(output);
       var lastIndex = this.clickedBorder[this.clickedBorder.length -1];
        $("#"+lastIndex).unbind("mouseenter");
        $("#"+lastIndex).unbind("mouseleave");
        $("#"+lastIndex).css("background", "#505050");
       $("#score" + this.currentPlayer).html(this.player[this.currentPlayer].boxesWon.length);
       this.getWinner();
       completedBox = true;
     }
  }
  return completedBox;
};



//If player 1's score is greater than player 2's score, they are the winner. Otherwise player 2 is the winner.
Grid.prototype.getWinner = function() {
  if (this.player[0].boxesWon.length + this.player[1].boxesWon.length === copyWinCombo.length) {
    if (this.player[0].boxesWon.length > this.player[1].boxesWon.length) {
      bootbox.alert("Congratulations! Player 1 is the Winner!", function() {
        $(".container").show("Player 1 is the Winner!");
      });
    } else if (this.player[1].boxesWon.length > this.player[0].boxesWon.length) {
       bootbox.alert("Congratulations! Player 2 is the Winner!", function() {
        $(".container").show("Player 2 is the Winner!");
       });
    } else {
      bootbox.alert("You tied!", function() {
        $(".container").show("You tied!");
      });
    }
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

var copyWinCombo = winningCombos.slice(0);
console.log(copyWinCombo);



Grid.prototype.emptyArray = function() {
  this.clickedBorder.splice(0, this.clickedBorder.length);
};

Grid.prototype.resetGrid = function() {
  this.$borderID.css("background", "");
  $("[id^=box]").css("background", "");
  this.player[0].boxesWon = [];
  this.player[1].boxesWon = [];
  this.emptyArray();
  this.currentPlayer = 0;
  $("#next-turn").html("Player " + (this.currentPlayer + 1));
  $("#score0").html("0");
  $("#score1").html("0");
  copyWinCombo = winningCombos.slice(0);
  console.log(copyWinCombo);
};
//will also need to reset the score








//Experimental. .includes() only works if this is in here
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}


