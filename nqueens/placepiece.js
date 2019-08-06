//size of board
var board = 8;

//holds all available row numbers to be placedss
var allRows = [];
for (var i = 0; i < board; i++) {
  allRows[i] = i;
}

//initial state, no pieces on board yet
var position = new Array(board).fill(-1);

//keep count of all possible placements of nqueen
var count = 0;

//try to put pieces on board
placePiece(board, 0, position);
console.log(count);

//recursive function to systematically place pieces on board
//that satisfies only one queen in each column / row
function placePiece(n, k, position){
  //base ending condition
  if (k == n) {
    if(checkDiagonal(position)){
      console.log(position);
      printboard(position);
      count++;
    }
    return;
  }

  var localPos = position.slice(0);

  //recursion for k
  // 1. produce available array
  var available = allRows.filter( row => !localPos.includes(row));
  available.forEach( spot => {
    localPos[k] = spot;
    placePiece(n, k + 1, localPos);
  });

}

//when there are N queens on the board, check if they'll diagnolly kill each other
function checkDiagonal(position){
  //for position array, we are comparing change in index with change in value
  for(var i = 0; i < position.length; i++){
    for(var j = i + 1; j < position.length; j++){
      //i is the first piece, j are the ones after
      if (j - i == Math.abs(position[j] - position[i])) {
        return false;
      }
    }
  }
  return true;
}

function printboard(position){
  position.forEach(row => {
    var strRow = "";
    for(var i = 0; i < position.length; i++){
      if(i == row){
        strRow = strRow + " Q ";
      }
      else {
        strRow = strRow + " - ";
      }
    }
    console.log(strRow);
  });
}
