app.controller("upgrade", ($scope,$rootScope) => {
  if (storage.getItem('skill') == undefined) {
      $scope.skill = 1;
$scope.hint_cost =  10;
  }
  else {
    $scope.skill = storage.getItem('skill');
    $scope.hint_cost =  ($scope.skill * 10);
  }

  if ( $scope.skill == 14) {
  $scope.end = "Congratulations! You End!"
  }
  $scope.upgrade = ()=>{
    if ( $scope.skill == 14) {
    $scope.end = "Congratulations! You End!"
    }
console.log($scope.skill , '$scope.skill');

      if ($rootScope.all_points >= $scope.hint_cost && $scope.skill < 14) {

          $scope.hint_cost =  ($scope.skill * 20);
          $scope.skill++;
        $rootScope.all_points = $rootScope.all_points - $scope.hint_cost;
        $scope.ResInput = $rootScope.define_result;
        storage.setItem('skill', $scope.skill)
        storage.setItem('points', $rootScope.all_points)
      }

       else {
        $scope.notpoints = true;
        $scope.buy = !$scope.buy
      }
    }

})
