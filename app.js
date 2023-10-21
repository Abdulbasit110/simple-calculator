const cal = (num1, num2, op) => {
    switch (op) {
      case `+`:
        return num1 + num2;
      case `-`:
        return num1 - num2;
      case `*`:
        return num1 * num2;
      case `/`:
        return num1 / num2;
      // default:
      //   alert(`Invalid operation`)
    }
  }
  num1 = +prompt(`Enter first number`)
  if (isNaN(num1)) { alert(`Invalid number`) }
  else {
    num2 = +prompt(`Enter second number`)
    if (isNaN(num2)) { alert(`Invalid number`) }
    else {
      op = prompt(`Enter operation`)
    }
  }
  cal(num1, num2, op) ? alert(cal(num1, num2, op)) : alert(`Invalid operation`) 