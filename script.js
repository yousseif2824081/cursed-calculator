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
    (n) => n * 2,
    (n) => n + Math.floor(Math.random() * 10),
    (n) => Number(String(n).split("").reverse().join(""))
];

function calculate(expression){
    const match = expression.match(/^(\d+)([+\-x\/])(\d+)$/);
    if (!match) return null;

    const a = Number(match[1]);
    const op = match[2];
    const b = Number(match[3]);

    if (op === "+") return a+b;
    if (op === "-") return a-b;
    if (op === "x") return a*b;
    if (op === "/") return a/b;
}

function curse(correct){
    if (!Number.isFinite(correct)){
        return "nice try ;)";
    }
    const pick = curses[Math.floor(Math.random() * curses.length)];
    let cursed = pick(correct);

    if (Number.isNaN(cursed) || cursed === correct){
        cursed = correct + 1;
    }

    return cursed;
}

let current = "";
let wrongCount = 0;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;

        if (value === "C") {
            current = "";
            display.textContent = "0";
        }
        
        else if (value === "="){
            const correct = calculate(current);
            if (correct === null){
                display.textContent = "???";
                current = "";
                return;
            }

            display.textContent = curse(correct);

            current = "";

            wrongCount++;
            wrongCountEl.textContent = wrongCount;
            comment.textContent = comments[Math.floor(Math.random() * comments.length)];
        }

        else {
            current += value;
            display.textContent = current;
        }
    });
});