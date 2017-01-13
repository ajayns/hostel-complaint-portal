var app = angular.module('app', ['ngRoute', 'ngResource']);

// Services
app.service('Complaints', function ($resource) {
    return $resource('/complaints/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  })

// Controller
app.controller('appController', function ($scope, Complaints) {
    $scope.complaints = Complaints.query();
    $scope.newComplaint = {};


    $scope.hostels = ["Gajjar", "Bhabha"];
    $scope.categories = ["Electricity", "Water"];

    $scope.save = function() {
      if (!$scope.newComplaint || $scope.newComplaint.length < 1) return;
      $scope.newComplaint.date = new Date();                                            // Initialize date
      $scope.newComplaint.status= 'Complaint recorded';
      var complaint = new Complaints({});
      complaint.$save(function () {
        $scope.complaints.push(complaint);
        $scope.clear();
      })
    }

    $scope.clear = function() {
      $scope.newComplaint = {};
    }
  })

// Routes
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/login.html'
    })
    .when('/complaints', {
      templateUrl: '/complaints.html'
    })
    .when('/new', {
    templateUrl: '/new-complaint.html'
    })
});

