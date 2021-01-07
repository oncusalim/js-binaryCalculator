var operand1 = "";
var operand2 = "";
var operator = "";
var result = "";
var x = "";

function btn0() {
    if (operator == "") {
        operand1 += "0";
        x = operand1;

    } else {
        operand2 = operand2 + "0";
        x = x + "0";
    }
    document.getElementById("res").innerHTML = x;
}

function btn1() {
    if (operator == "") {
        operand1 += "1";
        x = operand1;

    } else {
        operand2 = operand2 + "1";
        x = x + "1";
    }
    document.getElementById("res").innerHTML = x;
}
function btnClr() {
    operand1 = "";
    operand2 = "";
    operator = "";
    result = "";
    x = "";

    document.getElementById("res").innerHTML = "";
}
function btnSum() {

    operator = "+";
    x = x + "+";

    document.getElementById("res").innerHTML = x;
}
function btnSub() {

    operator = "-";
    x = x + "-";

    document.getElementById("res").innerHTML = x;
}
function btnMul() {

    operator = "*";
    x = x + "*";

    document.getElementById("res").innerHTML = x;
}
function btnDiv() {

    operator = "/";
    x = x + "/";

    document.getElementById("res").innerHTML = x;
}
function btnEql() {
    var o1 = parseInt(operand1, 2).toString(10);
    var o2 = parseInt(operand2, 2).toString(10);

    if (operator == "+") {
        result = Number(o1) + Number(o2);
        x = result.toString(2);

    } else if (operator == "-") {
        result = eval(o1) - eval(o2);
        x = parseInt(result, 10).toString(2);
    } else if (operator == "*") {
        result = o1 * o2;
        x = result.toString(2);
    } else if (operator == "/") {
        result = o1 / o2;
        x = parseInt(result.toString(2));
    }

    document.getElementById("res").innerHTML = x;
} 