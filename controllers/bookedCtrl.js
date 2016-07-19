angular
    .module("devmtnTravel")
    .controller("bookedCtrl", function($scope, $stateParams, mainSrv) {


$scope.travelInfo = mainSrv.travelInfo;
$scope.test = "is this even communicating?"
console.log($scope.travelInfo);


function changeBackground (id){
  for(var index in $scope.travelInfo){
      console.log(id);
    if($scope.travelInfo[index].id == id){
      console.log(id);
        $scope.background = {
          "background": "url(" + $scope.travelInfo[index].image + ")",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center",
          // "width": "100%"
        };
        $scope.index = index;
    }
  }
}

// console.log($stateParams.x);

changeBackground($stateParams.id);




}) //end of controller