
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let result = document.getElementById("result");
let reset = document.getElementById("resetbtn");
let symbol = document.getElementById("symbol")
function calculator(cal) {

    let res = 0;
    if (cal.innerText === "+") {
        result.innerText = `Result :${+input1.value + +input2.value}`
        symbol.innerText = "+"
    }
    if (cal.innerText === "-") {
        result.innerText = `Result :${+input1.value - +input2.value}`
        symbol.innerText = "-"
    }
    if (cal.innerText === "/") {
        result.innerText = `Result :${+input1.value / +input2.value}`
        symbol.innerText = "/"
    }
    if (cal.innerText === "x") {
        result.innerText = `Result :${+input1.value * +input2.value}`
        symbol.innerText = "x"
    }
    if (cal.innerText === "%") {
        result.innerText = `Result :${+input1.value % +input2.value}`
        symbol.innerText = "%"
    }
}
function resetHandler() {
    input1.value = null
    input2.value = null
    symbol.innerText = "+"
    result.innerText = ""
}
