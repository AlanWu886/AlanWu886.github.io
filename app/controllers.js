angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;

		});

		$scope.check = function() {
			console.log('post');
		};
	}])
	.controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.json').success(function(data){
			console.log($routeParams);
			$scope.page = data[$routeParams.id];
		});

		$scope.check = function() {
			console.log('page');
		};

	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});

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

		$scope.check = function() {
			console.log('portfolio page');
		};
		$scope.check();
	}])
	.controller('ContactController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		// $http.get('data/posts.json').success(function(data){
		// 	$scope.post = data[$routeParams.id];
		// });

		$scope.check = function() {
			console.log('contact page');
		};
		$scope.check();
	}]);
