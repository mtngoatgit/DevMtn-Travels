angular
    .module("devmtnTravel")
    .controller("packageCtrl", function($scope, $stateParams, mainSrv) {

    
            $scope.packages = mainSrv.travelInfo


}) //end of controller