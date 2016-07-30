var app = angular.module("fizzbuzz");
app.controller("fizzbuzzctrl", function($scope, fizzbuzzService, $location){
  // this is where we write the function that passes information from the service to the to server.

  $scope.fbSomething = function(fbNum) {
    fizzbuzzService.collectedFizzBuzz(fbNum);
    $location.path("/results");
  };
});
