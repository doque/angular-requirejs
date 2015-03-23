requirejs.config({
	baseUrl: 'bower_components',
	paths: {
		'angular': '../bower_components/angular/angular',
		'angular-resource': '../bower_components/angular-resource/angular-resource',
		'app': '../scripts/app',
		'MyCtrl': '../scripts/MyCtrl'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-resource': {
			deps: ['angular'],
		}
	},
	deps: ['MyCtrl']
});