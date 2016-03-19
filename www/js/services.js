// (function() {
// 	function ExpenseData() {
// 		var ExpenseData = {};

// 		var ref = new Firebase("https://whopaid.firebaseio.com/expenses");
// 		var ref1 = new Firebase("https://whopaid.firebaseio.com/users");
// 		var ref2 = new Firebase("https://whopaid.firebaseio.com/budgets");

// 		var allExpenses = $firebaseArray(ref);
// 		var users = $firebaseArray(ref1);
// 		var bugetCategories = $firebaseArray(ref2);


// 		ExpenseData.getTotalMonthlyExpenses = function() {
// 			var monthlySum = 0;
// 			for (var i = 0; i < currentMonthExpenses.length; i++) {
// 				monthlySum += currentMonthExpenses[i].amount; 
// 			}
// 			return monthlySum;
// 		};

// 		ExpenseData.getTotalMonthlyExpensesPerUser = function(user) {
// 			var sum = 0;
// 			for (var i = 0; i < sumPerUser.length; i++) {
// 				if 
// 			}
// 		}


// 		ExpenseData.getTotalExpensesPerCategory = function(category) {

// 		};


// 		ExpenseData.getUserExpensesPerCategory = function(user) {
// 			var expensesPerCategory = [];
// 			var categoriesArray = $firebase(ref2).$asArray();
// 			categoriesArray.$loaded(function(categoriesArray) {
// 				for (var i = 0; i < categoriesArray.length; i++) {

// 				}
// 			});
// 		};

// 		ExpenseData.getUsers = function() {
// 			return users;
// 		}
	



// 		return ExpenseData;
// 	}

// 	angular
// 		.module('starter.services', [])
// 		.factory('ExpenseData', ExpenseData);
// })();