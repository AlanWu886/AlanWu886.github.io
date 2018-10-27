angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		// $http.get('data/posts.json').success(function(data){
		// 	$scope.posts = data;
		//
		// });
		$http({
				method: 'GET',
				url: 'data/pages.json'
		 }).then(function (response){
			 $scope.pages = response
		 });

		$scope.check = function() {
			console.log('post');
		};


	}])
	.controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http({
				method: 'GET',
				url: 'data/pages.json'
		 }).then(function (response){
			 $scope.pages = response[$routeParams.id];
		 });
		// $http.get('data/pages.json').success(function(data){
		// 	console.log($routeParams);
		// 	$scope.page = data[$routeParams.id];
		// });

		$scope.check = function() {
			console.log('page');
		};

	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http({
				method: 'GET',
				url: 'data/posts.json'
		 }).then(function (response){
			 $scope.post = response.data[$routeParams.id];
			 console.log($scope.post);
		 });
		// $http.get('data/posts.json').success(function(data){
		// 	$scope.post = data[$routeParams.id];
		// });

		$scope.check = function() {
			console.log('single post');
		};
		$scope.check();
	}])
	.controller('AboutController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		// $http.get('data/posts.json').success(function(data){
		// 	$scope.post = data[$routeParams.id];
		// });

		$scope.check = function() {
			console.log('about page');
		};
		$scope.check();
	}])
	.controller('PortfolioController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		// $http.get('data/posts.json').success(function(data){
		// 	$scope.post = data[$routeParams.id];
		// });
		$http({
				method: 'GET',
				url: 'data/posts.json'
		 }).then(function (response){
			 $scope.projects = response.data;
			 console.log($scope.projects);
		 });

		$scope.check = function() {
			console.log('portfolio page');
		};
		$scope.check();
	}])
	.controller('ContactController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		// $http.get('data/posts.json').success(function(data){
		// 	$scope.post = data[$routeParams.id];
		// });
		$scope.gmail = function() {
			return window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mlwu860401@gmail.com');
		}

		$scope.linkedin = function() {
			return window.open('https://www.linkedin.com/in/minglunw/');
		}

		$scope.check = function() {
			console.log('contact page');
		};
		$scope.check();
	}]);
