angular.module("fizzbuzz")
        .config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "partials/home.html",
    controller: "fizzbuzzctrl"
  });
  $routeProvider.when("/getfizzbuzz", {
    templateUrl: "partials/getfizzbuzz.html",
    controller: "fizzbuzzctrl"
  });
  $routeProvider.when("/help", {
    templateUrl: "partials/help.html",
    controller: "fizzbuzzctrl"
  });
  $routeProvider.when("/results", {
    templateUrl: "partials/results.html",
    controller: "resultsctrl"
  });
});
