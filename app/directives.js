angular.module('app.directives', [])
	.directive('navigationbar', [function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: ['$scope', '$http', function($scope, $http){
				// $http.get('data/pages.json').success(function(data){
				// 	$scope.pages = data;
				// });
				$http({
			      method: 'GET',
			      url: 'data/pages.json'
			   }).then(function (response){
					 $scope.pages = response
			   });
				 $scope.setText = function(text) {
					 console.log(text);
					 $scope.btnText = text;
					 // $scope.btnDisplay = {
				   //    a:hover span {display:none},
				   //    a:hover:after {content:text}
					 // }
				 };
				 $scope.clearText = function() {
					 $scope.btnText = null;
				 };
				 $scope.tzone = Intl.DateTimeFormat().resolvedOptions().timeZone;

				 // console.log()
			}],
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'partials/navigationbar.html',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		};
	}]);;
