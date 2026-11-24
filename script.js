const display = document.getElementById("display");
const comment = document.getElementById("comment");
const wrongCountEl = document.getElementById("wrongCount");
const buttons = document.querySelectorAll("button");
const comments = [
    "I am 100% sure that I got it right this time",
    "Trust me, I am a calculator",
    "Math is not everything buddy",
    "My teacher said I am perfect",
    "That is the answer, don't argue",
    "I hope you are not cheating with me in the exams, cuz you will fail it"
];
const curses =[
    (n) => n + 1,
    (n) => n - 2,
    (n) => {n * 2},
    (n) => n + Math.floor(Math.random() * 10),
    (n) => Number(String(n).split("").reverse().join(""))
];

function calculate(expression){
    const match = expression.match(/^(\d+)([+\-*\/])(\d+)$/);
    if (!match) return null;

    const a = match[1];
    const b = match[2];
    const c = match[3];

    if (op === "+") return a+b;
    if (op === "-") return a-b;
    if (op === "x") return a*b;
    if (op === "/") return a/b;
}

function curse(correct){
    const pick = curses[Math.floor(Math.random() * curses.length)];
    let cursed = pick(correct);
    if (cursed = correct){
        cursed = correct + 1;
    }

    return cursed;
}

let current = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;

        let wrongCount = 0;

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