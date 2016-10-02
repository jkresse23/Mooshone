angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal) {

  $scope.friends = [

    {name : "Jonathan"},
    {name : "Lori"},
    {name: "Ryan"}
  ];

  $ionicModal.fromTemplateUrl('friendsinstructions.html', function(modal) {

    $scope.instructionsModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  //open task modal upon button click.
  $scope.showInstructions = function() {
    $scope.instructionsModal.show();
  };

  $scope.closeInstructions = function() {
    $scope.instructionsModal.hide();
  };

})

.controller('friendsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('businessesCtrl', function($scope) {

  $scope.businesses =  [
    {name : "Cafe Ost"},
    {name : "Box Kite"},
    {name: "Big Gay Ice Cream"}
  ];

})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
