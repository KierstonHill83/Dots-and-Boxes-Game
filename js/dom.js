$(document).on('ready', function() {


//create a new instance of the game
 var newGame = new Game();


  //When you click on each border  the id will be console logged. newGame is an instance of the Game class. grid is a property of the Game Class. updateClickedBoxArray is a method of the grid.
  $(".hor-border, .h1-border2").one("click", function() {
    var id = $(this).attr("id");
    newGame.grid.updateClickedBoxArray(id);
  });


  //All borders. When the mouseenters it will change the color to yellow. When the mouse leaves it changes the color to nothing. When clicked it permanently changes the color to gray.
 $(".hor-border, .h1-border2")
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


//When clicked it will bind the mouseenter and mouseleave functions. Call the resetGrid function. Do something when the borders are clicked one time. Call the updateClickedBoxArray on the newGame. When the borders are combined into one function they all don't hightlight on the mouseenter.
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
  newGame.grid.resetGrid();
  $(".hor-border, .h1-border2").one("click", function() {
    var id = $(this).attr("id");
    newGame.grid.updateClickedBoxArray(id);
  });
});


});











