var app = angular.module("fizzbuzz")
  app.factory("fizzbuzzService", function(){
    var emptyInfo = {};
    return {
      collectedFizzBuzz: function(x){
        emptyInfo = x;
      },
// the code we write that tells us what we want to happen when the user inputs information in to the text field.
      fizzBuzzFunction: function(){
        if (emptyInfo % 3 === 0 && emptyInfo % 5 === 0){
          return "FizzBuzz!";
        } else if (emptyInfo % 3 === 0) {
          return "Fizz!";
        } else if (emptyInfo % 5 === 0) {
          return "Buzz!";
        } else {
          return "Not happening, try again!";
        }
      }
    };
  });
