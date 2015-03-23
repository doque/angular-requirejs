require(["app"], function(app) {
	console.log(app); // this works
	app.controller("MyCtrl", ['$scope', '$resource',
		function($scope, $resource) {
			console.log("hello"); // this doesn't work
			$scope.items = [1, 3, 4, 5];
		}
	]);
});