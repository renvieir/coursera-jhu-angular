(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('CategoryItemsController', CategoryItemsController);

    CategoryItemsController.$inject = ['response'];
    function CategoryItemsController(response){
        console.log(response);      
        var vm = this;
        vm.items = response.data.menu_items;  
        vm.name = response.data.category.name;
    }
})();