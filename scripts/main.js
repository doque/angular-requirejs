requirejs.config({
	baseUrl: 'bower_components',
	paths: {
		'angular': '../bower_components/angular/angular',
		'angular-resource': '../bower_components/angular-resource/angular-resource',
		'app': '../scripts/app'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-resource': {
			deps: ['angular'],
		}
	},
});


require(["app"], function(app) {
	console.log(app); // this works
	app.controller("MyCtrl", ['$scope', '$resource',
		function($scope, $resource) {
			console.log("hello"); // this doesn't work
			$scope.items = [1, 3, 4, 5];
		}
	]);
});