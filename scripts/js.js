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
var time_left;
var time_left_total = 0;
var audio_volume_val;
var audio_volume;
var av_a = 0.5;
var av_s = 0.5;
var t;
var p;
var t_stor;
var fon_audio = new Audio('wav/fon.mp3');
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
    $rootScope.all_volume_audio = 50;
    $rootScope.all_volume_sounds = 50;
   
    $rootScope.all_volume_audio = volume_stor_audio;
    $rootScope.all_volume_sounds = volume_stor_sounds;
    
        

    // при зміні аудіо повзунком
    $rootScope.$watch('all_volume_audio', () => {
        if ($rootScope.all_volume_audio == 0) {
            $rootScope.all_volume_audio = 50
        }
        av_a = $rootScope.all_volume_audio / 100;
        $rootScope.r_av_a = av_a * 100;

        fon_audio.volume = $rootScope.r_av_a / 100;
        storage.setItem('volume_audio', $rootScope.r_av_a);
    })
    // при зміні звуку повзунком
    $rootScope.$watch('all_volume_sounds', () => {
        if ($rootScope.all_volume_sounds == 0) {
            $rootScope.all_volume_sounds = 50
        }
        av_s = $rootScope.all_volume_sounds / 100;
        $rootScope.r_av_s = av_s * 100;
        storage.setItem('volume_sounds', $rootScope.r_av_s);
    })
    fon_audio.play().catch(() => {
        console.log('you need access to musik')
    });
    fon_audio.loop = 'true';
    if (volume_stor_audio == 0 || volume_stor_sounds == 0) {
        $rootScope.r_av_a == 50;
        $rootScope.r_av_s == 50;
    }
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
        clearTimeout(set_progress);
        if (current_level <= 0) {
            window.location.href = "#!denied/" + $rootScope.current_level;
        }
        if (current.$$route.templateUrl == 'compain-lvl.html') {
            if ($rootScope.passlvl + 1 < $rootScope.current_level) {
                console.log('access denied!');
                window.location.href = "#!denied/" + $rootScope.current_level;
            }

            // Очищення результат пейдж коли заходиш назад в уровень, або інший уровень
            console.log($rootScope.progress_of_lvl, '$rootScope.progress_of_lvl', $rootScope.all_time_left, '$rootScope.all_time_left')
            $rootScope.progress_of_lvl = 0;
            $rootScope.all_time_left = 0;
            storage.setItem('current_progress', 0);
            storage.setItem('time_left_total', 0);
            $rootScope.current_progress = 0;
            time_left_total = 0;
            $rootScope.time_stor = 0;
        }
        if (current.$$route.templateUrl == 'practice-lvl.html') {
              console.log($rootScope.progress_of_lvl, '$rootScope.progress_of_lvl', $rootScope.all_time_left, '$rootScope.all_time_left')
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

        $rootScope.world_wrank = ((Number(storage.getItem('points'))*0.57)/100);
        $rootScope.world_wrank = $rootScope.world_wrank.toFixed(2)
        storage.setItem('world_wrank', $rootScope.world_wrank)
    })
})
app.controller("compain_lvl_ctrl", function($scope, $rootScope, $location) {
    // змінні   
    $rootScope.simvol = $rootScope.levels[current_level - 1].options[2];
    var time_total = $rootScope.levels[current_level - 1].options[3];
    var check_result = $("#result3");
    var changeNSR_compain = () => {
        $rootScope.number = changeNum($rootScope.levels[current_level - 1].options[0], $rootScope.levels[current_level - 1].options[1]);
        if ($rootScope.simvol == '/') {
            $rootScope.number[0] = Kratne($rootScope.number[0], $rootScope.number[1])
        }
        if ($rootScope.simvol == '-' || $rootScope.simvol == '/') {
            if ($rootScope.number[0] < $rootScope.number[1]) {
                forAtime = $rootScope.number[0];
                $rootScope.number[0] = $rootScope.number[1];
                $rootScope.number[1] = forAtime;
            }
        }
        $rootScope.define_result = define_result($rootScope.number[0], $rootScope.number[1], $rootScope.simvol);
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
                    console.log(a1, a2, a3, a4)
                    if (a1 == a3 && a2 == a4) {
                        changeNSR_compain();
                    }
                    $scope.calc_result_compain = null;
                check_result.val('');
                })
                
                if ($rootScope.current_progress >= 10) {
                    playAudio('wav/win.wav', av_s)
                    $rootScope.$apply(() => {
                        $location.path("/result-compain/" + $rootScope.current_level);
                        $(".compain-wrapper").css('visibility', 'hidden')
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

    function progress(timeleft, timetotal, $element, $element2, $input) {
        var progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find($element2).animate({
            width: progressBarWidth
        }, 100).html('<p class="time_left">' + timeleft % 60 + '</p>');
        time_left = timeleft;
        if (timeleft > 0) {
            set_progress = setTimeout(() => {
                progress(timeleft - 1, timetotal, $element, $element2, $input);
            }, 1000);
        } else {
            $rootScope.$apply(() => {
                $(".compain-wrapper").css('visibility', 'hidden')
                $location.path("/result-compain/" + $rootScope.current_level);
            })
            console.log('TIME OWER!!!');
            playAudio('wav/win.wav', av_s)
        }
        $input.change(() => {
            if ($scope.calc_result_compain == $rootScope.define_result) {} else {
                timeleft = timeleft - 1;
            }
        });
    };
    $(document).ready(() => {
        function endCountdown() {
            $('.vidlik_wrapper').css('display', 'none');
            progress(time_total, time_total, $('.timebar'), $('.timebar_inside'), check_result);
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
    $rootScope.simvol = $rootScope.levels[current_level - 1].options[2];
    setTimeout(() => {
        $("#result2").focus();
    }, 1000)
    var changeNSR_practice = () => {
        $rootScope.number = changeNum($rootScope.levels[current_level - 1].options[0], $rootScope.levels[current_level - 1].options[1]);
        if ($rootScope.simvol == '/') {
            $rootScope.number[0] = Kratne($rootScope.number[0], $rootScope.number[1])
        }
        if ($rootScope.simvol == '-' || $rootScope.simvol == '/') {
            if ($rootScope.number[0] < $rootScope.number[1]) {
                forAtime = $rootScope.number[0];
                $rootScope.number[0] = $rootScope.number[1];
                $rootScope.number[1] = forAtime;
            }
        }
        $rootScope.define_result = define_result($rootScope.number[0], $rootScope.number[1], $rootScope.simvol);
    }
    changeNSR_practice();
    var a5 = $rootScope.number[0];
    var a6 = $rootScope.number[1];
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
                console.log(a5, a6, a7, a8)
                if (a5 == a7 && a6 == a8) {
                    changeNSR_practice();
                }
                $scope.calc_result_practice = null;
                $("#result2").val('');

                if ($rootScope.current_progress >= 10) {
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
    if ($rootScope.current_progress < 10) {
        console.log('lose');
        $rootScope.points = 0;
    } else {
        storage.setItem('points', $rootScope.all_points);
    }
    setTimeout(() => {
        $rootScope.current_progress = 0;
        time_left_total = 0;
    }, 1000)
    console.log($rootScope.points, "$rootScope.points", $rootScope.for_next_lvl, '$rootScope.for_next_lvl', $rootScope.current_progress, "$rootScope.current_progress")
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
    if ($rootScope.current_progress < 10) {
        console.log('LOSE');
          if ($rootScope.earn_points == undefined || $rootScope.earn_points != 0) {
        $rootScope.earn_points =0;
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
        if ($rootScope.time_left_stor == undefined) {$rootScope.time_left_stor = 0;}
        

        $rootScope.points = Math.round(Number((($rootScope.current_level * 2) + $rootScope.time_left_stor / 10)) / 2);
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

     }
    )
        if ($rootScope.passlvl + 1 == $scope.current_level) {
         


            $rootScope.passlvl = $rootScope.passlvl + 1;
            storage.setItem('passlvl', $rootScope.passlvl);
        }

}

    if ($rootScope.earn_points == undefined) {
        $rootScope.earn_points =0;
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
app.controller("tips", ($scope, $rootScope) => {
    $scope.tips = [
        ['Практика, практика та ще більше практики', 'Спи довше', 'Перевіряй помилки', 'Зрозумій основні поняття', 'Розумій свої сумніви', 'Створи навколишнє середовище для навчання', 'Створи математичний словник', 'Застосовуй математику до проблем реального світу'],
        ['Practice, Practice & More Practice', 'Sleep more', 'Review Errors', ' Master the Key Concepts', 'Understand your Doubts', 'Create a Distraction Free Study Environment', 'Create a Mathematical Dictionary', 'Apply Maths to Real World Problems'],
        ['Практика, практика и больше практики', 'Спи больше', 'Пересмотри ошибки', 'Овладей основными понятиями', 'Пойми свои сомнения', 'Создайте свободную учебную среду', 'Создай математический словарь', 'Применяй математику к проблемам реального мира']
    ];
    $rootScope.day = d.getDay();
    // $scope.tips[$rootScope.language].sort(() => {
    //     return 0.5 - Math.random()
    // });
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
var randominrange = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
var changeNum = (ax, bx, a, b) => {
    a = randominrange(Number(ax), Number(bx));
    b = randominrange(Number(ax), Number(bx));
    return [a, b]
}
var define_result = (a, b, simvol) => {
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
        if (levels[i] > points) return i;
        for_next_lvl = levels[i + 1] - all_points;
       
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