//###########################
//#  /controllers/draft.js  #
//###########################

myApp.controller('DraftCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {
	$scope.chosenDraft = $stateParams.whichdraft;
	$scope.drafts = ["Draft 1", "Draft 2"];
	console.log(chosenDraft);
}]);