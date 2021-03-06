app.run(function($rootScope) {
    $rootScope.ua = 0;
    $rootScope.en = 1;
    $rootScope.ru = 2;
    $rootScope.vers = '1.7';
    console.log('%c VERBAL MATCH VERSION - ' + $rootScope.vers, 'background: #000; color: #00d2dc; font-size:20px;');
    console.log(storage);

    $rootScope.Campaign_m = {
    'name':['Кампанія','Campaign','Кампания'],
    'ico':'brain',
    'href': '#!campaign'
    }
    $rootScope.Practice_m = {
      'name':['Практика','Practice','Практика'],
      'ico':'arrows',
      'href': '#!practice'
    }
    $rootScope.Lessons_m = {
      'name':['Уроки','Lesson','Уроки'],
      'ico':'manual',
      'href': '#!lessons'
    }
    $rootScope.Info_m = {
      'name':['Інформація','Info','Информация'],
      'ico':'ai',
      'href': '#!info'
    }
    $rootScope.Settings_m = {
      'name':['Налаштування','Settings','Настройки'],
      'ico':'settings',
      'href': '#!settings',
    }
    $rootScope.upgradebrain_m = {
      'name':['IQplanner','IQplanner','IQplanner'],
      'ico':'server',
      'href': 'javascript:void(0)',
      'available':'false'
    }

    $rootScope.menu = [$rootScope.Campaign_m, $rootScope.Practice_m,  $rootScope.Lessons_m, $rootScope.Info_m, $rootScope.upgradebrain_m, $rootScope.Settings_m]

    $rootScope.langs = [{
        "APPNAME": "Тренер усного підрахунку",
        "APPNAME2":"Прокачка мозга",
        "UA": "UKRAINE",
        "Practice": "Практика",
        "Campaign": "Компанія",
        "Lessons": "Уроки",
        "Lesson": "Урок",
        "Info": "Інформація",
        "Settings": "Налаштування",
        "Audio": "Аудіо",
        "Language": "Мова",
        "Worldrank": "Глобальний рейтинг",
        "Localrank": "Локальний рейтинг",
        "PassedLevels": "Пройдені рівні",
        "CurrentLevel": "Поточний рівень",
        "Tipsofaday": "Крилаті вислови",
        "ResultofLevel": "Результат рівня",
        "AllIsFine": "Відмінно!",
        "Earnedpoints": "Зароблено очок",
        "Allpoints": "Всі очки",
        "Requiredfornextlevel": "До наступного рівня",
        "TimeLeft": "Часу лишилося",
        "Restart": "Заново",
        "Nextlevel": "Наступний рівень",
        "Yourlevelis": "Твій рівень",
        "Level": "Рівень",
        "Levelprogress": "Прогрес рівня",
        "Newlevelsappearslater": "Нові рівні появляться пізніше",
        "Timeisover": "Час закінчився",
        "Youlose": "Практикуйся більше!",
        "points": " points",
        "Practicemore": "Більше практикуйся",
        "Currentversion": "Поточна версія",
        "Sounds": "Звуки",
        "Home": "Головна",
        "ISNOTALLOWED": "НЕ ДОСТУПНИЙ",
        "NotEnoughPoints": "Не достатньо очків",
        "ALLlevels": "Всі рівні",
        "YouHave": "Ти маєш",
        "All": "Всі",
        "Upgrade": "Прокачати",
        "Buymore": "Купити",
        "Baynextlessons": "Купити більше рівнів",
        "Congratulations": "Вітання",
        "LevelUP": "З новим рівнем ",
        "Upgraded": "Прокачано",
        "GOTOPRACTICE": "ПЕРЕЙТИ ДО ПРАКТИКИ",
        "Skip": "Пропустити",
        "Skiped": "Пропущено",
        "MoreLvl": "Більше рівнів",
        "PrevLvl": "Попередні рівні",
        "NextLvl": "Наступні рівні",
        "Tryityourself": "Спробуйте самостійно",
        "": "",
    }, {
        "APPNAME": "Mental Math Trainer",
        "APPNAME2":"Brain Workout",
        "EN": "ENGLISH",
        "Practice": "Practice",
        "Campaign": "Campaign",
        "Lessons": "Lessons",
        "Lesson": "Lesson",
        "Info": "Info",
        "Settings": "Settings",
        "Audio": "Audio",
        "Language": "Language",
        "Worldrank": "World rank",
        "Localrank": "Local rank",
        "PassedLevels": "Passed Levels",
        "CurrentLevel": "Current Level",
        "Tipsofaday": "Mathematics Quotes",
        "ResultofLevel": "Result of Level",
        "AllIsFine": "Perfect!",
        "Earnedpoints": "Earned points",
        "Allpoints": "All points",
        "Requiredfornextlevel": "Required for next level",
        "TimeLeft": "Time Left",
        "Restart": "Restart",
        "Nextlevel": "Next level",
        "Yourlevelis": "Your level is",
        "Level": "Level",
        "Levelprogress": "Level progress",
        "Newlevelsappearslater": "New levels appears later",
        "Timeisover": "Time is over",
        "Youlose": "You lose",
        "points": " points",
        "Practicemore": "Practice more",
        "Currentversion": "Current version",
        "Sounds": "Sounds",
        "Home": "Home",
        "ISNOTALLOWED": "IS NOT ALLOWED",
        "NotEnoughPoints": "Not enough points",
        "ALLlevels": "All levels",
        "YouHave": "You Have",
        "All": "All",
        "Upgrade": "Upgrade",
        "Buymore": "Buy more",
        "Baynextlessons":"Bay next lessons",
        "Congratulations": "Congratulations",
        "LevelUP": "Level UP",
        "Upgraded": "Upgraded",
        "GOTOPRACTICE": "GO TO PRACTICE",
        "Skip": "Skip",
        "Skiped": "Skiped",
        "MoreLvl": "More levels",
        "PrevLvl": "Previous levels",
        "NextLvl": "Next levels",
        "Tryityourself": "Try it your self",


    }, {
        "APPNAME": "Тренер устного подсчета",
        "APPNAME2":"Прокачка мозга",
        "RU": "RUSSIAN",
        "Practice": "Практика",
        "Campaign": "Кампания",
        "Lessons": "Уроки",
        "Lesson": "Урок",
        "Info": "Информация",
        "Settings": "Настройки",
        "Audio": "Aудио",
        "Language": "Язык",
        "Worldrank": "Мировое звание",
        "Localrank": "Местный ранг",
        "PassedLevels": "Пройденные уровни",
        "CurrentLevel": "Текущий уровень",
        "Tipsofaday": "Высказывания великих людей",
        "ResultofLevel": "Результат уровня",
        "AllIsFine": "Отлично!",
        "Earnedpoints": "Заработанные очки",
        "Allpoints": "Все очки",
        "Requiredfornextlevel": "Требуется для следующего уровня",
        "TimeLeft": "Осталось времени",
        "Restart": "Повторно",
        "Nextlevel": "Следующий уровень",
        "Yourlevelis": "Твой уровень",
        "Level": "Уровень",
        "Levelprogress": "Прогрес Уровня",
        "Newlevelsappearslater": "Новые уровни появляются позже",
        "Timeisover": "Время вышло",
        "Youlose": "Иди учись",
        "points": " points",
        "Practicemore": "Больше практиковаться",
        "Currentversion": "Текущая версия",
        "Sounds": "Звуки",
        "Home": "Главная",
        "ISNOTALLOWED": "НЕ ДОПУСКАЕТСЯ",
        "NotEnoughPoints": "Недостаточно очков",
        "ALLlevels": "Все уровни",
        "YouHave": "У тебя",
        "All": "Все",
        "Upgrade": "Прокачать",
        "Buymore": "Купить ",
        "Baynextlessons": "Купить больше уровней",
        "Congratulations": "Поздравление",
        "LevelUP": "С новим уровнем",
        "Upgraded": "Прокачано",
        "GOTOPRACTICE": "ПЕРЕЙТИ К ПРАКТИКЕ",
        "Skip": "Пропустить",
        "Skiped": "Пропущено",
        "MoreLvl": "Больше уровней",
        "PrevLvl": "Предыдущие уровни",
        "NextLvl":"Cледующие уровни",
        "Tryityourself": "Попробуй сам",
        "":"",
        "": "",
        "":"",
        "": "",
        "":"",
        "": "",
        "":"",

    }]
})
