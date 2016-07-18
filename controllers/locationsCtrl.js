angular
    .module("devmtnTravel")
    .controller("locationsCtrl", function($scope, mainSrv) {

        $scope.getData = function() {
            $scope.locale = mainSrv.travelInfo;
    };

$scope.getData();

}) //end of controller