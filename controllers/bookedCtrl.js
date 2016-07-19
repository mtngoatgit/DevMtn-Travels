angular
  .module('devmtnTravel')
  .controller('bookedCtrl', function($scope, $stateParams, mainSrv){

    $scope.travelInfo = mainSrv.travelInfo;


    function changeBackground(id) {
      for(var index in $scope.travelInfo){
        if($scope.travelInfo[index].id == id){
          $scope.background = {
            "background": "url(" + $scope.travelInfo[index].image + ")"
          }
          $scope.index = index;
        }
      }
    }
changeBackground($stateParams.id);



  })





















































// angular
//     .module("devmtnTravel")
//     .controller("bookedCtrl", function($scope, $stateParams, mainSrv) {
// // passing in $scope allows us to bind between control and view; passing in $stateParams comes from
// // our code in app.js and allows the routing process to happen by track the state of our page...; 
// // and mainSrv connects us to our service which is collating our data.

// $scope.travelInfo = mainSrv.travelInfo;
// // this is simply binding the results of our service to the $scope object and thereby making that data transportable to the view

// function changeBackground (id){
//   for(var index in $scope.travelInfo){
//     if($scope.travelInfo[index].id == id){
//         $scope.background = {
//           "background": "url(" + $scope.travelInfo[index].image + ")",
//           "background-repeat": "no-repeat",
//           "background-size": "cover",
//           "background-position": "center"
//         };
//         $scope.index = index;
//     }
//   }
// }

// changeBackground($stateParams.id);

//     });