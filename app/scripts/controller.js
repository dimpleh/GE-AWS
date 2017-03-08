'use strict';

/**
 * Master Controller
 */
angular.module('GE-AWS')
  .controller('MasterCtrl', ['$scope','$location', function ($scope, $location) {      
      $scope.isActive = function (viewLocation) {          
        var active = (viewLocation === $location.path());
        return active;
      };
  }]);

