angular.module('app', [
	'ngRoute',
	'ui.bootstrap',
	'app.controllers'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/post.html',
		controller: 'PostController'
	}).when('/post/:id', {
		templateUrl: 'views/singlepost.html',
		controller: 'SinglePostController'
	}).when('/page/:id', {
		templateUrl: 'views/page.html',
		controller: 'PageController'
	}).when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutController'
	}).when('/portfolio', {
		templateUrl: 'views/portfolio.html',
		controller: 'PortfolioController'
	}).when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
