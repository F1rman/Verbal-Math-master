app.controller("lesson", ($scope, $rootScope, $location) => {

  $rootScope.checkBuyedLessons()
  $scope.agree_modal=[];
  $scope.lessons_cost = 15;
storage.setItem('lessons[1]',1);
storage.setItem('lessons[2]',2);
storage.setItem('lessons[3]',3);
  $scope.buy_lessons = (lesson) => {
console.log(lesson);
    if (Number(storage.getItem('lessons[' + lesson + ']')) == null
     || Number(storage.getItem('lessons[' + lesson + ']')) == 0
     || Number(storage.getItem('lessons[' + lesson + ']')) == undefined)  {
        var notzero = $rootScope.all_points - $scope.lessons_cost;
        console.log('не куплено ' + lesson);

        $scope.agree_modal[lesson]=!$scope.agree_modal[lesson];

        $scope.agree_buy = (what_less)=>{

              console.log(what_less);
          if ($rootScope.all_points >= $scope.lessons_cost  && notzero >= 0) {
            storage.setItem('lessons['+what_less+']',what_less);
            $rootScope.all_points = $rootScope.all_points - $scope.lessons_cost;
            storage.setItem('points',$rootScope.all_points)
            $rootScope.checkBuyedLessons()

          } else {
            $scope.notpoints = true;
            $scope.buy()
          }


        }
    }
    else if (lesson < 4) {
        console.log('Безплатні');
           $location.path("/lessons-level/" +lesson)
    } else {
  console.log('куплено ' + lesson);

     $location.path("/lessons-level/" +lesson)
    }
    // console.log(Number(storage.getItem('lessons[' + lesson + ']')));

    //

  }
})
