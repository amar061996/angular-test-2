var myApp=angular
	.module("myModule",[])
	.controller("myController",function($scope){

	// $scope.message="My message";

	var employees=[

	{name :"Amar Prakash",dateOfBirth: new Date("November 6 1996"), gender:"Male",salary:55000.755,city:"Bangalore"},
	{name :"Ashish Chauhan",dateOfBirth: new Date("November 7 1995"), gender:"Male",salary:53000.765,city:"Lucknow"},
	{name :"Archit Joshi",dateOfBirth: new Date("November 8 1995"), gender:"Male",salary:51000.555,city:"Bhilwara"},
	{name :"Ayush Gupta",dateOfBirth: new Date("November 9 1996"), gender:"Male",salary:56000.355,city:"Gwalior"},
	{name :"Sagar Sharma",dateOfBirth: new Date("November 10 1996"), gender:"Male",salary:52000.155,city:"Agra"}

	];

	$scope.employees=employees;

	$scope.rowLimit=3;

	$scope.sortColumn="name";

	$scope.reverseSort=false;

	$scope.sortData=function(column){

		$scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
		$scope.sortColumn=column;
	}

	$scope.getSortClass=function(column){

		if($scope.sortColumn==column){

			return $scope.reverseSort ? "arrow-down" : "arrow-up" ; 
		}

		return "";
	}


});
