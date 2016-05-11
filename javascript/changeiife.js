var CarLot = (function(aug) {

  aug.clearInputField = function() {
    var inputField = document.getElementById("userInput");
    inputField.value = "";
  }

  aug.clearDOM = function(inventory) {
    var cardOutput = document.getElementById("cardSpot");
    cardOutput.innerHTML = "";
    CarLot.populatePage(inventory);
    CarLot.clearInputField();
  }




  return aug;
})( CarLot || {});
