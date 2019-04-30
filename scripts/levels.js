app.run(function($rootScope) {
  time = 5;
  count_operation = 7
  $rootScope.levels = [{
      "name": ['Найпростіше додавання кратне 5', 'Simplest adding', 'Простейшее добавление кратное 5'],
      "options": [5, 5, 5, 50, ["+"], time, [5], 5, 1]
    }, {
      "name": ['Найпростіше додавання кратне 5 (2)', 'Simplest adding multiple of 5 (2)', 'Простейшее добавление кратное 5 (2)'],
      "options": [5, 10, 5, 100, ["+"], time, [5], 6, 1]
    }, {
      "name": ['Найпростіше додавання кратне 5 (3)', 'Simplest adding multiple of 5 (3)', 'Простейшее добавление кратное 5 (3)'],
      "options": [5, 15, 5, 150, ["+"], time, [5], 7, 1]
    }, {
      "name": ['Найпростіше додавання', " Simplest adding", 'Простейшее добавление'],
      "options": [5, 50, 5, 50, ["+"], time, [null], 5, 1]
    },  {
      "name": ['Найпростіше додавання (2)', " Simplest adding (2)", 'Простейшее добавление (2)'],
      "options": [5, 100, 5, 100, ["+"], time, [null], 6, 1]
    },  {
      "name": ['Найпростіше додавання (3)', " Simplest adding (3)", 'Простейшее добавление (3)'],
      "options": [5, 150, 5, 150, ["+"], time, [null], 7, 1]
    },  {
      "name": ['Найпростіше віднімання кратне 5', " Simplest subtraction multiple of 5", 'Простейшее вычитание кратное 5'],
      "options": [20, 50, 5, 15, ["-"], time, [5], 5, 1]
    }, {
      "name": ['Найпростіше віднімання кратне 5 (2)', " Simplest subtraction multiple of 5 (2)", 'Простейшее вычитание кратное 5 (2)'],
      "options": [50, 100, 5, 45, ["-"], time, [5], 6, 1]
    }, {
      "name": ['Найпростіше віднімання кратне 5  (3)', " Simplest subtraction multiple of 5 (3)", 'Простейшее вычитание кратное 5 (3)'],
      "options": [50, 150, 15, 100, ["-"], time, [5], 7, 1]
    },{
      "name": ['Найпростіше віднімання', " Simplest subtraction", 'Простейшее вычитание'],
      "options": [20, 50, 1, 15, ["-"], time, [null], count_operation, 1]
    },{
      "name": ['Найпростіше віднімання (2)', " Simplest subtraction (2)", 'Простейшее вычитание (2)'],
      "options": [50, 100, 1, 45, ["-"], time, [null], count_operation+1, 1]
    },{
      "name": ['Найпростіше віднімання (3)', " Simplest subtraction (3)", 'Простейшее вычитание (3)'],
      "options": [20, 150, 1, 100, ["-"], time, [null], count_operation+2, 1]
    }, {
      "name": ['Нормальне множення кратне 5', " Normal multiplication multiple of 5", 'Нормальное умножение кратное 5'],
      "options": [5, 5, 5, 40, ["*"], time, [5], count_operation, 2]
    }, {
      "name": ['Нормальне множення кратне 5 (2)', " Normal multiplication multiple of 5 (2)", 'Нормальное умножение кратное 5 (2)'],
      "options": [5, 5, 10, 80, ["*"], time, [5], count_operation+1, 3]
    }, {
      "name": ['Нормальне множення кратне 5 (3)', " Normal multiplication multiple of 5 (3)", 'Нормальное умножение кратное 5 (3)'],
      "options": [5, 5, 15, 150, ["*"], time, [5], count_operation+2, 3]
    }, {
      "name": ['Нормальне множення', " Normal multiplication", 'Нормальное умножение'],
      "options": [2, 5, 2, 5, ["*"], time, [null], count_operation, 3]
    },  {
      "name": ['Нормальне множення (2)', " Normal multiplication (2)", 'Нормальное умножение (2)'],
      "options": [2, 5, 2, 10, ["*"], time, [null], count_operation+1, 3]
    },  {
      "name": ['Нормальне множення (3)', " Normal multiplication (3)", 'Нормальное умножение (3)'],
      "options": [2, 5, 2, 15, ["*"], time, [null], count_operation+2, 3]
    }, {
      "name": ['Нормальне віднімання', " Normal subtraction", 'Нормальное вычитание'],
      "options": [20, 50, 10, 20, ["-"], time, [null], count_operation, 1]
    },  {
      "name": ['Нормальне віднімання (2)', " Normal subtraction(2)", 'Нормальное вычитание(2)'],
      "options": [50, 100, 10, 50, ["-"], time, [null], count_operation+1, 1]
    },  {
      "name": ['Нормальне віднімання (3)', " Normal subtraction (3)", 'Нормальное вычитание (3)'],
      "options": [100, 150, 10, 100, ["-"], time, [null], count_operation+2, 1]
    }, {
      "name": ['Тяжке віднімання кратне 5', "  Hard subtraction multiple of 5", 'Сложное вычитание кратное 5'],
      "options": [150, 500, 50, 150, ["-"], time, [5], count_operation, 1]
    }, {
      "name": ['Тяжке віднімання кратне 5 (2)', "  Hard subtraction multiple of 5 (2)", 'Сложное вычитание кратное 5 (2)'],
      "options": [200, 500, 50, 200, ["-"], time, [5], count_operation+1, 1]
    }, {
      "name": ['Тяжке віднімання кратне 5  (3)', "  Hard subtraction multiple of 5 (3)", 'Сложное вычитание кратное 5 (3)'],
      "options": [250, 500, 100, 250, ["-"], time, [5], count_operation+2, 1]
    }, {
      "name": ['Тяжке ділення кратне 2', "  Hard division multiple of 2", 'Сложное деление кратное 2'],
      "options": [10, 100, 2, 2, ["/"], time, [2], count_operation, 1]
    }, {
      "name": ['Тяжке ділення кратне 2 (2)', "  Hard division multiple of 2 (2)", 'Сложное деление кратное 2 (2)'],
      "options": [20, 100, 2, 2, ["/"], time, [2], count_operation, 1]
    }, {
      "name": ['Тяжке ділення кратне 2 (3)', "  Hard division multiple of 2 (3)", 'Сложное деление кратное 2 (3)'],
      "options": [50, 500, 2, 2, ["/"], time, [2], count_operation+1, 1]
    }, {
      "name": ['Тяжке ділення кратне 2-5', "  Hard division multiple of 2-5", 'Сложное деление кратное 2-5'],
      "options": [10, 100, 2, 5, ["/"], time, [2, 5], count_operation+2, 1]
    }, {
      "name": ['Найтяжче множення', "Hardest multiplication", 'Самое сложное умножение'],
      "options": [11, 16, 17, 30, ["*"], time, [null], count_operation, 3]
    }, {
      "name": ['Найтяжче множення (2)', "Hardest multiplication (2)", 'Самое сложное умножение (2)'],
      "options": [15, 21, 22, 35, ["*"], time, [null], count_operation, 3]
    }, {
      "name": ['Найтяжче множення', "Hardest multiplication", 'Самое сложное умножение'],
      "options": [21, 26, 27, 40, ["*"], time, [null], count_operation, 3]
    }, {
      "name": ['Найтяжче додавання, віднімання, множення, ділення', "Hardest adding, subtraction, multiplication, division", 'Самое сложное добавление, вычитание, умножение, деление '],
      "options": [5, 50, 0, 100, ["+", "-", "*", "/"], time, [5, 10], 3, 2]
    }, {
      "name": ['Найтяжче додавання, віднімання, множення, ділення (2)', "Hardest adding, subtraction, multiplication, division (2)", 'Самое сложное добавление, вычитание, умножение, деление  (2)'],
      "options": [15, 150, 0, 15, ["+", "-", "*", "/"], time, [5, 10], 7, 2]
    }, {
      "name": ['Найтяжче додавання, віднімання, множення, ділення (3)', "Hardest adding, subtraction, multiplication, division (3)", 'Самое сложное добавление, вычитание, умножение, деление  (3)'],
      "options": [25, 250, 0, 25, ["+", "-", "*", "/"], time, [5, 10], 10, 2]
    },{
      "name": ['Ділення, множення на 4', "Division, multiplication of 4", 'Деление, умножение на 4'],
      "options": [4, 4, 50, 100, [ "/", "*"], time, [4], count_operation, 3]
    },
     {
      "name": ['Найтяжче віднімання, ділення, множення', " Hardest subtraction, division, multiplication", 'Самое сложное вычитание, деление, умножение'],
      "options": [200, 500, 10, 200, ["-", "/", "*"], time, [5], count_operation, 2]
    },  {
      "name": ['Найтяжче віднімання, ділення, множення (2)', " Hardest subtraction, division, multiplication (2)", 'Самое сложное вычитание, деление, умножение (2)'],
      "options": [400, 1000, 10, 200, ["-", "/", "*"], time, [5], count_operation +1, 2]
    },  {
      "name": ['Найтяжче віднімання, ділення, множення (3)', " Hardest subtraction, division, multiplication (3)", 'Самое сложное вычитание, деление, умножение (3)'],
      "options": [600, 1500, 10, 400, ["-", "/", "*"], time, [5], count_operation+3, 2]
    }, {
      "name": ['Найтяжче додавання', " Hardest adding", 'Самое сложное добавление'],
      "options": [20, 100, 20, 100, ["+"], time, [null], count_operation, 2]
    }, {
      "name": ['Найтяжче додавання (2)', " Hardest adding (2)", 'Самое сложное добавление (2)'],
      "options": [100, 1000, 20, 100, ["+"], time, [null], count_operation, 2]
    }, {
      "name": ['Хардкорне додавання', " Hardcore adding", 'Xардкор добавление'],
      "options": [1000, 10000, 1000, 10000, ["+"], time, [null], count_operation, 2]
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
