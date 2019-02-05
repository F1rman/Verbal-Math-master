app.run(function($rootScope) {
    time = 5;
    $rootScope.levels = [{
        "name": ['Найпростіше додавання', 'Simplest adding', 'Простейшее добавление'],
        "options": [0, 10, 0, 100, ["+"], time,[null] ]
    }, {
        "name": ['Найпростіше додавання кратне 5', " Simplest adding multiple of 5", 'Простейшее добавление, кратное 5'],
        "options": [5, 50, 5, 50, ["+"], time,[5], ]
    }, {
        "name": ['Найпростіше віднімання', " Simplest subtraction", 'Простейшее вычитание'],
        "options": [20, 50, 1, 20, ["-"], time,[null] ]
    }, {
        "name": ['Найпростіше віднімання кратне 5', " Simplest subtraction multiple of 5", 'Простейшее вычитание кратное 5'],
        "options": [50, 100, 5, 50, ["-"], time, [5] ]
    }, {
        "name": ['Нормальне множення', " Normal multiplication", 'Нормальное умножение'],
        "options": [2, 5, 2, 15, ["*"], time, [null] ]
    }, {
        "name": ['Нормальне множення кратне 5', " Normal multiplication multiple of 5", 'Нормальное умножение кратное 5'],
        "options": [5, 5, 15, 100, ["*"], time, [5]]
    }, {
        "name": ['Нормальне віднімання', " Normal subtraction", 'Нормальное вычитание'],
        "options": [50, 100, 10, 50, ["-"], time,[null]  ]
    }, {
        "name": ['Тяжке віднімання кратне 5', "  Hard subtraction multiple of 5", 'Сложное вычитание кратное 5'],
        "options": [200, 500, 50, 200, ["-"], time, [5] ]
    }, {
        "name": ['Тяжке ділення кратне 2', "  Hard division multiple of 2", 'Сложное деление кратное 2'],
        "options": [10, 100, 2, 2, ["/"], time,[2] ]
    }, {
        "name": ['Тяжке ділення кратне 2-5', "  Hard division multiple of 2-5", 'Сложное деление кратное 2-5'],
        "options": [10, 100, 2, 5, ["/"], time, [2,5] ]
    }, {
        "name": ['Тяжке ділення ', "  Hard division", 'Сложное деление'],
        "options": [20, 50, 1, 20, ["/"], time, ]
    }, {
        "name": ['Найтяжче додавання', "  Hardest adding", 'Самое сложное добавление'],
        "options": [20, 50, 1, 20, ["+"], time, ]
    }, {
        "name": ['Найтяжче віднімання', " Hardest subtraction", 'Самое сложное вычитание'],
        "options": [20, 50, 1, 20, ["-"], time,  ]
    }, {
        "name": ['Найтяжче множення', " Hardest multiplication", 'Самое сложное умножение'],
        "options": [20, 50, 1, 20, ["*"], time, ]
    }, {
        "name": ['Найтяжче ділення', " Hardest division", 'Самое сложное деление'],
        "options": [20, 50, 1, 20, ["/"], time, ]
    }, {
        "name": ['Хардкорне додавання', " Hardcore adding", 'Xардкор добавление'],
        "options": [20, 50, 1, 20, ["+"], time, ]
    }, {
        "name": ['Хардкорне віднімання', " Hardcore subtraction", 'Xардкор вычитание'],
        "options": [20, 50, 1, 20, ["-"], time, ]
    }, {
        "name": ['Хардкорне множення', " Hardcore multiplication", 'Xардкор умножение'],
        "options": [20, 50, 1, 20, ["*"], time, ]
    }, {
        "name": ['Хардкорне ділення', " Hardcore division", 'Xардкор деление'],
        "options": [20, 50, 1, 20, ["/"], time, ]
    }, {
        "name": ['Нереальне додавання', " Not real adding", 'Нереальное добавление'],
        "options": [20, 50, 1, 20, ["+"], time, ]
    }, {
        "name": ['Нереальне віднімання', " Not real subtraction", 'Нереальное вычитание'],
        "options": [20, 50, 1, 20, ["-"], time, ]
    }, ]
    for (var i = 0; i < $rootScope.levels.length; i++) {
        time = time * 1.1;
        $rootScope.levels[i].options[5] = Math.round(time);
    }
})