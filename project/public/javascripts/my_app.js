
angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {

    $scope.highScore = localStorage.getItem("jsSnakeHighScore");

    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
          console.log(data);
          $scope.user = data;
          $scope.error = "";
    })
    .error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);
