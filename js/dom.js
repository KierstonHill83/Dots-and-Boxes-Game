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
    $(this).css("background", "red");
  })
  .bind("mouseleave", function() {
    $(this).css("background", "");
  })
  .bind("click", function() {
    $(this).unbind("mouseenter");
    $(this).unbind("mouseleave");
    $(this).css("background", "black");
  });


//Top and bottom border. When the mouseenters it will change the color to red. When the mouse leaves it changes the color to nothing. When clicked it permanently changes the color to black.
  $(".h1-border2")
  .bind("mouseenter", function() {
    $(this).css("background", "red");
  })
  .bind("mouseleave", function() {
    $(this).css("background", "");
  })
  .bind("click", function() {
    $(this).unbind("mouseenter");
    $(this).unbind("mouseleave");
    $(this).css("background", "black");
  });


  $(".hor-border2").unbind("click");


});





