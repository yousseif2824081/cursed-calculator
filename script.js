const display = document.getElementById("display");
const comment = document.getElementById("comment");
const wrongCountEl = document.getElementById("wrongCount");
const buttons = document.querySelectorAll("button");

let current = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;

        if (value === "C") {
            current = "";
            display.textContent = "0";
        }

        else {
            current += value;
            display.textContent = current;
        }
    });
});