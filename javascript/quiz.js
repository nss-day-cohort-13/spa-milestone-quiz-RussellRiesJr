var CarLot = (function(aug) {

  var cardOutput = document.getElementById("cardSpot");
  var inputField = document.getElementById("userInput");

  aug.populatePage = function(inventory) {
    // Loop over the inventory and populate the page
    for (var i = 0; i < inventory.length; i++) {
      cardOutput.innerHTML += `<div class="col-md-4"><div class="carCard" id="${inventory[i].id}" style="border: 3px solid ${inventory[i].item.color}"><h2>${inventory[i].item.make}` + " " + `${inventory[i].item.model}</h2><h4>${inventory[i].item.year}</h4><p>Price: $${inventory[i].item.price}</p><p>Color: ${inventory[i].item.color}</p><p class="about">${inventory[i].item.description}</p></div></div>`;
    }
    // Now that the DOM is loaded, establish all the event listeners needed
    cardOutput.addEventListener("click", function(event) {
      // changing card border & background on click
      if (event.target.parentNode.className === "carCard") {
        var cardChange = event.target.parentNode;
        var textPull = event.target.parentNode.childNodes[4];
        console.log("tag", textPull);
        cardChange.classList.toggle("newer-card");
        cardChange.setAttribute("style", "border: 6px solid green;");
        // putting cursor in the input field
        inputField.focus();
        inputField.addEventListener("keyup", function() {
          textPull.innerHTML = inputField.value;
          document.addEventListener("keyup", function(e) {
            var userInput = document.getElementById("userInput");
            if (e.keyCode === 13) {
              for (var i = 0; i < cardChange.children.length; i++) {
                cardChange.children[4] = inputField.value;
                inputField.value = "";
              }
            }
          })
        })
      }
    });
  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete


  return aug;
})( CarLot || {});

