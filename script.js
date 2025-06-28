 const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    function updateDisplay(value) {
      display.textContent = value || "0";
    }

    function calculate() {
      try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay(currentInput);
      } catch (e) {
        updateDisplay("Error");
        currentInput = "";
      }
    }

    function handleKeyPress(e) {
      const key = e.key;
      if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        currentInput += key;
      } else if (key === 'Enter') {
        calculate();
        return;
      } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
      } else if (key === 'Escape') {
        currentInput = "";
      }
      updateDisplay(currentInput);
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (value === "C") {
          currentInput = "";
        } else if (value === "=") {
          calculate();
          return;
        } else if (btn.classList.contains("empty")) {
          return;
        } else {
          currentInput += value;
        }

        updateDisplay(currentInput);
      });
    });

    window.addEventListener("keydown", handleKeyPress);