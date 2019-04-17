app.controller("practice_lvl_ctrl", ($scope, $rootScope, $location) => {
  $rootScope.lvl_less = $rootScope.levels[current_level - 1].options[8];
  console.log($rootScope.lvl_less, "lvl_less")
  $rootScope.simvol = $rootScope.levels[current_level - 1].options[4];

  function n1_n2_kratne() {
    if (lvl_kratne.length == 1) {
      $rootScope.number[0] = Kratne($rootScope.number[0], lvl_kratne[0])
      $rootScope.number[1] = Kratne($rootScope.number[1], lvl_kratne[0])
      console.log('lvl_kratne.length== 1')
    }
    if (lvl_kratne.length > 1) {
      console.log('lvl_kratne.length > 1')
      $rootScope.number[1] = lvl_kratne_arr;
      $rootScope.number[0] = Kratne($rootScope.number[0], lvl_kratne_arr)
    }
    console.log(lvl_kratne[0])
  }
  setTimeout(() => {}, 1000)
  lvl_kratne = $rootScope.levels[current_level - 1].options[6];
  lvl_kratne_arr = randominrange(lvl_kratne[0], lvl_kratne[1])
  var changeNSR_practice = () => {
    lvl_kratne_arr = randominrange(lvl_kratne[0], lvl_kratne[1])
    $rootScope.simvol = $rootScope.levels[current_level - 1].options[4];
    rand_simvol = randominrange(0, $rootScope.simvol.length - 1);
    $rootScope.number = changeNum($rootScope.levels[current_level - 1].options[0], $rootScope.levels[current_level - 1].options[1], $rootScope.levels[current_level - 1].options[2], $rootScope.levels[current_level - 1].options[3]);
    if ($rootScope.simvol[rand_simvol] == '+') {
      $rootScope.simvol = '+';
      if (lvl_kratne[0] != null) {
        n1_n2_kratne()
      }
    }
    if ($rootScope.simvol[rand_simvol] == '-') {
      if (lvl_kratne[0] != null) {
        n1_n2_kratne()
      }
      $rootScope.simvol = '-';
    }
    if ($rootScope.simvol[rand_simvol] == '*') {
      $rootScope.simvol = '*';
      if (lvl_kratne[0] != null) {
        $rootScope.number[1] = Kratne($rootScope.number[1], lvl_kratne[0])
      }
    }
    if ($rootScope.simvol[rand_simvol] == '/') {
      $rootScope.simvol = '/';
      n1_n2_kratne()
    }
    $rootScope.define_result = define_result($rootScope.number[0], $rootScope.number[1], $rootScope.simvol);
    console.log($rootScope.define_result.toString().length)
    console.log($rootScope.define_result, " RESULT")
  }
  changeNSR_practice();
  var a5 = $rootScope.number[0];
  var a6 = $rootScope.number[1];
  $scope.false_practice = false_practice;
  $("#result2").keyup((el) => {
    clearTimeout(clearIfPress2);
    clearIfPress2 = setTimeout(() => {
      var a5 = $rootScope.number[0];
      var a6 = $rootScope.number[1];
      if ($scope.calc_result_practice == $rootScope.define_result) {
        $scope.$apply(() => {
          $scope.isOk = true
        });
        setTimeout(() => {
          $scope.$apply(() => {
            $scope.isOk = null
          });
        }, 800)
        playAudio('wav/enter_ok.flac', av_s);
        $rootScope.$apply(() => {
          $rootScope.current_progress = $rootScope.current_progress + 1;
          changeNSR_practice();
        })
        var a7 = $rootScope.number[0];
        var a8 = $rootScope.number[1];
        if (a5 == a7 && a6 == a8) {
          changeNSR_practice();
        }
        $scope.calc_result_practice = null;
        if ($rootScope.current_progress >= $rootScope.count_operations) {
          $rootScope.$apply(() => {
            $location.path("/result-practice/" + $rootScope.current_level);
          })
        }
      } else if ($scope.calc_result_practice == '' || $scope.calc_result_practice == null || $scope.calc_result_practice == undefined) {
        $scope.$apply(() => {
          $scope.isOk = null
        });
        console.log($scope.calc_result_practice)
      } else {
        $scope.false_practice = $scope.false_practice + 1;
        console.log($scope.false_practice)
        playAudio('wav/enter_no.flac', av_s);
        $scope.$apply(() => {
          $scope.isOk = false
        })
        setTimeout(() => {
          $scope.$apply(() => {
            $scope.isOk = null
          });
        }, 800)
      }
    }, 500)
  })
})
