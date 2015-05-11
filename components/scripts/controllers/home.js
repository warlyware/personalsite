//#########################
//#  /controllers/home.js  #
//#########################

myApp.controller('HomeCtrl', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
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
}]);