const ball = document.querySelector(".ball");

const ANSWERS = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Eat Shit and Die"
];

function shakeMagic8Ball() {
    const index = Math.floor(Math.random() * ANSWERS.length);
    return ANSWERS[index];
}

ball.addEventListener("click", () => {
    const response = shakeMagic8Ball();
    document.querySelector(".response").innerText = response;
});
