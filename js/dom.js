$(document).on('ready', function() {
  console.log('sanity check!');


//create a new instance of the game
 var newGame = new Game();
  console.log(newGame);

  //When you click on each border  the id will be console logged. newGame is an instance of the Game class. grid is a property of the Game Class. updateClickedBoxArray is a method of the grid.
  $(".hor-border, .h1-border2").one("click", function() {
    var id = $(this).attr("id");
    newGame.grid.updateClickedBoxArray(id);
  });


  //Left and right border. When the mouseenters it will change the color to yellow. When the mouse leaves it changes the color to nothing. When clicked it permanently changes the color to gray.
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



//Top and bottom border. When the mouseenters it will change the color to yellow. When the mouse leaves it changes the color to nothing. When clicked it permanently changes the color to gray.
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
$('#rules').popover();


//When clicked it will
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
  $(".hor-border, .h1-border2").one("click", function() {
    var id = $(this).attr("id");
    newGame.grid.updateClickedBoxArray(id);
  });

});


});











