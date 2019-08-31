var first = document.getElementById("first").value;
var second = document.getElementById("second").value;

var multiply = document.getElementById("solve");
var subtract = document.getElementById("subtract");
var divide = document.getElementById("divide");


multiply.addEventListener('click', function() {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    
    var total = first * second;

    
    var solution = document.getElementById("solution");
    solution.innerHTML = total;

});

subtract.addEventListener('click', function() {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;

    var total = first - second;

var solution = document.getElementById("solution");
    solution.innerHTML = total;
});

divide.addEventListener('click', function() {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;

    var total = first / second;

var solution = document.getElementById("solution");
    solution.innerHTML = total;
});


