// app.controller("upgrade", ($scope, $rootScope) => {
//   if (storage.getItem('skill') == undefined) {
//     $scope.skill = 1;
//     $rootScope.skill = 1;
//   $scope.hint_cost = ($scope.skill * 20);
//   } else {
//     $rootScope.skill = storage.getItem('skill');
//     $scope.skill = storage.getItem('skill');
//     $scope.hint_cost = ($scope.skill * 20) ;
//   }
//
//   if ($scope.skill == 14) {
//     $scope.end = "Congratulations! You End!"
//   }
//   $scope.upgrade = () => {
//
//     if ($scope.skill == 14) {
//       $scope.end = "Congratulations! You End!"
//     }
//
//     var notzero = $rootScope.all_points - $scope.hint_cost;
//     if ($rootScope.all_points >= $scope.hint_cost && $scope.skill < 14 && notzero >= 0) {
//       $scope.upgrade_animation = true;
//       setTimeout(() => {
//         $scope.upgrade_animation = false;
//         console.log($scope.upgrade_animation);
//         $scope.$apply()
//       }, 2000)
//       console.log($scope.upgrade_animation);
//
//       $scope.skill++;
//         $rootScope.skill = $scope.skill;
//       $rootScope.all_points = $rootScope.all_points - $scope.hint_cost;
//       $scope.ResInput = $rootScope.define_result;
//       storage.setItem('skill', $scope.skill);
//         $scope.hint_cost = (storage.getItem('skill') * 20);
//       storage.setItem('points', $rootScope.all_points)
//     } else {
//       $scope.notpoints = true;
//       $scope.buy()
//     }
//   }
//
// })
