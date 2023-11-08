document.addEventListener("DOMContentLoaded", function() {
    var display1 = document.querySelector('.display1');
    var display2 = document.querySelector('.display2');
    var clear = document.querySelector('.clear');
    var bs = document.querySelector('.bs');
    var plus = document.querySelector('.plus');
    var minus = document.querySelector('.minus')
    var multiply = document.querySelector('.multiply')
    var divide = document.querySelector('.divide')
    var one = document.querySelector('.one');
    var two = document.querySelector('.two');
    var three = document.querySelector('.three');
    var four = document.querySelector('.four');
    var five = document.querySelector('.five');
    var six = document.querySelector('.six');
    var seven = document.querySelector('.seven');
    var eight = document.querySelector('.eight');
    var nine = document.querySelector('.nine');
    var zero = document.querySelector('.zero');
    var dot = document.querySelector('.dot');
    var equals = document.querySelector('.equals');

    var number1;
    var number2;
    var operator;

    const buttons = document.querySelectorAll('button');
    var number = document.querySelector('.number');
    display1.textContent = "";
    display2.textContent = "";

    plus.addEventListener('click', function() {
      operator = 'addition';
      if (number1 === undefined) {
        number1 = parseFloat(display1.textContent);
        display2.textContent = display1.textContent + " + ";
        display1.textContent = "";
      } else {
        number2 = parseFloat(display1.textContent);
        display1.textContent = performCalculation();

        display2.textContent = display1.textContent + " + ";
        number1 = parseFloat(display1.textContent);
        display1.textContent = "";
 
      }
    });
    minus.addEventListener('click', function() {
      operator = 'minus';
      if (number1 === undefined) {
        number1 = parseFloat(display1.textContent);
        display2.textContent = display1.textContent + " - ";
        display1.textContent = "";
      } else {
        number2 = parseFloat(display1.textContent);
        display1.textContent = performCalculation();
        display2.textContent = display1.textContent + " - ";
        number1 = parseFloat(display1.textContent);
        display1.textContent = "";
 
      }
    });
    multiply.addEventListener('click', function() {
      operator = 'multiply';
      if (number1 === undefined) {
        number1 = parseFloat(display1.textContent);
        display2.textContent = display1.textContent + " x ";
        display1.textContent = "";
      } else {
        number2 = parseFloat(display1.textContent);
        display1.textContent = performCalculation();
        display2.textContent = display1.textContent + " x ";
        number1 = parseFloat(display1.textContent);
        display1.textContent = "";
 
      }
    });
    divide.addEventListener('click', function() {
      operator = 'divide';
      if (number1 === undefined) {
        number1 = parseFloat(display1.textContent);
        display2.textContent = display1.textContent + " ÷ ";
        display1.textContent = "";
      } else {
        number2 = parseFloat(display1.textContent);
        display1.textContent = performCalculation();
        display2.textContent = display1.textContent + " ÷ ";
        number1 = parseFloat(display1.textContent);
        display1.textContent = "";
 
      }
    });
    equals.addEventListener('click', function() {
      if(display1.textContent !="")
          number2 = parseFloat(display1.textContent);
      if (number1 != null && number2 != null) {
        display2.textContent = performCalculation();
        number2 = undefined;
        number1 = parseFloat(display2.textContent);
        display1.textContent = "";
      }
    });
    
    clear.addEventListener('click', function() {
        display1.textContent = "" ;
        display2.textContent = "" ;
        number1 = number2 =undefined
      });
    dot.addEventListener('click', function() {
        display1.textContent = display1.textContent + '.' ;
      });
    zero.addEventListener('click', function() {
        display1.textContent = display1.textContent + "0";
      });
    one.addEventListener('click', function() {
        display1.textContent = display1.textContent + "1";
      });
    two.addEventListener('click', function() {
        display1.textContent = display1.textContent + "2";
      });
    three.addEventListener('click', function() {
        display1.textContent = display1.textContent + "3";
      });
    four.addEventListener('click', function() {
        display1.textContent = display1.textContent + "4";
      });
    five.addEventListener('click', function() {
        display1.textContent = display1.textContent + "5";
      });
    six.addEventListener('click', function() {
        display1.textContent = display1.textContent + "6";
      });
    seven.addEventListener('click', function() {
        display1.textContent = display1.textContent + "7";
      });
    eight.addEventListener('click', function() {
        display1.textContent = display1.textContent + "8";
      });
    nine.addEventListener('click', function() {
        display1.textContent = display1.textContent + "9";
      });
    bs.addEventListener('click', function() {
        display1.textContent = display1.textContent.slice(0, -1);
      });

function performCalculation() {
  switch (operator) {
    case 'addition':
     return number1 + number2;
    case 'minus':
      return number1 - number2;
    case 'multiply':
      return number1 * number2;
    case 'divide':
      return number1 / number2;
  }
}
})