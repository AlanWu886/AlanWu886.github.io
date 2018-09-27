angular.module('app', [
	'ngRoute',
	'app.controllers'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		template: 'Home',
		controller: 'PostController'
	}).when('/post/:id', {
		templateUrl: 'views/singlepost.html',
		controller: 'SinglePostController'
	}).when('/page/:id', {
		templateUrl: 'views/page.html',
		controller: 'PageController'
	}).otherwise({
		redirectTo: '/'
	});
}]);
