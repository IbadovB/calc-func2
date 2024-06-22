
function calc() {
    let numb1 = parseInt(document.getElementById('numb1').value);
    let numb2 = parseInt(document.getElementById('numb2').value);
    let operators = document.getElementById('operators').value;

    if (operators === '+') {
        document.getElementById('result').value = numb1 + numb2;
    }

    if (operators === '-') {
        document.getElementById('result').value = numb1 - numb2;
    }

    if (operators === '/') {
        document.getElementById('result').value = numb1/numb2;
    }

    if (operators === 'X') {
        document.getElementById('result').value = numb1*numb2;
    }
    }



function numberonly (input) {
    let num = /[^0-9]/gi;
    input.value = input.value.replace (num, "");
  
}