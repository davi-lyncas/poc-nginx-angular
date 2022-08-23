var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/Login', { templateUrl: 'templates/login.html',
	                            controller: 'LoginController' })

      .when('/Home', { templateUrl: 'templates/home.html',
	                            controller: 'HomeController' })
	                            
      .otherwise({ redirectTo: '/Login' });

    $locationProvider.html5Mode({enabled: true, requireBase: true});
}]);

sampleApp.controller('LoginController', function($scope, $location, $window) {
	$scope.message = 'This is Login Screen';

  $scope.goToHome = function() {
    $location.url('/Home');
  };
  
  $scope.goToDashboard = function() {
    var urlToRedirect = 'http://localhost/Dashboard';
    $window.location.href = urlToRedirect;

    // var urlToRedirect = 'http://' + ($location.absUrl().split('/')[2]) + '/' + 'Dashboard';

    // console.log(urlToRedirect);
    // console.log($location.absUrl());
    // console.log($location.url);
    // console.log($window.location.href);

    // $window.location.href = urlToRedirect;
    // $window.location.reload(true);
    
  }
});

sampleApp.controller('HomeController', function($scope, $location) {
	$scope.message = 'This is the Legacy Home Screen';
  $scope.goToLogin = function() {
    $location.path('/Login');
  }
});

