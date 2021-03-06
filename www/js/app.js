// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services'])
angular.module('starter', ['ionic', 'firebase', 'starter.controllers'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.overview', {
    url: '/overview',
    views: {
      'menuContent': {
        templateUrl: 'templates/overview.html',
        controller: 'OverviewCtrl'
      }
    }
  })

  .state('app.expenses', {
    url: '/expenses',
    views: {
      'menuContent': {
        templateUrl: 'templates/expenses.html',
        controller: 'ExpensesCtrl'
      }
    }
  })

  .state('app.budget', {
      url: '/budget',
      views: {
        'menuContent': {
          templateUrl: 'templates/budget.html',
          controller: 'BudgetCtrl'
        }
      }
    })

    .state('app.dashboards', {
      url: '/dashboards',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboards.html',
          controller: 'DashboardsCtrl'
        }
      }
    })

  .state('app.dashboard', {
    url: '/dashboards/:dashboardId',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/overview');
});
