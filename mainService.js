angular.module("assessment").service("mainSvc", function($http){
	this.serviceData = "service is working";

	this.getData = function(){
		var promise = $http.get("http://practiceapi.devmounta.in/pets");

		promise.then(function(response){
			return response.data;
		});

		return promise

	}

	this.getBio = function(id){
		return $http({
			method: "GET",
			url: "http://practiceapi.devmounta.in/pets/" + id
		}).then(function(response){
			return response.data;
		})
	}

	});