app.controller("settings_ctrl", ($scope, $rootScope) => {
  // Налаштування звуку
  // Коли нажимаєш клавішу аудіо вкл


  // $('#audio_button').click(() => {
  //   if (av_a == 0) {
  //     if (fon_audio.paused) {
  //       fon_audio.play();
  //       storage.setItem('volume_audio', av_a)
  //     }
  //     console.log(av_a);
  //   } else {
  //     $scope.audio = $scope.audio
  //   }
  //   if (fon_audio.paused) {
  //     fon_audio.play();
  //     storage.setItem('volume_audio', av_a)
  //   } else {
  //     fon_audio.pause();
  //     storage.setItem('volume_audio', 0)
  //   }
  // })
  // $('#sounds_button').click(() => {
  //   if (av_s == 0) {
  //     av_s == 50;
  //   } else {
  //     $scope.sounds = $scope.sounds
  //   }
  //   if (Number($('#s_range').val()) / 100 == Number(av_s)) {
  //
  //   } else {}
  // })

  var change_volume_audio = () => {
      Number(storage.getItem('a_vol') == undefined) ?  $scope.a_vol = 50 :   $scope.a_vol = Number(storage.getItem('a_vol'));
    $scope.$watch('a_vol', () => {

      av_a = $scope.a_vol/100;
        fon_audio.volume = av_a;
      $rootScope.r_a_vol = $scope.a_vol;
        storage.setItem('a_vol', $scope.a_vol);
      $('.input_inside1').css('background', 'linear-gradient(to right, rgba(0,173,233,1)  ' + $rootScope.r_a_vol + '%,rgba(0,173,233,0) ' + $rootScope.r_a_vol + '%,rgba(255,255,255,0) ')
    })
  }

  change_volume_audio();
  var check_volume;
  var change_volume_sounds = () => {
    Number(storage.getItem('s_vol') == undefined) ?  $scope.s_vol = 50 :   $scope.s_vol = Number(storage.getItem('s_vol'));
    $scope.$watch('s_vol', function(newValue, oldValue){
      if (newValue !== oldValue) {
        clearTimeout(check_volume)
        check_volume = setTimeout(() => {
              playAudio('wav/click2.wav', av_s);
        }, 100)
  }
      av_s = $scope.s_vol/100;
      $rootScope.r_s_vol = $scope.s_vol;
      storage.setItem('s_vol', $scope.s_vol);
      $('.input_inside2').css('background', 'linear-gradient(to right, rgba(0,173,233,1)  ' + $rootScope.r_s_vol + '%,rgba(0,173,233,0) ' + $rootScope.r_s_vol + '%,rgba(255,255,255,0) ')
    })
  }
  change_volume_sounds();
  // Налаштування мови
  $scope.$watch('language', () => {
    $rootScope.language = $scope.language;
    if ($rootScope.language == undefined) {
      $rootScope.language = $rootScope.ua;
    }
    storage.setItem('language_stor', $rootScope.language);
  });
});
