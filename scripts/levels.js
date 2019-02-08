app.run(function($rootScope) {
    time = 5;
    count_operation = 7
    $rootScope.levels = [{
        "name": ['Найпростіше додавання', 'Simplest adding', 'Простейшее добавление'],
        "options": [0, 10, 0, 100, ["+"], time, [null],count_operation, 1]
    }, {
        "name": ['Найпростіше додавання кратне 5', " Simplest adding multiple of 5", 'Простейшее добавление, кратное 5'],
        "options": [5, 50, 5, 50, ["+"], time, [5],count_operation, 1]
    }, {
        "name": ['Найпростіше віднімання', " Simplest subtraction", 'Простейшее вычитание'],
        "options": [20, 50, 1, 20, ["-"], time, [null],count_operation, 1]
    }, {
        "name": ['Найпростіше віднімання кратне 5', " Simplest subtraction multiple of 5", 'Простейшее вычитание кратное 5'],
        "options": [50, 100, 5, 50, ["-"], time, [5],count_operation, 1]
    }, {
        "name": ['Нормальне множення', " Normal multiplication", 'Нормальное умножение'],
        "options": [2, 5, 2, 15, ["*"], time, [null],count_operation, 3]
    }, {
        "name": ['Нормальне множення кратне 5', " Normal multiplication multiple of 5", 'Нормальное умножение кратное 5'],
        "options": [5, 5, 15, 100, ["*"], time, [5],count_operation, 3]
    }, {
        "name": ['Нормальне віднімання', " Normal subtraction", 'Нормальное вычитание'],
        "options": [50, 100, 10, 50, ["-"], time, [null],count_operation, 1]
    }, {
        "name": ['Тяжке віднімання кратне 5', "  Hard subtraction multiple of 5", 'Сложное вычитание кратное 5'],
        "options": [200, 500, 50, 200, ["-"], time, [5],count_operation, 1]
    }, {
        "name": ['Тяжке ділення кратне 2', "  Hard division multiple of 2", 'Сложное деление кратное 2'],
        "options": [10, 100, 2, 2, ["/"], time, [2],count_operation, 1]
    }, {
        "name": ['Тяжке ділення кратне 2-5', "  Hard division multiple of 2-5", 'Сложное деление кратное 2-5'],
        "options": [10, 100, 2, 5, ["/"], time, [2, 5],count_operation, 1]
    }, {
        "name": ['Найтяжче множення', "Hardest multiplication", 'Самое сложное умножение'],
        "options": [11, 16, 17, 30, ["*"], time, [null],count_operation, 3]
    }, {
        "name": ['Найтяжче додавання, віднімання, множення, ділення', "Hardest adding, subtraction, multiplication, division", 'Самое сложное добавление, вычитание, умножение, деление '],
        "options": [5, 50, 0, 100, ["+", "-", "*", "/"], time, [5,10], 7, 2]
    }, {
        "name": ['Найтяжче віднімання, ділення, множення', " Hardest subtraction, division, multiplication", 'Самое сложное вычитание, деление, умножение'],
        "options": [200, 500, 10, 200, ["-", "/", "*"], time, [5],count_operation, 2]
    }, {
        "name": ['Найтяжче додавання', " Hardest adding", 'Самое сложное добавление'],
        "options": [20, 100, 20, 100, ["+"], time, [null],count_operation, 2]
    }, {
        "name": ['Найтяжче додавання', " Hardest adding", 'Самое сложное добавление'],
        "options": [100, 1000, 20, 100, ["+"], time, [null],count_operation, 2]
    }, {
        "name": ['Хардкорне додавання', " Hardcore adding", 'Xардкор добавление'],
        "options": [100, 1000, 100, 1000, ["+"], time, [null],count_operation, 2]
    }, 
    // {
    //     "name": ['Хардкорне віднімання', " Hardcore subtraction", 'Xардкор вычитание'],
    //     "options": [20, 50, 1, 20, ["+"], time, [null]]
    // }, {
    //     "name": ['Хардкорне множення', " Hardcore multiplication", 'Xардкор умножение'],
    //     "options": [20, 50, 1, 20, ["*"], time, [null]]
    // }, {
    //     "name": ['Хардкорне ділення', " Hardcore division", 'Xардкор деление'],
    //     "options": [20, 50, 1, 20, ["/"], time, [null]]
    // }, {
    //     "name": ['Нереальне додавання', " Not real adding", 'Нереальное добавление'],
    //     "options": [20, 50, 1, 20, ["+"], time, [null]]
    // }, {
    //     "name": ['Нереальне віднімання', " Not real subtraction", 'Нереальное вычитание'],
    //     "options": [20, 50, 1, 20, ["-"], time, [null]]
    // }, 
    ]
    for (var i = 0; i < $rootScope.levels.length; i++) {
        time = time * 1.1;
        $rootScope.levels[i].options[5] = Math.round(time);
    }
})