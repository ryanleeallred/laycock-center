var app = angular.module('gridSort');

app.controller('gridController', function($scope, gridData){

	 $scope.getData = function (){
		$scope.projects = gridData.getData();
	}

	$scope.getData();

	 $scope.showProjects = function(organization){
	 	for(var i=0; i<$scope.projects.length; i++){
	 		$scope.projects[i].showMe = true;

	 		if (organization === 'all'){
	 			$scope.projects[i].showMe = true;
	 		} 
	 		if (organization === 'comms' && $scope.projects[i].comms === false){
	 			$scope.projects[i].showMe = false;
	 		} 
	 		if (organization === 'animation' && $scope.projects[i].animation === false){
	 			$scope.projects[i].showMe = false;
	 		} 
	 		if (organization === 'visual arts' && $scope.projects[i].visualArts === false){
	 			$scope.projects[i].showMe = false;
	 		} 
	 		if (organization === 'drama' && $scope.projects[i].drama === false){
	 			$scope.projects[i].showMe = false;
	 		} 
	 		if (organization === 'tma' && $scope.projects[i].tma === false){
	 			$scope.projects[i].showMe = false;
	 		} 
	 	}	
	}		

});