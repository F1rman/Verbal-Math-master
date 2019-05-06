app.controller("compain_lvl_ctrl", function($scope, $rootScope, $location) {
  // змінні
  var time_total = $rootScope.levels[current_level - 1].options[5];
  lvl_kratne = $rootScope.levels[current_level - 1].options[6];
  lvl_kratne_arr = randominrange(lvl_kratne[0], lvl_kratne[1])
  $scope.skip_cost = 20;
$rootScope.skip = (lvl)=>{
    $scope.skip_cost = 20;
    if ($rootScope.all_points >= $scope.skip_cost) {
      $rootScope.passlvl = $rootScope.passlvl + 1;

      $rootScope.all_points = $rootScope.all_points - $scope.skip_cost;
      storage.setItem('points', $rootScope.all_points)
      storage.setItem('passlvl', $rootScope.passlvl);
      storage.setItem('level['+lvl+']','skiped');
      $location.path("/result-compain/" + $rootScope.current_level);
    } else {
      $scope.skip1 = !$scope.skip1;
      $rootScope.buy();

    }
}

  function swap() {
    if ($rootScope.number[0] < $rootScope.number[1]) {
      var forAtime;
      forAtime = $rootScope.number[0];
      $rootScope.number[0] = $rootScope.number[1];
      $rootScope.number[1] = forAtime;
    }
  }

  function n1_n2_kratne() {
    if (lvl_kratne.length == 1) {
      $rootScope.number[0] = Kratne($rootScope.number[0], lvl_kratne[0])
      $rootScope.number[1] = Kratne($rootScope.number[1], lvl_kratne[0])
      swap()
    }
    if (lvl_kratne.length > 1) {
      $rootScope.number[1] = lvl_kratne_arr;
      $rootScope.number[0] = Kratne($rootScope.number[0], lvl_kratne_arr)
      swap()
    }
  }


  // Функція рандомить символ з левела
  // Функція рандомить числа
  // Функція розраховує результат
  var changeNSR_compain = () => {
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


    $scope.hint_result = "";
      $scope.hint_cost = 2;
    $scope.show_hint = function() {
      $scope.delete();
      $scope.hint_cost = 2;
      if ($rootScope.all_points >= $scope.hint_cost) {
        $rootScope.all_points = $rootScope.all_points - $scope.hint_cost;
        $rootScope.ResInput = $rootScope.define_result;
        storage.setItem('points', $rootScope.all_points)
      } else {
        $scope.delete()
        $scope.notpoints = true;
      }
    }
  }

  changeNSR_compain();
  var a1 = $rootScope.number[0];
  var a2 = $rootScope.number[1];
  $scope.$watch('ResInput', () => {
    clearTimeout(clearIfPress)
    clearIfPress = setTimeout(() => {
      if (String($rootScope.ResInput) == String($rootScope.define_result)) {
        $scope.$apply(() => {
          clearTimeout(clearIfPress)
          $rootScope.ResInput = '';
          $scope.isOk = true

          var a1 = $rootScope.number[0];
          var a2 = $rootScope.number[1];

          playAudio('wav/enter_ok.flac', av_s);

          time_left_total += time_left;
          t = time_left_total;
          storage.setItem('time_left_total', time_left_total)
          $rootScope.time_left_total = time_left_total;
          clearTimeout(set_progress)
          progress(time_total, time_total, $('.timebar'), $('.timebar_inside'));
          $rootScope.current_progress = $rootScope.current_progress + 1;
          changeNSR_compain();
          var a3 = $rootScope.number[0];
          var a4 = $rootScope.number[1];
          if (a1 == a3 && a2 == a4) {
            changeNSR_compain();
          }
        })
        if ($rootScope.current_progress >= $rootScope.count_operations) {
          playAudio('wav/win.wav', av_s)
          $rootScope.$apply(() => {
            $location.path("/result-compain/" + $rootScope.current_level);
          })
        }
      } else if ($rootScope.ResInput == '' || $rootScope.ResInput == null || $rootScope.ResInput == undefined) {
        $scope.$apply(() => {
          $scope.isOk = null;
        });
      } else {
        if ($rootScope.define_result.toString().length <= $rootScope.ResInput.length) {
          $scope.isOk = false;
          $scope.delete()
          $scope.$apply(() => {
            $rootScope.ResInput = '';
            playAudio('wav/enter_no.flac', av_s);
          });
        }

        $scope.isOk = null;


      }
    }, 500)
  })

  function progress(timeleft, timetotal, $element, $element2) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find($element2).animate({
      width: progressBarWidth
    }, 600).html('<p class="time_left">' + timeleft  + 's</p>');
    time_left = timeleft;
    if (timeleft > 0) {
      set_progress = setTimeout(() => {
        progress(timeleft - 1, timetotal, $element, $element2);
      }, 1000);
    } else {
      $rootScope.$apply(() => {
        $location.path("/result-compain/" + $rootScope.current_level);
      })
      playAudio('wav/win.wav', av_s)
    }
  };
  $(document).ready(() => {
    function endCountdown() {
      $('.vidlik_wrapper').css('display', 'none');
      progress(time_total, time_total, $('.timebar'), $('.timebar_inside'));
    }

    function handleTimer() {
      if (count <= 0) {
        clearInterval(timer);
        endCountdown();
      } else {
        $('.vidlik').html(count);
        count--;
      }
    }
    handleTimer()
    var count = 2;
    var timer = setInterval(function() {
      handleTimer(count);
    }, 1000);
  })
});
