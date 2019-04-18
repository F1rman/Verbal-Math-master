var storage = window.localStorage;
// storage.removeItem() // Pass a key name to remove that key from storage.
// storage.setItem('key',val );
// storage.setItem('passlvl',16);
// storage.setItem('points',0 );
var d = new Date();
var day;
var current_progress = Number(storage.getItem('current_progress'));
var points = Number(storage.getItem('points'));
var lvl = Number(storage.getItem('lvl'));
var passlvl = Number(storage.getItem('passlvl'));
var volume_stor_sounds = Number(storage.getItem('volume_sounds'));
var volume_stor_audio = Number(storage.getItem('volume_audio'));
var language_stor = Number(storage.getItem('language_stor'));
var set_progress;
var clearIfPress;
var clearIfPress2;
var value;
var rand_simvol;
var time_left;
var time_left_total = 0;
var audio_volume_val;
var audio_volume;
var av_a = 0.5;
var av_s = 0.5;
var t;
var lvl_kratne;
var lvl_kratne_arr;
var p;
var false_practice = 0;
var t_stor;
var fon_audio = new Audio('wav/fon.mp3');
var loh_rand = randominrange(130, 190);
if (storage.getItem('loh_rand') == undefined) {
  storage.setItem('loh_rand', loh_rand)
} else {
  loh_rand = storage.getItem('loh_rand');
}
// ANGULAR
var app = angular.module("Routing", ["ngRoute", 'ngAnimate']);
//Routing
app.config(($routeProvider) => {
  $routeProvider.when("/", {
    templateUrl: "home.html",
  }).when("/compain", {
    templateUrl: "compain.html",
  }).when("/practice", {
    templateUrl: "practice.html",
  }).when("/lessons", {
    templateUrl: "lessons.html"
  }).when("/info", {
    templateUrl: "info.html"
  }).when("/settings", {
    templateUrl: "settings.html"
  }).when("/compain-lvl/:level", {
    templateUrl: "compain-lvl.html",
  }).when("/result-compain/:level", {
    templateUrl: "result-compain.html"
  }).when("/practice-lvl/:level", {
    templateUrl: "practice-lvl.html",
  }).when("/result-practice/:level", {
    templateUrl: "result-practice.html"
  }).when("/denied/:level", {
    templateUrl: "denied.html"
  }).when("/historys", {
    templateUrl: "historys.html"
  }).when("/lessons-level/:level", {
    templateUrl: "lessons-level.html"
  }).when("/upgrade", {
    templateUrl: "upgrade.html"
  }).otherwise({
    redirectTo: '/'
  });
});

var firsload = true;
app.run(($rootScope) => {
    console.log($rootScope.buyed);
  $rootScope.buy = ()=>{
      $rootScope.buyed = !$rootScope.buyed
      console.log($rootScope.buyed);
  }

  if ($rootScope.skill == undefined) {
$rootScope.skill = 1;
  }
  else {
    $rootScope.skill = storage.getItem('skill');
  }
  console.log(points);
  if ($rootScope.all_points == undefined) {
    $rootScope.all_points = points;
  }
  if (storage.getItem('volume_audio') == undefined || storage.getItem('volume_sounds') == undefined) {
  volume_stor_audio = 50;
    volume_stor_sounds = 50;
  } else {
    $rootScope.all_volume_audio = volume_stor_audio;
    $rootScope.all_volume_sounds = volume_stor_sounds;
  }
  // при зміні аудіо повзунком
  $rootScope.$watch('all_volume_audio', () => {
    av_a = $rootScope.all_volume_audio / 100;
    $rootScope.r_av_a = av_a * 100;
    fon_audio.volume = $rootScope.r_av_a / 100;
    storage.setItem('volume_audio', $rootScope.r_av_a);
  })
  // при зміні звуку повзунком
  $rootScope.$watch('all_volume_sounds', () => {
    av_s = $rootScope.all_volume_sounds / 100;
    $rootScope.r_av_s = av_s * 100;
    storage.setItem('volume_sounds', $rootScope.r_av_s);
  })
  fon_audio.play().catch(() => {
    console.log('you need access to musik')
  });
  fon_audio.loop = 'true';
  fon_audio.volume = volume_stor_audio / 100;
  // Local Storage in to Scope
  $rootScope.null = '';
  $rootScope.total_points = points;
  $rootScope.language = language_stor;
  $rootScope.lvl = getLevel($rootScope.total_points);
  $rootScope.passlvl = passlvl;
  $rootScope.current_progress = current_progress;
  $rootScope.time_left = time_left;
  $rootScope.volume_stor_sounds = volume_stor_sounds;
  $rootScope.volume_stor_audio = volume_stor_audio;
  $rootScope.$on('$routeChangeStart', function(event, current, next, previous, reject) {
    $rootScope.location = current.$$route.originalPath;

    $rootScope.location = $rootScope.location.slice(1).split(':')[0];

    console.log($rootScope.location);
    if (/(lvl|denied|level|result)/ig.test($rootScope.location)) {
      $rootScope.header_show = 'hide';
    } else {
      $rootScope.header_show = 'show';
    }


    // ЩОБ НЕ ВКЛЮЧАВСЯ ЗВУК КЛІКУ ПРИ СТАРТІ
    if (firsload != true) {
      playAudio('wav/click2.wav', av_s);
    }
    firsload = false;
    $rootScope.level = arguments[1].params.level;
    current_level = $rootScope.level;
    $rootScope.current_level = Number(current_level);
    if (current_level != undefined) {
      $rootScope.count_operations = $rootScope.levels[current_level - 1].options[7];
    }
    clearTimeout(set_progress);
    if (current_level <= 0) {
      window.location.href = "#!denied/" + $rootScope.current_level;
    }
    if (current.$$route.templateUrl == 'compain-lvl.html') {
      if ($rootScope.current_level !== Number($rootScope.current_level)) {
        window.location.href = "#!denied/1";
      }
      if ($rootScope.passlvl + 1 < $rootScope.current_level) {
        window.location.href = "#!denied/" + $rootScope.current_level;
      }
      // Очищення результат пейдж коли заходиш назад в уровень, або інший уровень
      $rootScope.progress_of_lvl = 0;
      $rootScope.all_time_left = 0;
      storage.setItem('current_progress', 0);
      storage.setItem('time_left_total', 0);
      $rootScope.current_progress = 0;
      time_left_total = 0;
      $rootScope.time_stor = 0;
    }
    if (current.$$route.templateUrl == 'practice-lvl.html') {
      $rootScope.progress_of_lvl = 0;
      $rootScope.all_time_left = 0;
      storage.setItem('current_progress', 0);
      storage.setItem('time_left_total', 0);
      $rootScope.current_progress = 0;
      time_left_total = 0;
      $rootScope.time_stor = 0;
    }
    var w2 = Number(storage.getItem('current_progress'));
    var w1 = Number(storage.getItem('time_left_total'));
    $rootScope.time_left_stor = w1;
    $rootScope.world_wrank = (((Number(storage.getItem('passlvl')) * loh_rand) / 0.57) - 9999) * -1;
    $rootScope.world_wrank = Number($rootScope.world_wrank.toFixed(0))
    storage.setItem('world_wrank', $rootScope.world_wrank)
  })
})






// Match functions
//addition
var f_addition = (a, b) => a + b;
var f_subtraction = (a, b) => {
  if (a < b) {
    return b - a;
  }
  return a - b;
}
var f_multiplication = (a, b) => a * b;
var f_division = (a, b) => {
  if (a < b) {
    Math.round(b / a);
  }
  return Math.round(a / b);
}
// For practice --------------------------------
function randominrange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
var changeNum = (ax, bx, ay, by, a, b) => {
  a = randominrange(Number(ax), Number(bx));
  b = randominrange(Number(ay), Number(by));
  return [a, b]
}

function define_result(a, b, simvol) {
  var m_func;
  switch (simvol) {
    case '+':
      m_func = f_addition(a, b);
      return m_func;
      break;
    case '-':
      m_func = f_subtraction(a, b);
      return m_func;
      break;
    case '*':
      m_func = f_multiplication(a, b);
      return m_func;
      break;
    case '/':
      m_func = f_division(a, b);
      return m_func;
      break;
  }
}
var getLevel = (points, all_points) => {
  var levels = [0, 100, 240, 480, 960, 1800, 3600, 5200, 10400];
  var maxLevel = levels.length;
  var i;
  for (i = 0; i < maxLevel; i++) {
    if (levels[i] > points) {
      for_next_lvl = levels[i] - all_points;
      if (for_next_lvl < 0) {
        i = i + 1;
        for_next_lvl = levels[i] - all_points;
        console.log(for_next_lvl);
      }
      return i;
    }
  }
  return maxLevel;
}

function playAudio(audio, vl, lp) {
  var a = new Audio(audio);
  a.volume = vl;
  a.loop = lp;
  a.play().catch(() => {
    console.log('error')
  });
};
var Kratne = (x, y) => {
  return Math.ceil(x / y) * y;
}

function goBack() {
  window.history.back();
}
