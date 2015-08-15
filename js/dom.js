$(document).on('ready', function() {
  console.log('sanity check!');


 var newGame = new Game();
  console.log(newGame);

  //When you click on each border  the id will be console logged. newGame is an instance of the Game class. grid is a property of the Game Class. updateClickedBoxArray is a method of the grid.
  $("td").on("click", function() {
    var id = $(this).attr("id");
    //console.log(id);
    // var player = newGame.currentPlayer;
    // console.log(player);
    newGame.grid.updateClickedBoxArray(id);
  });



  //Left and right border. When the mouseenters it will change the color to red. When the mouse leaves it changes the color to nothing. When clicked it permanently changes the color to black.
 $(".hor-border")
    .bind("mouseenter", function() {
      $(this).css("background", "#FFCC00");
    })
    .bind("mouseleave", function() {
      $(this).css("background", "");
    })
    .bind("click", function() {
      $(this).unbind("mouseenter");
      $(this).unbind("mouseleave");
      $(this).css("background", "#505050");
    });



//Top and bottom border. When the mouseenters it will change the color to red. When the mouse leaves it changes the color to nothing. When clicked it permanently changes the color to black.
 $(".h1-border2")
  .bind("mouseenter", function() {
    $(this).css("background", "#FFCC00");
  })
  .bind("mouseleave", function() {
    $(this).css("background", "");
  })
  .bind("click", function() {
    $(this).unbind("mouseenter");
    $(this).unbind("mouseleave");
    $(this).css("background", "#505050");
  });


//Show the rules when the button is clicked. Hide the rules when the button is clicked again.
  $("#rules").on("click", function () {
    $(this).popover("show");



$("#reset").on("click", function() {
  $(".hor-border")
    .bind("mouseenter", function() {
      $(this).css("background", "#FFCC00");
    })
    .bind("mouseleave", function() {
      $(this).css("background", "");
    });
  $(".h1-border2")
    .bind("mouseenter", function() {
      $(this).css("background", "#FFCC00");
    })
    .bind("mouseleave", function() {
      $(this).css("background", "");
    });
  console.log("i work");
  newGame.grid.resetGrid();
});





// $('#next-turn').text(" Player " + grid.currentPlayer);











});
});











