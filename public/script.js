let display = document.getElementById('display');

function appendNumber(num) {
  if (display.innerText === '0') {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  const lastChar = display.innerText.slice(-1);
  if ('+-*/'.includes(lastChar)) return; // prevent double operator
  display.innerText += op;
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteChar() {
  display.innerText = display.innerText.length > 1
    ? display.innerText.slice(0, -1)
    : '0';
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}
