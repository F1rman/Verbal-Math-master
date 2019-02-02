app.run(function($rootScope) {
    range_1 = 1;
    range_2 = 5;
    range_3 = 10;
    range_4 = 15;
    range_5 = 20;
    range_6 = 40;
    range_7 = 50;
    range_8 = 70;
    range_9 = 90;
    range_10 = 100;
    range_11 = 120;
    range_12 = 130;
    range_13 = 150;
    range_14 = 160;
    range_15 = 180;
    range_16 = 200;
    time = 10;
    $rootScope.levels = [{
        "name": ['Найпростіше додавання', 'Simplest adding', 'Простейшее добавление'],
        "options": [range_1, range_2, "+", time, "10", '0/10']
    }, {
        "name": ['Найпростіше віднімання', " Simplest subtraction", 'Простейшее вычитание'],
        "options": [range_1, range_2, "-", time, "0", "10", '0/10']
    }, {
        "name": ['Найпростіше множення', " Simplest multiplication", 'Простейшее умножение'],
        "options": [range_1, range_2, "*", time, "10", '0/10']
    }, {
        "name": ['Найпростіше ділення', " Simplest division", 'Простейшее деление'],
        "options": [range_1, range_2, "/", time, "10", '0/10']
    }, {
        "name": ['Нормальне додавання', " Normal adding", 'Нормальное добавление'],
        "options": [range_1, range_3, "+", time * 2, "0", "0", "10", '0/10']
    }, {
        "name": ['Нормальне віднімання', " Normal subtraction", 'Нормальное вычитание'],
        "options": [range_1, range_3, "-", time * 2, "0", "10", '0/10']
    }, {
        "name": ['Нормальне множення', " Normal multiplication", 'Нормальное умножение'],
        "options": [range_1, range_3, "*", time * 2, "0", "10", '0/10']
    }, {
        "name": ['Нормальне ділення', " Normal division", 'Нормальное деление'],
        "options": [range_1, range_3, "/", time * 2, "0", "10", '0/10']
    }, {
        "name": ['Тяжке додавання', "  Hard adding", 'Сложное добавление'],
        "options": [range_1, range_4, "+", time * 3, "10", '0/10']
    }, {
        "name": ['Тяжке віднімання', "  Hard subtraction", 'Сложное вычитание'],
        "options": [range_1, range_4, "-", time * 3, "0", "10", '0/10']
    }, {
        "name": ['Тяжке множення', "  Hard multiplication", 'Сложное умножение'],
        "options": [range_1, range_4, "*", time * 3, "10", '0/10']
    }, {
        "name": ['Тяжке ділення', "  Hard division", 'Сложное деление'],
        "options": [range_1, range_4, "/", time * 3, "10", '0/10']
    }, {
        "name": ['Найтяжче додавання', "  Hardest adding", 'Самое сложное добавление'],
        "options": [range_1, range_5, "+", time * 4, "10", '0/10']
    }, {
        "name": ['Найтяжче віднімання', " Hardest subtraction", 'Самое сложное вычитание'],
        "options": [range_1, range_5, "-", time * 4, "0", "10", '0/10']
    }, {
        "name": ['Найтяжче множення', " Hardest multiplication", 'Самое сложное умножение'],
        "options": [range_1, range_5, "*", time * 4, "10", '0/10']
    }, {
        "name": ['Найтяжче ділення', " Hardest division", 'Самое сложное деление'],
        "options": [range_1, range_5, "/", time * 4, "10", '0/10']
    }, {
        "name": ['Хардкорне додавання', " Hardcore adding", 'Xардкор добавление'],
        "options": [range_1, range_6, "+", time * 5, "10", '0/10']
    }, {
        "name": ['Хардкорне віднімання', " Hardcore subtraction", 'Xардкор вычитание'],
        "options": [range_1, range_6, "-", time * 5, "10", '0/10']
    }, {
        "name": ['Хардкорне множення', " Hardcore multiplication", 'Xардкор умножение'],
        "options": [range_1, range_6, "*", time * 5, "10", '0/10']
    }, {
        "name": ['Хардкорне ділення', " Hardcore division", 'Xардкор деление'],
        "options": [range_1, range_6, "/", time * 5, "10", '0/10']
    }, {
        "name": ['Нереальне додавання', " Not real adding", 'Нереальное добавление'],
        "options": [range_1, range_7, "+", time * 5, "10", '0/10']
    }, {
        "name": ['Нереальне віднімання', " Not real subtraction", 'Нереальное вычитание'],
        "options": [range_1, range_7, "-", time * 6, "10", '0/10']
    }, ]
})