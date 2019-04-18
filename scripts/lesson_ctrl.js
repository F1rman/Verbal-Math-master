app.controller("lesson", ($scope, $rootScope) => {

  if (storage.getItem('lessons') == undefined) {
    $scope.lessons = 2;
    $scope.lessons_cost = ($scope.lessons * 20);
  } else {
    $scope.lessons = storage.getItem('lessons');
    $scope.lessons_cost = ($scope.lessons * 20);
  }
  $scope.buy_lessons = () => {
    console.log($scope.lessons, '$scope.lessons');
    var notzero = $rootScope.all_points - $scope.lessons_cost;
    if ($rootScope.all_points >= $scope.lessons_cost && $scope.lessons < $rootScope.lesson.length && notzero >= 0) {


      $scope.lessons++;
      $rootScope.all_points = $rootScope.all_points - $scope.lessons_cost;
      storage.setItem('lessons', $scope.lessons)
        $scope.lessons_cost = ($scope.lessons * 20);
      storage.setItem('points', $rootScope.all_points)
    } else {
      $scope.notpoints = true;
      $scope.buy()
    }
  }
})
