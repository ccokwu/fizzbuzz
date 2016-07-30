var app = angular.module("fizzbuzz");
app.controller("resultsctrl", function($scope, fizzbuzzService){

  $scope.fizzbuzzObject = fizzbuzzService.fizzBuzzFunction();
});
