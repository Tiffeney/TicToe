console.log(`Connected!`); //check to see if the file is linked correctly

function startGame() { //write a function //
  document.turn = "X"; // setting up DOM
  document.winner = null;
}
                            //once the page is refreshed (1) cell should return as undefined. please see html for why?
function nextMove(cell) { // write a function for each cell to handle a flick event onClick="nextMove(this)"
    if(document.winner != null) {
}
   if(cell.innerText == '') {
      cell.innerText = document.turn;
   switchTurn(); //when this function is called it know take and switch from "X" or "O". 
   } else {
    clearInterval();
   }
}


function switchTurn() { //write a function, program wont load unless its knows why used switchTurn in prior function 
   if(checkForWinner(document.turn)) {
       document.winner = document.turn;
   }else if(document.turn == "X"){ //next function needs to the next player to display which is player "O".
       document.turn = "O";
   } else {
       document.turn ="X";
   }
}

function checkForWinner(move) {
    let result =false;
    if(checkLine(0, 1, 2, move) || // winning combos - top row
      checkLine(3, 4, 5, move) || //  middle row
      checkLine(6, 7, 8, move) || //  last row
      checkLine(0, 3, 6, move) || //  first column
      checkLine(1, 4, 7, move) || // second column
      checkLine(2, 5, 8, move) || // third column
      checkLine(0, 4, 8, move) || // 
      checkLine(2, 4, 6, move)) {
        result = true;
      }
        return result;
 }

function checkLine(a, b, c, move) {
   let result = false;
   if(getBox(a) == move && getBox(b) == move && getBox(c) == move ) {
       result = true;
   }
   return result;
}

function getBox(number) {
   return document.getElementById("c" + number).innerText;
}