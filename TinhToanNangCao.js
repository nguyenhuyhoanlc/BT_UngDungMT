function caculator (value) {
    let a = parseInt(document.getElementById('numberOne').value)
    let b = parseInt(document.getElementById('numberTwo').value)
    let result;
    if (value === "+") {
        result = a + b;
    } else if (value === "-") {
        result = a - b;
    } else if (value === "*") {
        result = a * b
    } else if (value === "/") {
        result = a / b
    } else {

    }
    alert(result)
}
