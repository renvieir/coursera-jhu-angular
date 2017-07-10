(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/category-list/categories/categories.component.template.html',
            bindings: {
                categories: '<'
            }
        });
})();