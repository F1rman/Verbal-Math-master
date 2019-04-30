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
    $scope.$watch('all_volume_audio', () => {
      $rootScope.all_volume_audio = $scope.all_volume_audio;
      $('.input_inside1').css('background', 'linear-gradient(to right, rgba(0,173,233,1)  ' + $rootScope.all_volume_audio + '%,rgba(0,173,233,0) ' + $rootScope.all_volume_audio + '%,rgba(255,255,255,0) ')
    })
  }
  change_volume_audio();
  var notfirst = true;
  var check_volume;
  var change_volume_sounds = () => {
    $scope.$watch('all_volume_sounds', function(newValue, oldValue){
      if (newValue !== oldValue) {
        clearTimeout(check_volume)
        check_volume = setTimeout(() => {
              playAudio('wav/click2.wav', av_s);
        }, 100)
  }

      $rootScope.all_volume_sounds = $scope.all_volume_sounds;
      $('.input_inside2').css('background', 'linear-gradient(to right, rgba(0,173,233,1)  ' + $rootScope.all_volume_sounds + '%,rgba(0,173,233,0) ' + $rootScope.all_volume_sounds + '%,rgba(255,255,255,0) ')
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
