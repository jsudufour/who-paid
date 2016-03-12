(function() {
	function ExpenseData() {
		var ExpenseData = {};

		var ref = new Firebase("https://whopaid.firebaseio.com/expenses");
		var ref1 = new Firebase("https://whopaid.firebaseio.com/users");

		var allExpenses = $firebaseArray(ref);
		var users = $firebaseArray(ref1);


		ExpenseData.getTotalMonthlyExpenses = function() {
			var now = new Date();
			var currentMonth = now.getMonth();
			var monthlySum = 0;
			var allExpensesArray = $firebase(ref).$asArray();
			allExpensesArray.$loaded(function(allExpensesArray) {
				for (var i = 0; i < allExpensesArray.length; i++) {
					if (allExpensesArray[i].date.getMonth() == currentMonth) {
						monthlySum += allExpensesArray[i].amount; 
					}
				}
			});
			return monthlySum;
		};

		ExpenseData.getUserExpenses = function() {
			//need a variable to hold each user's sum
			//get individual expenses
			//sum if user is the same
			

			
		};



		return ExpenseData;
	}

	angular
		.module('')
		.factory('ExpenseData', ExpenseData);
})();