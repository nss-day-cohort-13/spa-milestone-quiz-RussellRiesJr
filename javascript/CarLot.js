var CarLot = (function (aug) {
  var inventory = [];

  var inventoryLoader = new XMLHttpRequest();


  aug.getInventory = function () {
    return inventory;
  }

  aug.loadInventory = function (callback) {
    var carInfo = JSON.parse(inventoryLoader.responseText);
    CarLot.populatePage(carInfo.cars);
    inventory = carInfo.cars;
    console.log(inventory);
  }

  inventoryLoader.addEventListener("load", aug.loadInventory);
  inventoryLoader.open("GET", "javascript/inventory.json");
  inventoryLoader.send();

  return aug;

})( CarLot || {});
