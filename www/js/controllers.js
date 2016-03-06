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

    function activate() {

      $log.debug(CONTROLLER_ID + " activated");

      var ref = new Firebase("https://whopaid.firebaseio.com/expenses");
      
      $scope.expenses = $firebaseArray(ref);

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
      var now = new Date();
      $scope.newExpense.date = now.toDateString();
      $scope.expenses.$add($scope.newExpense);
      $scope.newExpense = {};
    }
})

.controller('BudgetCtrl', function($scope, $log, $firebaseArray) {

  var CONTROLLER_ID = "BudgetCtrl";

  $scope.addCategory = addCategory;
  $scope.newCategory = {};

  function activate() {

    $log.debug(CONTROLLER_ID + " activated");

    var ref = new Firebase("https://whopaid.firebaseio.com/budgets");

    $scope.budgetCategories = $firebaseArray(ref);

  }

  activate();

  function addCategory() {

    $scope.budgetCategories.$add($scope.newCategory);
    $scope.newCategory = {};
  }

});






