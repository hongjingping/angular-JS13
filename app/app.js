'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_list',

]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).controller("NavController",[
  "$scope",
  "$location",
  function($scope,$location){
    $scope.$location = $location;
    $scope.$watch("$location.path()",function (now){
      if(path.startsWith('/in_theaters')){
        $scope.type = "in_theaters";
      }else if(path.startsWith('/coming_soon')){
        $scope.type = "coming_soon";
      }else if(path.startsWith('/top250')){
        $scope.type = "top250";
      }
      console.log($scope.type);
    })
  }]);
