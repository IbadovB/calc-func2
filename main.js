let numb1 = parseInt(document.querySelector("#numb1").value);
let numb2 = parseInt(document.querySelector("#numb2").value);
let operators = document.querySelector("#operators").value;
let fail = document.querySelector(".wrong").innerHTML;


function calc() {
      if (operators === '+') {
        document.querySelector("#result").value = numb1 + numb2;
    }
    if (operators === '-') {
        document.querySelector("#result").value = numb1 - numb2;
    }
    if (operators === '/') {
        document.querySelector("#result").value = numb1 / numb2;   
    }
    if (operators === 'X') {
        document.querySelector("#result").value = numb1 * numb2;
    }
}

function numberOnly(input) {
    let num = /[^0-9]/gi;
    input.value = input.value.replace(num, "");
}

function chechk(input) {
    let wrong='failed';
if (input = '') {
    return wrong
}
}

