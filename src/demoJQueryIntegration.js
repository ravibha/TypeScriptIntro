"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
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
//# sourceMappingURL=demoJQueryIntegration.js.map