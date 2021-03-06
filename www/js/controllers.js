angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DashboardsCtrl', function($scope) {
  $scope.dashboards = [
    { title: 'Expenses per Category', id: 1 },
    { title: 'Expenses per Month', id: 2 },
    { title: 'Expenses per Person', id: 3 },
    { title: 'Expenses vs Budget', id: 4 }
  ];
})

.controller('DashboardCtrl', function($scope, $stateParams) {
})

.controller('ExpensesCtrl', function($scope, $log, $firebaseArray) {

   var CONTROLLER_ID = 'ExpensesCtrl';

    $scope.addExpense = addExpense;
    $scope.newExpense = {};
    $scope.editExpense = editExpense;
    $scope.deleteExpense = deleteExpense;

    function activate() {

      $log.debug(CONTROLLER_ID + " activated");

      var ref = new Firebase("https://whopaid.firebaseio.com/expenses");

      $scope.expenses = $firebaseArray(ref);

      var ref2 = new Firebase("https://whopaid.firebaseio.com/budgets");
      var ref3 = new Firebase("https://whopaid.firebaseio.com/users");

      $scope.budgetCategories = $firebaseArray(ref2);
      $scope.users = $firebaseArray(ref3);

      // var now = new Date();
      // $scope.newExpense.date = now.toDateString();
      // $scope.newExpense.amount = "$5.00";
      // $scope.newExpense.description = "Coffee";
      // $scope.newExpense.budgetCategory = "Food";
      // $scope.newExpense.paidBy = "Jo";
      // $scope.expenses.$add($scope.newExpense);
    }

    activate();

    function addExpense() {
      // var now = new Date();
      // $scope.newExpense.date = now.toDateString();
      var day = new Date();
      $scope.newExpense.date = day.toDateString();
      $scope.expenses.$add($scope.newExpense);
      $scope.newExpense = {};
    }

    function editExpense() {

    }

    function deleteExpense(id) {
      $scope.expenses.$remove(id);
    }
})

.controller('BudgetCtrl', function($scope, $log, $firebaseArray) {

  var CONTROLLER_ID = "BudgetCtrl";
  var budgetCategoryCounter = 0;

  $scope.addCategory = addCategory;
  $scope.newCategory = {};
  $scope.addUser = addUser;
  $scope.newUser = {};
  $scope.deleteCategory = deleteCategory;
  $scope.deleteUser = deleteUser;

  function activate() {

    $log.debug(CONTROLLER_ID + " activated");

    var ref = new Firebase("https://whopaid.firebaseio.com/budgets");
    var ref2 = new Firebase("https://whopaid.firebaseio.com/users");

    $scope.budgetCategories = $firebaseArray(ref);
    $scope.users = $firebaseArray(ref2);

  }

  activate();

  function addCategory() {
    $scope.budgetCategories.$add($scope.newCategory);
    $scope.newCategory = {};
    budgetCategoryCounter++;
  }

  function addUser() {
    $scope.users.$add($scope.newUser);
    $scope.newUser = {};
  }

  function deleteCategory(id) {
      $scope.budgetCategories.$remove(id);
    }

  function deleteUser(id) {
      $scope.users.$remove(id);
    }

})


.controller('OverviewCtrl', function($scope, $log, $firebaseArray) {

  var CONTROLLER_ID = 'OverviewCtrl';

  var ref = new Firebase("https://whopaid.firebaseio.com/expenses");
  var ref2 = new Firebase("https://whopaid.firebaseio.com/budgets");
  var ref3 = new Firebase("https://whopaid.firebaseio.com/users");

  $scope.budgetCategories = $firebaseArray(ref2);
  $scope.users = $firebaseArray(ref3);
  $scope.expenses = $firebaseArray(ref);
  $scope.currentMonthAsString = currentMonthAsString;
  $scope.filterByCurrentMonth = filterByCurrentMonth;
  $scope.filterByMonth = filterByMonth;
  $scope.monthAsSubstring = monthAsSubstring;
  $scope.filterBySubstring = filterBySubstring;
  $scope.getTotal = function() {
    var total = 0;
    for (var i = 0; i < $scope.expenses.length; i++) {
      total += parseInt($scope.expenses[i].amount);
      console.log($scope.expenses[i].amount);
    }
    return total;
  }
  // $scope.$watch('expenses', function(newValue, oldValue) {
  //   if (newValue.length !== oldValue.length) {
  //     console.log("Expenses changed", $scope.expenses);
  //   }
  //   console.log($scope.expenses);
  // });

  function activate() {
    var CONTROLLER_ID = "OverviewCtrl";
    $log.debug(CONTROLLER_ID + " activated");
    // $log.debug(currentMonthSubstring());
  }

  activate();

  function getMonthFromIndex(index) {
    var monthNames = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December'
    }
    return monthNames[index];
  }

  function currentMonthAsString() {
    var now = new Date();
    var month = now.getMonth();
    return getMonthFromIndex(month);
  }

  function monthAsSubstring(index){
    var monthNames = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec'
    }
    return monthNames[index];
  }


  function filterBySubstring() {
   if (filterByCurrentMonth()) {
    var now = new Date();
    var currentMonth = now.getMonth();
    return monthAsSubstring(currentMonth);
   }
  }


  function filterByMonth(month){
   return function(item){
      var itemAsDateObject = new Date();
      return itemAsDateObject.getMonth() == month;
    };
  }

  function filterByCurrentMonth(){
    var now = new Date();
    var currentMonth = now.getMonth();
    var f = filterByMonth(currentMonth);
    return function(item) {
      // console.log("current month " + currentMonth);
      // console.log("item and function of item " + item, f(item));
      return f(item);
    }
  }

  // function filterByBudgetCategory(ref) {
  //   for (var i = 0; i < )
  //     if (ref.$keyAt(ref[i])
  // }

  //log an object with all the contents of the ref array to the console
  // ref.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  // }, function (errorObject) {
  //   console.log("The read failed: " + errorObject.code);
  // });

})
