app.run(function($rootScope) {
  time = 5;
  count_operation = 5
  $rootScope.levels = [{
      "name": ['Додавання кратне 5', 'Adding multiple of 5', 'Добавление кратное 5'],
      "options": [5, 100, 5, 100, ["+"], time, [5], count_operation, 1]
    },{
      "name": ['Додавання ', " Adding ", 'Добавление '],
      "options": [10, 100, 10, 100, ["+"], time, [null], count_operation+1, 1]
    }, {
      "name": ['Віднімання кратне 5 ', " Subtraction multiple of 5 ", 'Вычитание кратное 5 '],
      "options": [50, 100, 10, 45, ["-"], time, [5], count_operation, 2]
    },{
      "name": ['Віднімання ', " Subtraction ", 'Вычитание '],
      "options": [50, 100, 1, 45, ["-"], time, [null], count_operation+1, 2]
    },{
      "name": ['Ділення, множення на 2', "Division, multiplication of 2", 'Деление, умножение на 2'],
      "options": [2, 2, 50, 100, [ "/", "*"], time, [2], count_operation, 3]
    },
     {
      "name": ['Множення кратне 10 ', " Normal multiplication multiple of 10 ", 'Нормальное умножение кратное 10 '],
      "options": [10, 100, 10, 50, ["*"], time, [10], count_operation+1, 3]
    },
    {
      "name": ['Ділення кратне 2-5', "   Division multiple of 2-5", ' Деление кратное 2-5'],
      "options": [10, 100, 2, 5, ["/"], time, [2, 5], count_operation+2, 5]
    },
    {
      "name": ['Додавання ', " Adding ", 'Добавление '],
      "options": [100, 500, 100, 500, ["+"], time, [null], count_operation+1, 3]
    },
    {
      "name": ['Віднімання ', " Subtraction ", 'Вычитание '],
      "options": [1000, 500, 100, 499, ["-"], time, [null], count_operation+1, 4]
    },
    {
      "name": ['Ділення, множення на 4', "Division, multiplication of 4", 'Деление, умножение на 4'],
      "options": [4, 4, 50, 100, [ "/", "*"], time, [4], count_operation, 5]
    },
   {
      "name": ['Додавання, віднімання, множення, ділення', "Аdding, subtraction, multiplication, division", 'Добавление, вычитание, умножение, деление '],
      "options": [5, 100, 5, 50, ["+", "-", "*", "/"], time, [5, 10], 3, 6]
    }, {
      "name": ['Ділення, множення на 8', "Division, multiplication of 8", 'Деление, умножение на 8'],
      "options": [8, 8, 10, 100, [ "/", "*"], time, [8], count_operation,7 ]
    },
    {
      "name": ['Ділення, множення на 25', "Division, multiplication of 25", 'Деление, умножение на 25'],
      "options": [25, 25, 10, 100, [ "/", "*"], time, [25], count_operation, 8]
    },
    {
      "name": ['Ділення, множення на 125', "Division, multiplication of 125", 'Деление, умножение на 125'],
      "options": [125, 125, 10, 100, [ "/", "*"], time, [125], count_operation, 9]
    }, {
      "name": ['Хардкорне додавання', " Hardcore adding", 'Xардкор добавление'],
      "options": [1000, 10000, 1000, 10000, ["+"], time, [null], count_operation, 3]
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
    time = time * 1.2;
    $rootScope.levels[i].options[5] = Math.round(time);
  }
})
