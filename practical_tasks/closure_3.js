// ---closure-task-3------------------
function useCalc(calc, keys) {
    return [...keys].reduce(function showDisplay(display, key) {
        var ret = String(calc(key));

        return display + (ret != '' && key == '=' ? '=' : '') + ret;
    }, '');
}

// ------------------------------------------------------
function formatTotal(display) {
    if (Number.isFinite(display)) {
        // ограничить вывод 11 символами
        let maxDigits = 11;
        // зарезервировать место для обозначения "e+"?
        if (Math.abs(display) > 99999999999) {
            maxDigits -= 6;
        }
        // зарезервировать место для "-"?
        if (display < 0) {
            maxDigits--;
        }

        // целое число?
        if (Number.isInteger(display)) {
            display = display.toPrecision(maxDigits).replace(/\.0+$/, '');
        }
        // дробное число
        else {
            // зарезервировать место для "."
            maxDigits--;
            // зарезервировать место для начального "0"?
            if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
                maxDigits--;
            }
            display = display.toPrecision(maxDigits).replace(/0+$/, '');
        }
    } else {
        display = 'ERR';
    }
    return display;
}

// ----------------------------------------------------------
function calculator() {
    var currentTotal = 0;
    var currentVal = '';
    var currentOper = '=';

    return pressKey;

    // **************************

    function pressKey(key) {
        // digit?
        if (/\d/.test(key)) {
            currentVal += key;
            return key;
        }
        // operator?
        else if (/[+*/-]/.test(key)) {
            // series of several operations?
            if (currentOper != '=' && currentVal != '') {
                // it's suggested to press "="
                pressKey('=');
            } else if (currentVal != '') {
                currentTotal = Number(currentVal);
            }
            currentOper = key;
            currentVal = '';
            return key;
        }
        // key "=" ?
        else if (key == '=' && currentOper != '=') {
            currentTotal = op(currentTotal, currentOper, Number(currentVal));
            currentOper = '=';
            currentVal = '';
            return formatTotal(currentTotal);
        }
        return '';
    }

    function op(val1, oper, val2) {
        var ops = {
            // Note!!! arrow functions are used
            // for brevity only
            '+': (v1, v2) => v1 + v2,
            '-': (v1, v2) => v1 - v2,
            '*': (v1, v2) => v1 * v2,
            '/': (v1, v2) => v1 / v2,
        };
        return ops[oper](val1, val2);
    }
}

var calc = calculator();

console.log(useCalc(calc, '4+3=')); // 4+3=7
console.log(useCalc(calc, '+9=')); // +9=16
console.log(useCalc(calc, '*8=')); // *8=128
console.log(useCalc(calc, '7*2*3=')); //7*2*3=42
console.log(useCalc(calc, '1/0=')); // 1/0=ERR
console.log(useCalc(calc, '+3=')); // +3=ERR
console.log(useCalc(calc, '51=')); // 51
