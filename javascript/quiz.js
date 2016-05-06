var CarLot = (function(aug) {

  var cardOutput = document.getElementById("cardSpot");

  aug.populatePage = function(inventory) {
    // Loop over the inventory and populate the page
    for (var i = 0; i < inventory.length; i++) {
      cardOutput.innerHTML += `<div class="col-md-4"><div class="carCard" style="border: 3px solid ${inventory[i].color}"><h2>${inventory[i].make}` + " " + `${inventory[i].model}</h2><h4>${inventory[i].year}</h4><p>Price: $${inventory[i].price}</p><p>Color: ${inventory[i].color}</p><p class="about">${inventory[i].description}</p></div></div>`;
    }

    // Now that the DOM is loaded, establish all the event listeners needed
  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete


  return aug;
})( CarLot || {});

