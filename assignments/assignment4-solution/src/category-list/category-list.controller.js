(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('CategoryListController', CategoryListController);

    CategoryListController.$inject = ['response'];
    function CategoryListController(response){
        var vm = this;
        vm.data = response.data;        
        console.log(response);
    }
})();