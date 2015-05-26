(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
//###############
//#  /hello.js  #
//###############

console.log("Thanks for looking under the hood!  Please visit my GitHub page if you want to see more: https://github.com/warlyware");

//###########################
//#  /controllers/draft.js  #
//###########################

myApp.controller('DraftCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {
	$scope.chosenDraft = $stateParams.whichdraft;
	$scope.drafts = ["Draft 1", "Draft 2"];
	console.log(chosenDraft);
}]);
//#########################
//#  /controllers/home.js  #
//#########################

myApp.controller('HomeCtrl', ['$scope', '$location','$rootScope', '$document', '$http', '$state', '$stateParams', '$timeout', function($scope, $location, $rootScope, $document, $http, $state, $stateParams, $timeout) {

	$document.ready(function () {
		$rootScope.currentPage = $location.path();
		console.log($rootScope.currentPage);
	});

	$('.social-icon').on('mouseenter', function(){
		$(this).animate({
			opacity: '1',
			width: '120px',
			marginTop: '5px'
		}, 250);
	}).on('mouseleave', function() {
		$(this).animate({
			opacity: '0.7',
			width: '100px',
			marginTop: '15px'
		}, 250);
	});

	$scope.minJumbotron = function (menuItem) {
		// $rootScope.currentPage = $location.path();
		if (menuItem == 'about-me') {
			$('.jumbotron').animate({
				height:'15px'
			}, 800);
			$('.jumbotron-content').animate({
				opacity: '0'
			}, {
				duration: 800,
				queue: false
			});
		} else if (menuItem == 'home'){
			$('.jumbotron').animate({
				height:'365.75px'
			}, 800);
			$('.jumbotron-content').animate({
				opacity: '1'
			}, {
				duration: 800,
				queue: false
			});			
		}
		console.log(menuItem);
		$timeout(function() {
			$('#' + menuItem).fadeOut();
			if ($scope.fadedMenuItem) {
				$('#' + $scope.fadedMenuItem).fadeIn();		
			}
			$scope.fadedMenuItem = menuItem;
			$state.go(menuItem);
		}, 100);
	}
}]);
//###########################
//#  /controllers/paper.js  #
//###########################

myApp.controller('PaperCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {

}]);
//##############################
//#  /controllers/parallax.js  #
//##############################

myApp.controller('ParallaxCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {

}]);
//##############################
//#  /lib/angular-parallax.js  #
//##############################

'use strict';

angular.module('angular-parallax', [
]).directive('parallax', ['$window', function($window) {
  return {
    restrict: 'A',
    scope: {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@',
      parallaxHorizontalOffset: '@',
    },
    link: function($scope, elem, attrs) {
      var setPosition = function () {
        var calcValY = $window.pageYOffset * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1 );
        if (calcValY <= $window.innerHeight) {
          var topVal = (calcValY < $scope.parallaxVerticalOffset ? $scope.parallaxVerticalOffset : calcValY);
          elem.css('transform','translate(' + $scope.parallaxHorizontalOffset + 'px, ' +topVal+ 'px)');
        }
      };

      setPosition();

      angular.element($window).bind("scroll", setPosition);
      angular.element($window).bind("touchmove", setPosition);
    }  // link function
  };
}]).directive('parallaxBackground', ['$window', function($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {
      parallaxRatio: '@',
    },
    link: function($scope, elem, attrs) {
      var setPosition = function () {
        var calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1 );
        // horizontal positioning
        elem.css('background-position', "50% " + calcValY + "px");
      };

      // set our initial position - fixes webkit background render bug
      angular.element($window).bind('load', function(e) {
        setPosition();
        $scope.$apply();
      });

      angular.element($window).bind("scroll", setPosition);
      angular.element($window).bind("touchmove", setPosition);
    }  // link function
  };
}]);
},{}]},{},[1])