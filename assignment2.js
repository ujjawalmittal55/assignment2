(function () {
'use strict';

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
  	name: "mango",
  	quantity:"10"
  }
];
var e =false; var r=false; 
angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.service('ShoppingListService', ShoppingListService);
ShoppingListController1.$inject = ['$scope','ShoppingListService'];
function ShoppingListController1($scope,ShoppingListService) {
  $scope.q=false;
  $scope.q1=false;
  $scope.items = shoppingList2;
  $scope.removeItem = function (itemIndex) {
  	ShoppingListService.addItem($scope.items[itemIndex].name, $scope.items[itemIndex].quantity);
    ShoppingListService.removeItem(itemIndex);
    if(e==true){$scope.q=true;  $scope.q1=true;}
    ShoppingListService.run();
  };
}
ShoppingListController2.$inject = ['$scope','ShoppingListService'];
function ShoppingListController2($scope,ShoppingListService,) {
	$scope.run=false;
		
	$scope.items=ShoppingListService.getItems();
	$scope.run = ShoppingListService.run();
console.log($scope.run);
}

function ShoppingListService() {
  var service = this;
  var items = [];
  service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
      if(items.length>1){r=true; }
      if(items.length==5){e=true; }
  };
  service.run=function()
  {
  	console.log(r);
  	if(r=true){

  	return true;}
  };
  service.removeItem = function (itemIndex) {
    shoppingList2.splice(itemIndex, 1);
  };
  
  service.getItems = function () {
    return items;

  };
}
})();
