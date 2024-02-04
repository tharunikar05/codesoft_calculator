const displayScreen = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.onclick = () => {
    const buttonText = button.textContent;
    const displayText = displayScreen.textContent;
    
    switch(button.id) {
      case "clear":
        displayScreen.textContent = "";
        break;
      case "backspace":
        displayScreen.textContent = displayText.slice(0, -1);
        break;
      case "equal":
        if (displayText !== "") {
          displayScreen.textContent = eval(displayText).toFixed(14);
        } else {
          displayScreen.textContent = "Empty!";
          setTimeout(() => displayScreen.textContent = "", 2000);
        }
        break;
      case "divide":
        displayScreen.textContent += "/";
        break;
        case "multiply":
        displayScreen.textContent += "*";
        break;
       
      case "sin":
        displayScreen.textContent = Math.sin(displayText).toFixed(14);
        break;
      case "cos":
        displayScreen.textContent = Math.cos(displayText).toFixed(14);
        break;
      case "tan":
        displayScreen.textContent = Math.tan(displayText).toFixed(14);
        break;
      case "pi":
        displayScreen.textContent = Math.PI.toFixed(14);
        break;
      case "log":
        displayScreen.textContent = Math.log10(displayText).toFixed(14);
        break;
      case "sqrt":
        displayScreen.textContent = Math.sqrt(displayText).toFixed(14);
        break;
      case "squared":
        displayScreen.textContent = Math.pow(displayText, 2);
        break;
      case "exp":
        displayScreen.textContent = Math.exp(displayText).toFixed(7);
        break;
      default:
        displayScreen.textContent += buttonText;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};
