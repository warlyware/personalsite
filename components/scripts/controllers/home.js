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