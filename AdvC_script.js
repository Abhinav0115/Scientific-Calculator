
//total/ final result
function equal() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = eval(exp)
    }

}

//      add +ve/-ve before number
function changeSign() {
    if (document.Calculator.display.value.substring(0, 1) == "-")
        document.Calculator.display.value = document.Calculator.display.value.substring(1, document.Calculator.display.value.length)
    else
        document.Calculator.display.value = "-" + document.Calculator.display.value
}

//      square of a number
function square() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = exp * exp
    }
}

//      square root of a number
function sqrt() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = Math.sqrt(exp)
    }
}

//      for |X|
function posSign() {
    document.Calculator.display.value = Math.abs(document.Calculator.display.value)
}

//      cube root
function cbrt() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = Math.cbrt(exp)
    }
}

//      10^x
function powerTen() {
    var exp = document.Calculator.display.value;
    if (exp) {
        document.Calculator.display.value = Math.pow(10, exp)
    }
}

//      factorial
function fact() {
    var exp = document.Calculator.display.value;

    function factorial(n) {
        if (n == 0 || n == 1)
            return 1;
        else
            return n * factorial(n - 1);
    }
    document.Calculator.display.value = factorial(exp);
}

//      1/x 
function invOf() {
    document.Calculator.display.value = (1 / document.Calculator.display.value).toFixed(5)
}

//      e^x
function exp() {
    document.Calculator.display.value = Math.exp(document.Calculator.display.value).toFixed(5)
}

//      e
function eValue() {
    if (document.Calculator.display.value == '' || document.Calculator.display.value == 0)
        document.Calculator.display.value = 2.71828;
    else
        document.Calculator.display.value = (document.Calculator.display.value * 2.718281828459045).toFixed(5);
}

//      log base 10
function logT() {
    var res = document.Calculator.display.value
    if (res == '1')
        document.Calculator.display.value = Math.log10(res)
    else
        document.Calculator.display.value = Math.log10(res).toFixed(5)
}

//      log base e
function logE() {
    var res = document.Calculator.display.value
    if (res == '1')
        document.Calculator.display.value = Math.log(res)
    else
        document.Calculator.display.value = Math.log(res).toFixed(5)
}

//remove/delete last element from total length
function backspace() {
    var exp = document.Calculator.display.value;
    document.Calculator.display.value = exp.substring(0, exp.length - 1);
}

// sin for degree and radian
function sinAngle() {
    if (document.getElementById('valDeg').checked) {
        var exp = document.Calculator.display.value * (Math.PI / 180);
        document.Calculator.display.value = Math.sin(exp).toFixed(5);
    } else if (document.getElementById('valRad').checked) {
        var exp = document.Calculator.display.value;
        document.Calculator.display.value = Math.sin(exp).toFixed(5);
    }
}

// cos for degree and radian
function cosAngle() {
    if (document.getElementById('valDeg').checked) {
        var exp = document.Calculator.display.value * (Math.PI / 180);
        document.Calculator.display.value = Math.cos(exp).toFixed(5);
    } else if (document.getElementById('valRad').checked) {
        var exp = document.Calculator.display.value;
        document.Calculator.display.value = Math.cos(exp).toFixed(5);
    }
}

// tan for degree and radian
function tanAngle() {
    if (document.getElementById('valDeg').checked) {
        var exp = document.Calculator.display.value * (Math.PI / 180);
        document.Calculator.display.value = Math.tan(exp).toFixed(5);
    } else if (document.getElementById('valRad').checked) {
        var exp = document.Calculator.display.value;
        document.Calculator.display.value = Math.tan(exp).toFixed(5);
    }
}

// inverse sin for degree and radian
function sinInvAngle() {
    if (document.getElementById('valDeg').checked) {
        var res = Math.asin(document.Calculator.display.value);
        document.Calculator.display.value = (res * (180/Math.PI)).toFixed(5);
    } else if (document.getElementById('valRad').checked) {
        var exp = document.Calculator.display.value;
        document.Calculator.display.value = Math.asin(exp).toFixed(5);
    }
}

// inverse cos for degree and radian
function cosInvAngle() {
    if (document.getElementById('valDeg').checked) {
        var res = Math.acos(document.Calculator.display.value);
        document.Calculator.display.value = (res * (180/Math.PI)).toFixed(5);
    } else if (document.getElementById('valRad').checked) {
        var exp = document.Calculator.display.value;
        document.Calculator.display.value = Math.acos(exp).toFixed(5);
    }
}

// inverse tan for degree and radian
function tanInvAngle() {
    if (document.getElementById('valDeg').checked) {
        var res = Math.atan(document.Calculator.display.value);
        document.Calculator.display.value = (res * (180/Math.PI)).toFixed(5);
    } else if (document.getElementById('valRad').checked) {
        var exp = document.Calculator.display.value;
        document.Calculator.display.value = Math.atan(exp).toFixed(5);
    }
}
