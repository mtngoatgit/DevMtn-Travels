angular
    .module("devmtnTravel")
    .controller("packageCtrl", function($scope, mainSrv) {

        $scope.getData = function() {
            $scope.packages = mainSrv.travelInfo
        }

        $scope.getData();


}) //end of controller