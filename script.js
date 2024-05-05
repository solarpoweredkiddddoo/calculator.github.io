function calculate(operator) {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator"); 
            return; 
    }

    document.getElementById('result').innerHTML = "Result: " + result;
}
