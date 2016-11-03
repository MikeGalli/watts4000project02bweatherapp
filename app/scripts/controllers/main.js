'use strict';

/**
 * @ngdoc function
 * @name watts4000project02bweatherappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watts4000project02bweatherappApp
 */

angular.module('watts4000project02bweatherappApp')
.controller('MainCtrl', function ($scope, current) {
  $scope.current = current.query();

  $scope.refreshCurrent = function(){
      $scope.current = current.query({
          location: $scope.location
      });
  };
});
