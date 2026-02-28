const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Mark Language"
        ],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyper>"],
        answer: 1
    },
    {
        question: "Which tag is used to insert an image?",
        options: ["<image>", "<img>", "<pic>", "<src>"],
        answer: 1
    },
    {
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<head>", "<h1>", "<heading>"],
        answer: 2
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
        else if (score >= 3) {
            message = "Excellent!";
            messageClass = "success";
        }
        else if (score >= 2) {
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