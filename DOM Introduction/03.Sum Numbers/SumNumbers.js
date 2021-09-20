function calc() {
    // TODO: sum = num1 + num2
    let element1 = document.getElementById('num1');
    let element2 = document.getElementById('num2');
    let result = document.getElementById('sum');

    result.value = (Number(element1.value) + Number(element2.value));
}
