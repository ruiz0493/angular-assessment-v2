angular.module("assessment").controller("petsCtrl", function($scope, mainSvc){
	$scope.pets = "Pets controller is working";
	$scope.serviceData = mainSvc.serviceData;
	$scope.showImage = false;

	$scope.pets = mainSvc.getData()
	mainSvc.getData().then(function(response){
		$scope.pets = response.data
	})


})
