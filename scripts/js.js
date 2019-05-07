var storage = window.localStorage;
// storage.removeItem() // Pass a key name to remove that key from storage.
// storage.setItem('key',val );
// storage.setItem('passlvl',16);

var d = new Date();
var dateItHappens = d.getDay() + 2;
var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var day;
var current_progress = Number(storage.getItem('current_progress'));
var points;
points == undefined? points = 0: Number(storage.getItem('points'));
var lvl = Number(storage.getItem('lvl'));
var passlvl = Number(storage.getItem('passlvl'));
var language_stor = Number(storage.getItem('language_stor'));
var set_progress;
var clearIfPress;
var clearIfPress2;
var value;
var rand_simvol;
var time_left;
var time_left_total = 0;
var t;
var lvl_kratne;
var lvl_kratne_arr;
var p;
var false_practice = 0;
var t_stor;
var fon_audio = new Audio('wav/fon.mp3');
var loh_rand = randominrange(130, 190);
storage.getItem('loh_rand') == undefined?  storage.setItem('loh_rand', loh_rand):  loh_rand = storage.getItem('loh_rand');

// ANGULAR
var app = angular.module("Routing", ["ngRoute", 'ngAnimate']);
//Routing
app.config(($routeProvider) => {
  $routeProvider.when("/", {
    templateUrl: "home.html",
  }).when("/campaign", {
    templateUrl: "campaign.html",
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
  var days_in_row = 0;
app.run(($rootScope) => {

  $rootScope.all_points = Number(storage.getItem('points'))

// console.log($rootScope.check_row_day());
$rootScope.check_row_day = ()=>{
  for (var i = 0; i < 7 ;i++) {
    if (storage.getItem(weekday[i]) == 'true') {
      return days_in_row = days_in_row + 1;
    }
  }
}
$rootScope.bonus_day = $rootScope.check_row_day();
$rootScope.daily_bonus = ()=>{
  if (storage.getItem(weekday[d.getDay()]) == undefined) {
    storage.setItem(weekday[d.getDay()], true)
    $rootScope.bonus = !$rootScope.bonus;
    $rootScope.bonus_day = $rootScope.check_row_day();
    console.log($rootScope.bonus_day);
    $rootScope.all_points = $rootScope.all_points + $rootScope.bonus_day;
     storage.setItem('points', $rootScope.all_points)
  }
}
$rootScope.daily_bonus()
  $rootScope.ResInput = '';
  $rootScope.key = (key, del, remove) => {
    $rootScope.ResInput += key;
  }
  $rootScope.delete = () => {
    $rootScope.ResInput = '';
  };
  $rootScope.remove = () => {
    $rootScope.ResInput = $rootScope.ResInput.slice(0, -1)
  };


$rootScope.pushmore1 = 10;

$rootScope.pushmore = ()=>{
$rootScope.pushmore1 <= $rootScope.levels.length ? $rootScope.pushmore1 = $rootScope.pushmore1 + 10 : false;
}
$rootScope.pushless = ()=>{
  $rootScope.pushmore1 > 10 ? $rootScope.pushmore1 = $rootScope.pushmore1 - 10 : false;
}


if (storage.getItem('dateItHappens') == undefined) {
    notMore7();
    storage.setItem('dateItHappens',weekday[dateItHappens])
}
if (storage.getItem('dateItHappens') == weekday[d.getDay()] ){
  $rootScope.feedback = !$rootScope.feedback;
    notMore7()
    storage.setItem('dateItHappens',weekday[dateItHappens])
}

  $rootScope.buy = ()=>{
      $rootScope.buyed = !$rootScope.buyed
  }

  if ($rootScope.skill == undefined) {
$rootScope.skill = 1;
  }
  else {
    $rootScope.skill = storage.getItem('skill');
  }

  //

  if (storage.getItem('s_vol') == undefined){
    $rootScope.r_s_vol = 50;
    av_s =  0.5;
  }
  else {
    $rootScope.r_s_vol = storage.getItem('s_vol');
    av_s =  storage.getItem('s_vol')/100;
  }

  if (storage.getItem('a_vol') == undefined){
    $rootScope.r_a_vol = 50;
    av_a =  0.5;
  }
  else {
    $rootScope.r_a_vol = storage.getItem('a_vol');
    av_a =  storage.getItem('a_vol')/100;
  }

  fon_audio.play().catch(() => {
    console.log('you need access to musik')
  });
  fon_audio.loop = 'true';
  fon_audio.volume = av_a;
  // Local Storage in to Scope
  $rootScope.null = '';
  $rootScope.total_points = points;
  $rootScope.language = language_stor;
  $rootScope.lvl = getLevel(points);
  $rootScope.passlvl = passlvl;
  $rootScope.current_progress = current_progress;
  $rootScope.time_left = time_left;

  $rootScope.$on('$routeChangeStart', function(event, current, next, previous, reject) {
    $rootScope.checklvl_skiped();

    $rootScope.location = current.$$route.originalPath;

    $rootScope.location = $rootScope.location.slice(1).split(':')[0];

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
    if ($rootScope.world_wrank < 0) {
      $rootScope.world_wrank = 1;
    }
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


var notMore7 = ()=>{
  dateItHappens == 7 ? dateItHappens = 0 : false;
  dateItHappens == 8 ? dateItHappens = 1 : false;
  return dateItHappens;
}
