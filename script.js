function tempConverter() {
    var temp = document.getElementById('temp1');
    var selectValue = temp.value;
    var tempo = document.getElementById('temp2');
    var selectValve = tempo.value;

    if (selectValue == "c" && selectValve == "f" ) {
        var convertedintof = CtoF();
        return document.getElementById('result').value = convertedintof + '° '+  'Fahrenheit';
    } 
    else if (selectValue == "c" && selectValve == "k") {
        var convertedintok = CtoK();
        return document.getElementById('result').value = convertedintok + '° '+  'Kelvin';
    }
    else if (selectValue == "f" && selectValve == "c") {
        var convertedintok = FtoC();
        return document.getElementById('result').value = convertedintok + '° '+  'Celcius';
    }
    else if (selectValue == "f" && selectValve == "k") {
        var convertedintok = FtoK();
        return document.getElementById('result').value = convertedintok + '° '+  'Kelvin';
    }
    else if (selectValue == "k" && selectValve == "c") {
        var convertedintok = KtoC();
        return document.getElementById('result').value = convertedintok + '° '+  'Celcius';
    }
    else if (selectValue == "k" && selectValve == "f") {
        var convertedintok = KtoF();
        return document.getElementById('result').value = convertedintok + '° '+  'Fahrenheit';
    }

}
// ====  function that convert Celsuis into Fahrenheit ===

function CtoF() {
    var c = document.getElementById('tempInput').value;
    return (c * 9 / 5) + 32;
}

// ====  function that convert Celsuis into Kelvin ===

function CtoK() {
    var c = document.getElementById('tempInput').value;
    return (parseInt(c) + 273.15);
}

// ==== function that convert Fahrenheit into Celsuis ===

function FtoC() {
    var f = document.getElementById('tempInput').value;
    return (f - 32) * 5 / 9;
}

// ====  function that convert Fahrenheit into Kelvin===

function FtoK() {
    var f = document.getElementById('tempInput').value;
    return ((f - 32) * 5/9 + 273.15);
}

// ====  function that convert Kelvin into Celcius ===

function KtoC() {
    var k = document.getElementById('tempInput').value;
    return (k - 273.15);
}

// ====  function that convert Kelvin into Fahrenheit ===

function KtoF() {
    var k = document.getElementById('tempInput').value;
    return ((k - 273.15) * 9/5 + 32);
}