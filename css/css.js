const questions = [
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1
    },
    {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        answer: 2
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        answer: 1
    },
    {
        question: "How do you select an element with id 'header' in CSS?",
        options: [".header", "*header", "#header", "header"],
        answer: 2
    },
    {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "text-font", "font-family", "typeface"],
        answer: 2
    },
    {
        question: "Which CSS property is used to make text bold?",
        options: ["text-weight", "font-bold", "font-weight", "text-style"],
        answer: 2
    },
    {
        question: "How do you select all elements with class 'menu' in CSS?",
        options: ["#menu", "*menu", "menu", ".menu"],
        answer: 3
    },
    {
        question: "Which property is used to set the space between lines of text?",
        options: ["line-height", "letter-spacing", "text-spacing", "line-spacing"],
        answer: 0
    },
    {
        question: "Which CSS property is used to set the width of an element's border?",
        options: ["border-size", "border-style", "border-width", "border-thickness"],
        answer: 2
    },
    {
        question: "Which CSS value makes an element completely transparent?",
        options: ["opacity: 0", "visibility: none", "display: none", "opacity: 1"],
        answer: 0
    },
    {
        question: "Which property is used to align text horizontally?",
        options: ["text-align", "font-align", "align-text", "horizontal-align"],
        answer: 0
    },
    {
        question: "Which CSS display value is used for flexbox?",
        options: ["display: block", "display: flex", "display: inline", "display: grid"],
        answer: 1
    },
    {
        question: "Which property sets the space between an element's border and its content?",
        options: ["margin", "spacing", "padding", "border-spacing"],
        answer: 2
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["text-color", "font-color", "foreground-color", "color"],
        answer: 3
    },
    {
        question: "Which CSS position value removes an element from the normal document flow and positions it relative to the viewport?",
        options: ["relative", "absolute", "sticky", "fixed"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const question = document.getElementById("question");
const option = document.querySelectorAll(".option");
const questionAttempt = document.querySelector(".questionAttempt");
const scoreElement = document.querySelector(".score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    question.textContent = currentQuestion.question;
    questionAttempt.textContent = `Question : ${currentQuestionIndex + 1}/${questions.length}`;
    scoreElement.textContent = `Score : ${score}`;

    option.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.classList.remove("correct", "wrong");
        option.style.pointerEvents = "auto";
    });
}

function selectOption(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;

    option.forEach((option, index) => {
        option.style.pointerEvents = "none";

        if (index === correctIndex) {
            option.classList.add("correct");
        }

        if (index === selectedIndex && selectedIndex !== correctIndex) {
            option.classList.add("wrong");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
    }
}

option.forEach((option, index) => {
    option.addEventListener("click", () => {
        selectOption(index);
    });
});

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {

        const user = localStorage.getItem("username").toUpperCase() || "Hey!";
        let message = "";

        let messageClass = "";

        if (score === questions.length) {
            message = "Perfect! You're an HTML master!";
            messageClass = "success";
        }
        else if (score >= 12) {
            message = "Excellent!";
            messageClass = "success";
        }
        else if (score >= 7) {
            message = "Good!";
            messageClass = "success";
        }
        else {
            message = "You need improvement!";
            messageClass = "fail";
        }

        question.innerHTML = `
    <h2 class="completed">Quiz Completed!</h2>

    <div class="result">
        <p class="final-score">score: ${score}</p>
        <p class="final-message ${messageClass}">${message}, ${user}</p>
        <p>Question Attempted: ${questions.length}</p>
    </div>
`;

        document.querySelector(".options").style.display = "none";
        document.querySelector(".head").style.display = "none";
        nextBtn.style.display = "none";
    }
});

loadQuestion();