app.controller("practice_lvl_ctrl", ($scope, $rootScope, $location) => {
      $rootScope.lvl_less = $rootScope.levels[current_level - 1].options[8];
      lvl_kratne = $rootScope.levels[current_level - 1].options[6];
      lvl_kratne_arr = randominrange(lvl_kratne[0], lvl_kratne[1])

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

      }


      changeNSR_practice();
      var a5 = $rootScope.number[0];
      var a6 = $rootScope.number[1];


      $scope.$watch('ResInput', () => {
        clearTimeout(clearIfPress2);
        clearIfPress2 = setTimeout(() => {
          if (String($rootScope.ResInput) == String($rootScope.define_result)) {
            $scope.$apply(() => {
                clearTimeout(clearIfPress)
                $rootScope.ResInput = '';
                $scope.isOk = true

                var a5 = $rootScope.number[0];
                var a6 = $rootScope.number[1];
                playAudio('wav/enter_ok.flac', av_s);
                $rootScope.current_progress = $rootScope.current_progress + 1;
                changeNSR_practice();
                var a7 = $rootScope.number[0];
                var a8 = $rootScope.number[1];
                if (a5 == a7 && a6 == a8) {
                  changeNSR_practice();
                }
})
                if ($rootScope.current_progress >= $rootScope.count_operations) {
                  playAudio('wav/win.wav', av_s)
                  $rootScope.$apply(() => {
                    $location.path("/result-practice/" + $rootScope.current_level);
                  })
                }
            }   else if ($rootScope.ResInput == '' || $rootScope.ResInput == null || $rootScope.ResInput == undefined) {
                $scope.$apply(() => {
                  $scope.isOk = null
                })
              } else {
                if ($rootScope.define_result.toString().length <= $rootScope.ResInput.length) {
                  $scope.isOk = false;
                  $scope.delete()
                  $scope.$apply(() => {
                    $rootScope.ResInput = '';
                    playAudio('wav/enter_no.flac', av_s);
                  });
}

                  $scope.isOk = null
              }
            }, 500)
        })
      })
