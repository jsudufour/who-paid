(function() {
	function ExpenseData() {
		var ExpenseData = {};

		var ref = new Firebase("https://whopaid.firebaseio.com/expenses");
		var ref1 = new Firebase("https://whopaid.firebaseio.com/users");
		var ref2 = new Firebase("https://whopaid.firebaseio.com/budgets");

		var allExpenses = $firebaseArray(ref);
		var users = $firebaseArray(ref1);
		var bugetCategories = $firebaseArray(ref2);
		var currentMonthExpenses = [];

		ExpenseData.getCurrentMonthExpenses = function() {
			//get only current month's expenses from firebase
			var now = new Date();
			var currentMonth = now.getMonth();
			var allExpensesArray = $firebase(ref).$asArray();
			allExpensesArray.$loaded(function(allExpensesArray) {
				for (var i = 0; i < allExpensesArray.length; i++) {
					if (allExpensesArray[i].date.getMonth() == currentMonth) {
						currentMonthExpenses.push(allExpensesArray[i]);
				}
			});
		};

		ExpenseData.getTotalMonthlyExpenses = function() {
			var monthlySum = 0;
			for (var i = 0; i < currentMonthExpenses.length; i++) {
				monthlySum += currentMonthExpenses[i].amount; 
			}
			return monthlySum;
		};



		ExpenseData.getUserExpenses = function() {
			//data structure used: 2D array
			//create an array, totalUserExpenses, same size as users array
			//each users index will hold another array with each budget category
			//get users as an array
			//get expenses in an array
			//loop through expenses array
			//if expense.paidBy == userArray[i]
			// && expense.date == currentMonth
			// && expense.budgetCategory == userArray[i][j]
			//sum and store in first index of totalUserExpenses
			//need a variable to hold each user's sum
			//get individual expenses
			//sum if user is the same

			//create expense 
			

			
		};



		return ExpenseData;
	}

	angular
		.module('')
		.factory('ExpenseData', ExpenseData);
})();