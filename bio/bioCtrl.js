angular.module("assessment").controller("bioCtrl", function($scope, mainSvc, $stateParams){



	mainSvc.getBio($stateParams.id)
	.then(function(response){
		 $scope.singlePet = response;
		console.log($scope.singlePet);
	})

	


})