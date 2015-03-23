define(["angular", "angular-resource"], function(angular) {
	var app = angular.module('MyApp', ['ngResource']);
	angular.bootstrap(document, ['MyApp']);
	return angular.module('MyApp');
});