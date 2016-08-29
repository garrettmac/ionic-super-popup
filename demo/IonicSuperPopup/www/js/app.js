// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','cera.ionicSuperPopup'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('MainCtrl', function($scope,ionicSuperPopup) {




$scope.popup1 = function () {
ionicSuperPopup.show("Basic Super Popup!");
};

$scope.popup2 = function () {
  ionicSuperPopup.show("Basic Super Popup!", "With some text here");
};

$scope.popup3a = function () {
ionicSuperPopup.show("Success!", "You have successfully did something!", "success");
};

$scope.popup3b = function () {
ionicSuperPopup.show("Warning!", "Now I warning you son!", "warning");
};

$scope.popup3c = function () {
ionicSuperPopup.show("Error!", "That was a bad thing you just did!", "error");
};

$scope.popup4 = function () {
  ionicSuperPopup.show({
     title: "Are you sure?",
     text: "This will do something!",
     type: "warning",
     showCancelButton: true,
     confirmButtonColor: "#DD6B55",
     confirmButtonText: "Yes, do that thing!",
     closeOnConfirm: false},
  function(){

     ionicSuperPopup.show("Nice Work!", "You totally just did something!", "success");

  });
};

$scope.popup5 = function () {
  ionicSuperPopup.show({
    title: "Are you sure?",
    text: "This will do something again!",
     type: "warning",
     showCancelButton: true,
     confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, do that thing!",
     cancelButtonText: "No, don't!",
     closeOnConfirm: false,
     closeOnCancel: false },
  function(isConfirm){
     if (isConfirm) {
        ionicSuperPopup.show("You did it!", "You totally just did something!", "success");
     } else {
        ionicSuperPopup.show("Cancelled", "Pew, you totally didn't do anything!", "error");
     }
  });
};

$scope.popup6 = function () {
  ionicSuperPopup.show({
     title: "Custom Super Popup!",
     text: "OMG, I can do custom gifs?",
     imageUrl: "http://i.imgur.com/NUyttbn.gif" });
};
    })
