(function () {
    'use strict';

    angular
        .module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
    function RoutesConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',{
                url: '/home',
                template: '<a ui-sref="categories"><h2>All Categories</h2></a>'
            })        
            .state('categories',{
                url: '/categories',
                templateUrl: 'src/category-list/category-list.template.html',
                controller: 'CategoryListController as vm',
                resolve: {
                    response: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('categoryItem',{
                url: '/category-item/{name}',
                templateUrl: 'src/category-items/category-items.template.html',
                controller: 'CategoryItemsController as vm',
                resolve: {
                    response: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.name);
                    }]
                }
            });        
    }
})();