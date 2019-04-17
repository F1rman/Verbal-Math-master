app.controller("lesson", ($scope,$rootScope) => {
  if (storage.getItem('lessons') == undefined) {
      $scope.lessons = 1;
$scope.lessons_cost =  10;
  }
  else {
    $scope.lessons = storage.getItem('lessons');
    $scope.lessons_cost =  ($scope.lessons * 10);
  }
  $scope.buy_lessons = ()=>{

console.log($scope.lessons , '$scope.lessons');

      if ($rootScope.all_points >= $scope.lessons_cost && $scope.lessons < $rootScope.lesson.length) {

          $scope.lessons_cost =  ($scope.lessons * 20);
          $scope.lessons++;
        $rootScope.all_points = $rootScope.all_points - $scope.lessons_cost;
        storage.setItem('lessons', $scope.lessons)
        storage.setItem('points', $rootScope.all_points)
      }

       else {
        $scope.notpoints = true;
        $scope.buy = !$scope.buy
      }
    }
})
