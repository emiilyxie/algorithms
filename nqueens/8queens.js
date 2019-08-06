// create and initialize empty board
var boardLength = 8;

function placeQueens(){

  //CREATE A CHESSBOARD
  var chessboard = new Array(boardLength);
  for(var i = 0; i < chessboard.length; i++){
    chessboard[i] = new Array(boardLength);
  }

  for(var i = 0; i < chessboard.length; i++){
    for(var j = 0; j < chessboard.length; j++)
    //chessboard[i][j] = "(" + i + "," + j + ")";
    chessboard[i][j] = 0;
  }

  // function showboard(array){
  //   for(var i = 0; i < array.length; i++){
  //     console.log("Row: " + array[i]);
  //   }
  // }

  //PLACE SOME QUEENS
  var column = Array(8).fill(1);
  for (var i = 0; i < chessboard.length; i++){
    var k = Math.floor(Math.random() * chessboard.length);
    //if(column[k] == 1){
      //column[k] = 0;
      //board[i][k] = 1;
    //}
  }

  verifyboard(chessboard);
  printboard(chessboard);

}

//********************** OUTSIDE FUNCTIONS *******************

function printboard(board){
  for(var i = 0; i < board.length; i++){
    var row = "";
    for(var j = 0; j < board.length; j++){
      if(board[i][j] == 1){
        row = row + " q ";
      }
      else {
        row = row + " - ";
      }
    }
    console.log(row);
  }
}

function verifyboard(board){
  return verifyColumn(board);
}

function verifyColumn(board){
  for(var j = 0; j < board.length; j++){
    var val = 0;
    for(var i = 0; i < board.length; i++){
      val = val + board[i][j];
    }
    if (val > 1) {
      console.log("colomn: " + j);
    }
    else {
      return false;
    }
  }
}

function verifyRow(board){
  for(var i = 0; i < board.length; i++){
    var val = 0;
    for(var j = 0; j < board.length; j++){
      val = val + board[j][i];
    }
    if (val > 1) {
      console.log("row: " + i);
    }
    else {
      return false;
    }
  }
}

placeQueens();
