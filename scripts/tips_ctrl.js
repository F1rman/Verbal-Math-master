
app.controller("tips", ($scope) => {
  $scope.tips = [
    ['Наука складається з фактів, як будинок із каменів, але набір фактів ще не наука, так само, як купа каміння ще не будинок',
      ' Найдосконаліший мозок іржавіє без дії',
      'Цифри не управляють світом, але вони показують, як управляється світ.',
      'Істинна логіка нашого світу — правильний підрахунок ймовірностей.',
      'Перетвори велику проблему на купу маленьких',
      'Найкращий спосіб вивчити що-небудь – це відкрити самому.',
      'Математика — це мова плюс роздум',
      'Знати багато і не виказувати цього - моральна висота; знати мало і показувати себе знаючим - хвороба.',
      'Усі міркування геометра закінчуються словами: «Що й треба було довести». Цією формулою корисно закінчувати й усі міркування як усні, так і письмові'
    ],
    ['Science consists of facts like a house of stones, but a set of facts is not science yet, just as a bunch of stones is not yet a house',
      'The most perfect brain is rusting without action',
      'Numbers do not control the world, but they show how the world is governed.',
      'The true logic of our world is the correct calculation of probabilities.',
      'Turn a Big Problem Into a Bunch of Small Ones',
      'The best way to learn something is to discover it yourself.',
      'Mathematics is a language plus reflection',
      'Know a lot and not to express it - moral height; know a little and show yourself to be aware - a disease.',
      'All the arguments of the geometer end with the words: "What it was necessary to prove". It is useful to finish this formula with all the arguments both oral and written'
    ],
    ['Наука состоит из фактов, как дом из камней, но набор фактов еще не наука, так же, как груда камней еще не дом',
      'Самый мозг ржавеет без действия',
      'Цифры не управляют миром, но они показывают, как управляется мир.',
      'Истинная логика нашего мира - правильный подсчет вероятностей.',
      'Преврати большую проблему в кучу маленьких',
      'Лучший способ изучить что-либо - это открыть самому.',
      'Математика - это язык плюс размышление',
      'Знать много и не показывать этого - моральная высота; знать мало и показывать себя знающим - болезнь.',
      'Все рассуждения геометра заканчиваются словами: «Что и требовалось доказать». Этой формулой полезно заканчивать и все рассуждения как устные, так и письменные'
    ]
  ];
  $scope.day = d.getDay();

})
