var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      inventoryLoader.open("GET", "javascript/inventory.json");
      inventoryLoader.send();
      });
    }
  };

})( CarLot || {});
