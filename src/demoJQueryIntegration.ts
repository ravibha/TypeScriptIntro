// When strict mode and noimplicityany settings are set to true in tsconfig.json, errors will start showing up.
// By assigning proper types to variables, these errors will go away, and we can get to strongly typed code.

import * as $ from "jquery";

$(document).ready(function () {
    var num1;
    var num2;
    var total;

    
    function isSumGreaterThanZero(number) {
        var result = parseFloat(number);
        var lessThanZero = $("#lessThanZero");
        if (result < 0) {
            lessThanZero.text("true");
        }
        else {
            lessThanZero.text("false");
        }
    }

    $("#addButton").click(function () {
        total = 0;
        var additionResult = $("#additionResult");
        num1 = parseFloat($("#number1").val());
        num2 = parseFloat($("#number2").val());

        total = num1 + num2;
        additionResult.val(total);
        isSumGreaterThanZero(total);
    });
});