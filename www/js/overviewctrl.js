angular.module('starter.overviewctrl', [])

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


  function activate() {
    var CONTROLLER_ID = "OverviewCtrl";
    $log.debug(CONTROLLER_ID + " activated");
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
