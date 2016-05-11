var CarLot = (function(aug) {

// function to reset the input field to empty
  aug.clearInputField = function() {
    var inputField = document.getElementById("userInput");
    inputField.value = "";
  }

// function to clear existing DOM cards
  aug.clearDOM = function(inventory) {
    var cardOutput = document.getElementById("cardSpot");
    cardOutput.innerHTML = "";
    // calling to re-populate the page with the updated info
    CarLot.populatePage(inventory);
    CarLot.clearInputField();
  }




  return aug;
})( CarLot || {});
