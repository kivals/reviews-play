/*
Замыкания
Код десять раз выведет на экран число «10». Подумайте, почему так происходит?
Как исправить код, чтобы он выводил по порядку числа от 0 до 9?
Предложите три разные решения, которые выведут в консоль цифры от 0 до 9.
 */

'use strict';

'use strict';

const badResult = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 10);
  }
};

const iifeSolution = () => {
  // Предложите вариант через IIFE
  for (var i = 0; i < 10; i++) {
    (function() {
      let j = i;
      setTimeout(function() {
        console.log(j);
      }, 10);
    })(i);
  }
};

function es6Solution() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 10);
  }
}

const bindSolution = function () {
  // ...
  for (var i = 0; i < 10; i++) {
    setTimeout(function(i) {
      console.log(i);
    }.bind(null, i), 10);
  }
};

//badResult();
bindSolution();