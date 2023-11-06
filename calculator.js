document.addEventListener("DOMContentLoaded", function() {
    var display = document.querySelector('.display');
    var clear = document.querySelector('.clear');
    var ce = document.querySelector('.ce');
    var bs = document.querySelector('.bs');
    var divide = document.querySelector('.divide');
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

    const buttons = document.querySelectorAll('button');
    var number = document.querySelector('.number');
    display.textContent = "";

    clear.addEventListener('click', function() {
        display.textContent = "" ;
      });
    dot.addEventListener('click', function() {
        display.textContent = display.textContent + '.' ;
      });
    zero.addEventListener('click', function() {
        display.textContent = display.textContent + "0";
      });

    one.addEventListener('click', function() {
        display.textContent = display.textContent + "1";
      });
    two.addEventListener('click', function() {
        display.textContent = display.textContent + "2";
      });
    three.addEventListener('click', function() {
        display.textContent = display.textContent + "3";
      });
    four.addEventListener('click', function() {
        display.textContent = display.textContent + "4";
      });
    five.addEventListener('click', function() {
        display.textContent = display.textContent + "5";
      });
    six.addEventListener('click', function() {
        display.textContent = display.textContent + "6";
      });
    seven.addEventListener('click', function() {
        display.textContent = display.textContent + "7";
      });
    eight.addEventListener('click', function() {
        display.textContent = display.textContent + "8";
      });
    nine.addEventListener('click', function() {
        display.textContent = display.textContent + "9";
      });
    ce.addEventListener('click', function() {
        display.textContent = display.textContent + "0";
      });
    bs.addEventListener('click', function() {
        display.textContent = display.textContent.slice(0, -1);
      });


})