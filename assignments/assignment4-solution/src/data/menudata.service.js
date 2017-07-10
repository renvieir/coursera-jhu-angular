(function(){
    'use strict';

    angular
        .module('data')
        .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
        return {
            getAllCategories:getAllCategories,
            getItemsForCategory:getItemsForCategory,
        }

        function getAllCategories(){
            var categoriesUrl = 'https://davids-restaurant.herokuapp.com/categories.json';
            return $http.get(categoriesUrl);
        }

        function getItemsForCategory(categoryShortName){
            var categoriesUrl = ' https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName;
            console.log('No servico:', categoriesUrl);
            return $http.get(categoriesUrl);
        }

    }
})();