//#############
//#  /app.js  #
//#############


var myApp = angular.module('myApp', ['ui.router', 'angular-parallax']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	// For any unmatched url, redirect to...
	$urlRouterProvider.otherwise('/home');

	// States
	$stateProvider
    .state('home', {
		url: '/home',
		controller: 'HomeCtrl',
		templateUrl: 'views/home.html'
	})
    .state('about-me', {
		url: '/bio',
		controller: 'HomeCtrl',
		templateUrl: 'views/bio.html'
	})
    .state('paper1', {
		url: '/paper1',
		controller: 'PaperCtrl',
		templateUrl: 'views/paper1.html'
	})
    .state('paper2', {
		url: '/paper2',
		controller: 'PaperCtrl',
		templateUrl: 'views/paper2.html'
	})
    .state('paper3', {
		url: '/paper3',
		controller: 'PaperCtrl',
		templateUrl: 'views/paper3.html'
	});

}]);