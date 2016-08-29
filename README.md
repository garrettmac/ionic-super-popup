# Ionic Super Popup

A stylized alternative to using $ionicPopup with three themes: Twitter, Facebook, Google and The default Ionic Super Theme.

## Demo
See Demo with Ionic view app id: af790a5d


Or an youtube clip can be seen here: http://imgur.com/a/y3r2H



## Add to Project
1. Add ionic-super-popup folder to your `lib/` folder

2. In your `index.html` add:

        <script src="lib/ionic-super-popup/ionic-super-popup.js"></script>
        <link href="lib/ionic-super-popup/ionic-super-popup.css" rel="stylesheet">
     



3. In your `app.js` add `'cera.ionicSuperPopup'`:

        angular.module('starter', ['ionic','cera.ionicSuperPopup'])
        



## How to use Twitter, Facebook or Google Theme

Inport the desired `.css` theme below your `ionic-super-popup.css` theme.

	   <script src="lib/ionic-super-popup/ionic-super-popup.js"></script>
       <link href="lib/ionic-super-popup/ionic-super-popup.css" rel="stylesheet">
       
       <!-- ADD HERE -->
       <link href="lib/ionic-super-popup/addon-theme/twitter/twitter.css" rel="stylesheet">
    <!-- <link href="lib/ionic-super-popup/addon-theme/facebook/facebook.css" rel="stylesheet"> -->
    <!-- <link href="lib/ionic-super-popup/addon-theme/google/google.css" rel="stylesheet"> -->

## How to use Popups


#### In your Controller inject `ionicSuperPopup`:
              
    .controller('PopupCtrl', function($scope,ionicSuperPopup) { 

		$scope.showIonicSuperPopup=function(){
					ionicSuperPopup.show(....);
		};
	
	})


#### Basic Ionic Super Popup

With Header
  
		ionicSuperPopup.show("Basic Super Popup!");
With Header and Text
		
		ionicSuperPopup.show("Basic Super Popup!", "With some text here");



#### Ionic Super Popup Types

Success:

		ionicSuperPopup.show("Success!", "You have successfully did something!", "success");
Warning:

		ionicSuperPopup.show("Warning!", "Now I'm warning you son!", "warning");

Error:
		
		ionicSuperPopup.show("Error!", "That was a bad thing you just did!", "error");




#### Ionic Super Popup Confirmarions
w/ Success Popup:

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


W/ Success & Cancel:

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
  
  Use custom image or gif:
  
    ionicSuperPopup.show({
     title: "Custom Super Popup!",
     text: "OMG, I can do custom gifs?",
     imageUrl: "http://i.imgur.com/NUyttbn.gif" 
     });
     
#### Using inside nested modals (BUG IN Ionic versions 1.0.0-1.2.4)
There seems to be a bug in ionic versions 1.0.0-1.2.4 where any third party popups or modals you use that sit inside a nested ionic modal will be unresponsive. As Ionic is now working on Ionic V2 there will likley not be a fix for this. Instead I found a workaround. I just open and close a hidden modal before any third party modals or popups are used like so with an empty html page



			
		
    $scope.showIonicSuperPopup=function(){
     
     //ADD THIS BEFORE
     $ionicModal.fromTemplateUrl('workaround-modal.html', {
       scope: $scope
       }).then(function(modal) {
       $scope.workaroundModal = modal;
       $scope.workaroundModal.show();
       $scope.workaroundModal.hide();
    });

		ionicSuperPopup.show(....);
    };