(function(){
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',  ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var vm = this;

  vm.to_buy_list = ShoppingListCheckOffService.getToBuyList();

  vm.removeItem = function(index){
    // vm.to_buy_list.removeItem(index);
    ShoppingListCheckOffService.addToBoughtList(index);
  };

  vm.hasItemToBuy = function(){
    return ShoppingListCheckOffService.hasItemToBuy();
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var vm = this;
  vm.already_bought_list = ShoppingListCheckOffService.getAlreadyBoughtList();

  vm.hasBoughtSomething = function(){
    return ShoppingListCheckOffService.hasBoughtSomething();
  }
}

function ShoppingListCheckOffService(){
  var service = this;

  var to_buy_list = [{
    name: "cookies",
    quantity: 10
  },{
    name: "chips",
    quantity: 2
  },{
    name: "chocolate",
    quantity: 5
  },{
    name: "vanilla ice cream",
    quantity: 1
  },{
    name: "coffe",
    quantity: 3
  }];

  var already_bought_list = [];

  service.getToBuyList = function(){
    return to_buy_list;
  };

  service.getAlreadyBoughtList = function(){
    return already_bought_list;
  };

  service.addToBoughtList = function(index){
    var item = to_buy_list[index];
    already_bought_list.push(item);
    to_buy_list.splice(index, 1);
  }

  service.hasItemToBuy = function(){
    return to_buy_list.length > 0;
  };

  service.hasBoughtSomething = function(){
    return already_bought_list.length > 0;
  }

}
})();
