angular.module('app', ['ngRoute', 'ngResource'])

// Services
   .factory('Complaints', ['$resource', function($resource){
    return $resource('/complaints/:id', null, {
      'update': { method:'PUT' }
    });
  }])


// Controller
  .controller('appController', [ '$scope', 'Complaints', function($scope, Complaints) {
    $scope.complaints = Complaints.query();
  }])

  .controller('newController', [ '$scope', 'Complaints', function($scope, Complaints) {
    $scope.newComplaint = {};

    $scope.save = function() {
      if(!$scope.newComplaint || $scope.newComplaint.length <1) return;

      var complaint = new Complaints({

      });

      complaint.$save(function() {
        $scope.complaints.push(complaint);
        $scope.newComplaint = {};
      })
    }

  }])

// Routes
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/login.html',
        controller: 'appController'
      })

      .when('/complaints', {
        templateUrl: '/complaints.html',
        controller: 'appController'
      })

      .when('/new', {
        templateUrl: '/new-complaint.html',
        controller: 'appController'
      })

      .when('/:id', {
        templateUrl: '',
        controller: ''
      });
  }]);
