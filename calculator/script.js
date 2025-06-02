const display = document.getElementById("display");

    function appendToDisplay(value) {
      if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }

    function clearDisplay() {
      display.textContent = "0";
    }

    function calculate() {
      try {
        display.textContent = eval(display.textContent.replace(/÷/g, '/').replace(/×/g, '*'));
      } catch (e) {
        display.textContent = "Error";
      }
    }