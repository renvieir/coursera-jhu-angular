(function(){
    angular.module('NarrowItDownApp', []).
    controller('NarrowItDownController', NarrowItDownController).
    service('MenuSearchService', MenuSearchService).
    directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var vm = this;
        vm.searchTerm;
        vm.found;
        vm.errorMessage = 'Nothing Found';
        vm.showErrorMessage = false;
        vm.showLoader = false;

        vm.getMatchedMenuItems = function(){
          vm.showLoader = true;
          vm.showErrorMessage = false;
          vm.found = [];

          if (vm.searchTerm){
            var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
            promise.then(function(result){
                vm.showLoader = false;
                vm.found = result;
                if (!vm.found.length>0){
                  vm.showErrorMessage = true;
                }
            }, function(message){
              showError();
            });
          } else {
            showError();
          }
        };

        vm.removeItem = function (index){
          vm.found.splice(index, 1);
        }

        function showError(){
          vm.showLoader = false;
          vm.showErrorMessage = true;
        }

    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http){
        var service = this;

        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                var foundItems = [];
                result.data.menu_items.forEach(function(item) {
                    if (contains(item.name, searchTerm)){
                       foundItems.push(item);
                    }
                });

                return foundItems;
            });
        };

        function contains(item, search){
            return item.toLowerCase().includes(
                search.toLowerCase());
        }
    }

    function FoundItems(){
      var ddo = {
        restrict: 'E',
        templateUrl: 'found-items.html',
        scope: {
          items: "<foundItems",
          remove: "&onRemove"
        }
      };

      return ddo;
    }

})();
