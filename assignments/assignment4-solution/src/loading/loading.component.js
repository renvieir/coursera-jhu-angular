(function () {
    'use strict';

    angular.module('loading').component('loading', {
        templateUrl: 'src/loading/loading.template.html',
        controller: LoadingController
    });

    LoadingController.$inject = ['$rootScope'];
    function LoadingController($rootScope) {
        var loading = this;
        loading.showLoading = false;
        var cancellers = [];

        loading.$onInit = function () {
            var cancel = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
                loading.showLoading = true;                
            });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                loading.showLoading = false;                                                
            });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                loading.showLoading = false;                                                
            });
            cancellers.push(cancel);
        };

        loading.$onDestroy = function () {
            cancellers.forEach(function(item) {
                item();   
            });            
        };
    }
})();