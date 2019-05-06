
app.controller("result_compain_lvl_ctrl", ($scope, $rootScope, $location) => {
  console.log($rootScope.lvl_less = $rootScope.levels[current_level - 1].options[8]);
  if ($rootScope.current_progress < $rootScope.count_operations) {
    console.log('LOSE');
    if ($rootScope.earn_points == undefined || $rootScope.earn_points != 0) {
      $rootScope.earn_points = 0;
    }
    if ($rootScope.time_left_total == undefined) {
      $rootScope.time_left_total = 0;
    }
    if ($rootScope.points == undefined) {
      $rootScope.points = 0;
      $rootScope.all_points = $rootScope.points + Number(storage.getItem('points'));
      getLevel(points, $rootScope.all_points);
      $rootScope.for_next_lvl = for_next_lvl;
      console.log(  $rootScope.for_next_lvl);
    }
  } else {
      storage.removeItem('level['+$scope.current_level+']')
        $rootScope.checklvl_skiped();

    console.log($scope.current_level);
    if ($rootScope.time_left_stor == undefined) {
      $rootScope.time_left_stor = 0;
    }
    $rootScope.points = 3;
    p = $rootScope.points;
    storage.setItem('earn_points', p);
    $rootScope.earn_points = storage.getItem('earn_points')
    $rootScope.all_points = $rootScope.points + Number(storage.getItem('points'));
    getLevel(points, $rootScope.all_points);
    $rootScope.for_next_lvl = for_next_lvl;
    console.log(  $rootScope.for_next_lvl);
    var all_p = Number(storage.getItem('points'))
    console.log($rootScope.earn_points, 'points ', points)
    // Фікс при перезагрузці сторінки рузультат по Очках

    $scope.$on('$routeChangeStart', () => {
      storage.setItem('points', $rootScope.all_points)
    })
    if ($rootScope.passlvl + 1 == $scope.current_level) {
      $rootScope.passlvl = $rootScope.passlvl + 1;
      storage.setItem('passlvl', $rootScope.passlvl);
    }
  }
  if ($rootScope.earn_points == undefined) {
    $rootScope.earn_points = 0;
  }
  //     $rootScope.current_progress = 0;
  $rootScope.progress_of_lvl = $rootScope.current_progress;
  $rootScope.all_time_left = $rootScope.time_left_total
  storage.setItem('current_progress', $rootScope.current_progress)
  // storage.setItem('time_left_total',$rootScope.time_left_total)
  //     time_left_total = 0;
  //     $rootScope.time_left_total = 0;
  // }, 10)
  // console.log($rootScope.time_left_total, '$rootScope.time_left_total')
})
