var CarLot = (function(aug) {

  var cardOutput = document.getElementById("cardSpot");
  var inputField = document.getElementById("userInput");

// function to populate page
  aug.populatePage = function(inventory) {
    for (var i = 0; i < inventory.length; i++) {
      cardOutput.innerHTML += `<div class="col-md-4"><div class="carCard" id="${inventory[i].id}" style="border: 3px solid ${inventory[i].item.color}"><h2>${inventory[i].item.make}` + " " + `${inventory[i].item.model}</h2><h4>${inventory[i].item.year}</h4><p>Price: $${inventory[i].item.price}</p><p>Color: ${inventory[i].item.color}</p><p class="about">${inventory[i].item.description}</p></div></div>`;
    }
    // Now that the DOM is loaded, establish all the event listeners needed
    cardOutput.addEventListener("click", function(event) {
      // changing card border & background on click
      if (event.target.parentNode.className === "carCard") {
        var cardChange = event.target.parentNode;
        // locating the description in the selected card
        var textPull = event.target.parentNode.childNodes[4];
        // changing border and background of selected card
        cardChange.classList.toggle("newer-card");
        cardChange.setAttribute("style", "border: 6px solid green;");
        // putting cursor in the input field
        inputField.focus();
        inputField.addEventListener("keyup", function(e) {
          if (e.keyCode !== 13) {
            // binding input text to description in selected card
            textPull.innerHTML = inputField.value;
          }
        })
      }
      // changing description in the array to user input description
      inputField.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
          for (var i = 0; i < inventory.length; i++) {
            if (inventory[i].id === cardChange.id) {
              inventory[i].item.description = inputField.value;
            }
          }
          //clearing out old DOM cards & passing inventory info
        CarLot.clearDOM(inventory);
        }
      })
      console.log(inventory);
    });
  }

  return aug;
})( CarLot || {});

