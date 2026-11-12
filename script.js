const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        if (value === "C") {
            display.value = "";
        } 
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "=") {
            try {
                display.value = Function(
                    '"use strict"; return (' + display.value + ')'
                )();
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
});