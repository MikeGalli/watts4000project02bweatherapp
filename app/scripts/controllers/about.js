'use strict';

/**
 * @ngdoc function
 * @name watts4000project02bweatherappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the watts4000project02bweatherappApp
 */

  angular.module('watts4000project02bweatherappApp')
  .controller('AboutCtrl', function ($scope, photos) {
    $scope.photos = photos.query();

    $scope.refreshPhotos = function(){
        $scope.photos = photos.query({
            title: $scope.title
        });
    };
  });

  /******************************
  angular.module('watts4000project02bweatherappApp')
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
    */
