app.controller("practice_lvl_result_ctrl", ($scope, $rootScope) => {
  console.log($rootScope.points, "$rootScope.points", $rootScope.for_next_lvl, '$rootScope.for_next_lvl', $rootScope.current_level, "$rootScope.current_level", $rootScope.total_points, '$rootScope.total_points')
  if ($rootScope.points == undefined) {
    $rootScope.points = 0;
  } else {
    $rootScope.points = Math.round(Number($rootScope.current_level) / 2);
  }
  $rootScope.all_points = $rootScope.points + $rootScope.total_points;
  getLevel(points, $rootScope.all_points);
  // $rootScope.for_next_lvl = for_next_lvl;
  if ($rootScope.current_progress < $rootScope.count_operations) {
    $rootScope.points = 0;
  } else {
    storage.setItem('points', $rootScope.all_points);
  }
  setTimeout(() => {
    $rootScope.current_progress = 0;
    time_left_total = 0;
  }, 1000)
})
