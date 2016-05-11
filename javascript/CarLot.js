var CarLot = (function (aug) {
  var inventory = [];

  var inventoryLoader = new XMLHttpRequest();

// function to add IDs to the JSON items
  aug.CarObj = function(item, id) {
    this.item = item;
    this.id = id;
  }

  aug.getInventory = function () {
    return inventory;
  }

// function to load JSON info
  aug.loadInventory = function (callback) {
    var carInfo = JSON.parse(inventoryLoader.responseText);
    for (var i = 0; i < carInfo.cars.length; i++) {
      newCar = new CarLot.CarObj(carInfo.cars[i], `car${i}`);
      inventory.push(newCar);
    }
    CarLot.populatePage(inventory);
  }

  inventoryLoader.addEventListener("load", aug.loadInventory);
  inventoryLoader.open("GET", "javascript/inventory.json");
  inventoryLoader.send();

  return aug;

})( CarLot || {});
