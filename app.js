angular.module("assessment", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){

	// ".when " will take the user to the home state 
	$urlRouterProvider.when("", "/");

	// ".otherwise" Will tell the user that whatever page they are trying to go to does not exist
	$urlRouterProvider.otherwise("/404")

	$stateProvider
		.state("home", {
			controller: "homeCtrl",
			url: "/",
			templateUrl: "home/home.html"
		})

	    .state("about", {
      		controller: "aboutCtrl",
      		url: "/about",
      		templateUrl: "about/about.html"
	    })

	    .state("blog", {
	    	controller: "blogCtrl",
	    	url: "/blog",
	    	templateUrl: "blog/blog.html"
	    })

	    .state("pets", {
	    	controller: "petsCtrl",
	    	url: "/pets",
	    	templateUrl: "pets/pets.html"
	    })

	    .state("bio", {
	    	controller: "bioCtrl",
	    	url: "/bio/:id",
	    	templateUrl: "bio/pet-bio.html"
	    })
})



