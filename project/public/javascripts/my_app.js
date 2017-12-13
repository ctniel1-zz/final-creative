
angular.module('myApp', []).
  controller('myController', ['$scope', '$http', function($scope, $http) {
    $http.get('/user/profile')
      .success(function(data, status, headers, config) {
        $scope.user = data;
        $scope.error = "";
        updateHS();      
      })
      .error(function(data, status, headers, config) {
        $scope.user = {};
        $scope.error = data;
      });

      $scope.updateHS = updateHS;

      function updateHS(highScore)
      {
        var localHighScore = localStorage.getItem('jsSnakeHighScore');
        if (localHighScore > $scope.user.high_score) {
          $http.post('/users/score', {high_score: localHighScore});    
        }
      }

      $scope.logout = logout;

      function logout()
      {
        localStorage.clear();
        window.location.href="/logout";
      }


  }]);
