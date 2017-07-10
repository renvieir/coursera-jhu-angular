(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/category-items/items/items.component.template.html',
            bindings: {
                items: '<'
            }
        });
})();