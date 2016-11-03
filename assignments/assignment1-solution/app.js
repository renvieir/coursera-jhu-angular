(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.checkLunchList = function() {
            if (!$scope.lunchInput) {
                $scope.message = 'Please enter data first';
            } else {
                var lunchList = $scope.lunchInput.split(',');
                if (lunchList.length > 3) {
                    $scope.message = 'Too much!';
                } else {
                    $scope.message = 'Enjoy';
                }
            }
        };
    };
})();