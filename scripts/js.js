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
    $routeProvider.when("/home", {
        templateUrl: "index.html",
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
    }).when("/lessons-level/:level", {
        templateUrl: "lessons-level.html"
    }).otherwise({
        redirectTo: '/home'
    });
});
var firsload = true;
app.run(($rootScope) => {
    if (volume_stor_audio == undefined || volume_stor_audio == 0 || volume_stor_sounds == undefined || volume_stor_sounds == 0) {
        $rootScope.all_volume_audio = 50;
        $rootScope.all_volume_sounds = 50;
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
    $rootScope.total_points = points;
    $rootScope.language = language_stor;
    $rootScope.lvl = getLevel($rootScope.total_points);
    $rootScope.passlvl = passlvl;
    $rootScope.current_progress = current_progress;
    $rootScope.time_left = time_left;
    $rootScope.volume_stor_sounds = volume_stor_sounds;
    $rootScope.volume_stor_audio = volume_stor_audio;
    $rootScope.$on('$routeChangeStart', function(event, current, next, previous, reject) {
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
                console.log('access denied!');
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
        $rootScope.world_wrank = $rootScope.world_wrank.toFixed(0)
        storage.setItem('world_wrank', $rootScope.world_wrank)
    })
})
app.controller("compain_lvl_ctrl", function($scope, $rootScope, $location) {
    // змінні  
    var time_total = $rootScope.levels[current_level - 1].options[5];
    var check_result = $("#result3");
    lvl_kratne = $rootScope.levels[current_level - 1].options[6];
    lvl_kratne_arr = randominrange(lvl_kratne[0], lvl_kratne[1])

    function swap() {
        if ($rootScope.number[0] < $rootScope.number[1]) {
            var forAtime;
            forAtime = $rootScope.number[0];
            $rootScope.number[0] = $rootScope.number[1];
            $rootScope.number[1] = forAtime;
            console.log('$rootScope.number[0] > $rootScope.number[1]')
        }
    }

    function n1_n2_kratne() {
        if (lvl_kratne.length == 1) {
            $rootScope.number[0] = Kratne($rootScope.number[0], lvl_kratne[0])
            $rootScope.number[1] = Kratne($rootScope.number[1], lvl_kratne[0])
            console.log('lvl_kratne.length== 1')
            swap()
        }
        if (lvl_kratne.length > 1) {
            console.log('lvl_kratne.length > 1')
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
            console.log($rootScope.number[0], $rootScope.number[1])
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
    changeNSR_compain();
    var a1 = $rootScope.number[0];
    var a2 = $rootScope.number[1];
    check_result.keyup((el) => {
        clearTimeout(clearIfPress);
        clearIfPress = setTimeout(() => {
            if ($scope.calc_result_compain == $rootScope.define_result) {
                $scope.$apply(() => {
                    $scope.isOk = true
                });
                setTimeout(() => {
                    $scope.$apply(() => {
                        $scope.isOk = null
                    });
                }, 800)
                var a1 = $rootScope.number[0];
                var a2 = $rootScope.number[1];
                playAudio('wav/enter_ok.flac', av_s);
                time_left_total += time_left;
                t = time_left_total;
                storage.setItem('time_left_total', time_left_total)
                $rootScope.time_left_total = time_left_total;
                clearTimeout(set_progress)
                progress(time_total, time_total, $('.timebar'), $('.timebar_inside'), check_result);
                $rootScope.$apply(() => {
                    $rootScope.current_progress = $rootScope.current_progress + 1;
                    changeNSR_compain();
                    var a3 = $rootScope.number[0];
                    var a4 = $rootScope.number[1];
                    if (a1 == a3 && a2 == a4) {
                        changeNSR_compain();
                    }
                    $scope.calc_result_compain = null;
                    check_result.val('');
                })
                if ($rootScope.current_progress >= $rootScope.count_operations) {
                    playAudio('wav/win.wav', av_s)
                    $rootScope.$apply(() => {
                        $location.path("/result-compain/" + $rootScope.current_level);
                    })
                }
            } else if ($scope.calc_result_compain == '' || $scope.calc_result_compain == null || $scope.calc_result_compain == undefined) {
                $scope.$apply(() => {
                    $scope.isOk = null;
                    $scope.calc_result_compain = null;
                    check_result.val('');
                });
            } else {
                $scope.$apply(() => {
                    $scope.isOk = false
                })
                setTimeout(() => {
                    $scope.$apply(() => {
                        $scope.isOk = null
                    });
                }, 800)
                playAudio('wav/enter_no.flac', av_s);
                console.log('WRONG!')
                $scope.calc_result_compain = null;
                check_result.val('');
            }
        }, 500)
    })

    function progress(timeleft, timetotal, $element, $element2) {
        var progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find($element2).animate({
            width: progressBarWidth
        }, 600).html('<p class="time_left">' + timeleft % 60 + '</p>');
        time_left = timeleft;
        if (timeleft > 0) {
            set_progress = setTimeout(() => {
                progress(timeleft - 1, timetotal, $element, $element2);
            }, 1000);
        } else {
            $rootScope.$apply(() => {
                // $location.path("/result-compain/" + $rootScope.current_level);
            })
            playAudio('wav/win.wav', av_s)
        }
    };
    $(document).ready(() => {
        function endCountdown() {
            $('.vidlik_wrapper').css('display', 'none');
            progress(time_total, time_total, $('.timebar'), $('.timebar_inside'));
            check_result.focus();
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
    setTimeout(() => {
        $("#result2").focus();
    }, 1000)
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
                $("#result2").val('');
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
                $("#result2").val('');
            }
        }, 500)
    })
})
app.controller("practice_lvl_result_ctrl", ($scope, $rootScope) => {
    console.log($rootScope.points, "$rootScope.points", $rootScope.for_next_lvl, '$rootScope.for_next_lvl', $rootScope.current_level, "$rootScope.current_level", $rootScope.total_points, '$rootScope.total_points')
    if ($rootScope.points == undefined) {
        $rootScope.points = 0;
    } else {
        $rootScope.points = Math.round(Number($rootScope.current_level) / 2);
    }
    $rootScope.all_points = $rootScope.points + $rootScope.total_points;
    getLevel(points, $rootScope.all_points);
    $rootScope.for_next_lvl = for_next_lvl;
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
app.controller("settings_ctrl", ($scope, $rootScope) => {
    // Налаштування звуку
    // Коли нажимаєш клавішу аудіо вкл
    $('#audio_button').click(() => {
        $('#a_range').val(av_a * 100);
        if (fon_audio.paused) {
            fon_audio.play().catch(() => {});   
        } else {
            $('#a_range').val(0);
            fon_audio.pause();
        }
    })
    $('#sounds_button').click(() => {
        if (Number($('#s_range').val()) / 100 == Number(av_s)) {
            $('#s_range').val(0);
        } else {
            $('#s_range').val(av_s * 100);
        }
    })
    var change_volume_audio = () => {
        $scope.$watch('all_volume_audio', () => {
            $rootScope.all_volume_audio = $scope.all_volume_audio;
        })
    }
    change_volume_audio();
    var change_volume_sounds = () => {
        $scope.$watch('all_volume_sounds', () => {
            $rootScope.all_volume_sounds = $scope.all_volume_sounds;
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
app.controller("result_compain_lvl_ctrl", ($scope, $rootScope, $location) => {
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
        }
    } else {
        console.log('WIN');
        if ($rootScope.time_left_stor == undefined) {
            $rootScope.time_left_stor = 0;
        }
        $rootScope.points = Math.round(Number((($rootScope.current_level * 2) + $rootScope.time_left_stor / $rootScope.count_operations)) / 2);
        p = $rootScope.points;
        storage.setItem('earn_points', p);
        $rootScope.earn_points = storage.getItem('earn_points')
        $rootScope.all_points = $rootScope.points + Number(storage.getItem('points'));
        getLevel(points, $rootScope.all_points);
        $rootScope.for_next_lvl = for_next_lvl;
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
app.controller("tips", ($scope) => {
    $scope.tips = [
        ['Грайте логічні ігри!', 'Будьте уважні, підкреслюйте важливі записи, і слухайте уважно', 'Перевіряй помилки', 'Плануй завчасно план вирішення проблеми', 'Розумій свої сумніви', 'Створи навколишнє середовище для навчання', 'Створи математичний словник', 'Застосовуй математику до проблем реального світу', 'Не забувайте про методи'],
        ['Play math games!', 'Take careful, dedicated notes and listen carefully', 'Review Errors', 'Have a plan to tackle each problem', 'Understand your Doubts', 'Create a Distraction Free Study Environment', 'Create a Mathematical Dictionary', 'Apply Maths to Real World Problems', 'Dont forget about the methods'],
        ['Нужно играть в математические игры', 'Внимательно делайте заметки и слушайте внимательно', 'Пересмотри ошибки', 'Нужно иметь план для решения каждой проблемы', 'Пойми свои сомнения', 'Создайте свободную учебную среду', 'Создай математический словарь', 'Применяй математику к проблемам реального мира', 'Не забывайте о методах']
    ];
    $scope.day = d.getDay();
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
i=i+1;
 for_next_lvl = levels[i] - all_points;
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