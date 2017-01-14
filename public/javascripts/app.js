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

    // init dropdowns
    $scope.hostels = ["Gajjar Bhavan", "Bhabha Bhavan", "Nehru Bhavan", "Tagore Bhavan", "Swami Vivekanand Bhavan", "Mother Teresa Bhavan"];
    $scope.categories = ["Electrical", "Plumbing", "Internet/Wifi", "Carpentry/Fogging", "Gas/Gizzer", "Mesh/Sports"];


    $scope.save = function() {
      if (!$scope.newComplaint || $scope.newComplaint.length < 1) return;
      var complaint = new Complaints({
        category: $scope.newComplaint.category,
        description: $scope.newComplaint.description,
        hostel: $scope.newComplaint.hostel,
        name: $scope.newComplaint.name,
        room: $scope.newComplaint.room,
        date: new Date(),
        status: 'Complaint recorded'
      });

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

