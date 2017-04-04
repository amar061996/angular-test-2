var myApp=angular
	.module("myModule",[])
	.controller("myController",function($scope,$http,$log){

	// $scope.message="My message";

	var employees=[

	{name :"Amar Prakash",dateOfBirth: new Date("November 6 1996"), gender:1,salary:55000.755,city:"Bangalore"},
	{name :"Ashish Chauhan",dateOfBirth: new Date("November 7 1995"), gender:2,salary:53000.765,city:"Lucknow"},
	{name :"Archit Joshi",dateOfBirth: new Date("November 8 1995"), gender:3,salary:51000.555,city:"Bhilwara"},
	{name :"Ayush Gupta",dateOfBirth: new Date("November 9 1996"), gender:2,salary:56000.355,city:"Gwalior"},
	{name :"Sagar Sharma",dateOfBirth: new Date("November 10 1996"), gender:1,salary:52000.155,city:"Agra"}

	];
	$http.get("/json/data.json")
	.then(function(response){
		$scope.employees=response.data;
		$log.info(response);
	});
	
	$scope.selectView='EmployeeTable.html'


});
