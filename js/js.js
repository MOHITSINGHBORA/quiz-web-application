const questions = [
    {
        question: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "Java System", "Just Script"],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a variable in modern JavaScript?",
        options: ["var", "let", "const", "Both let and const"],
        answer: 3
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["#", "//", "/*", "--"],
        answer: 1
    },
    {
        question: "Which method is used to print something in the browser console?",
        options: ["console.print()", "print()", "console.log()", "log()"],
        answer: 2
    },
    {
        question: "What is the correct way to write an array in JavaScript?",
        options: [
            "let arr = (1, 2, 3)",
            "let arr = {1, 2, 3}",
            "let arr = [1, 2, 3]",
            "let arr = <1, 2, 3>"
        ],
        answer: 2
    },
    {
        question: "Which operator is used to strictly compare both value and type?",
        options: ["==", "=", "===", "!="],
        answer: 2
    },
    {
        question: "Which built-in method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "append()"],
        answer: 0
    },
    {
        question: "What will 'typeof null' return in JavaScript?",
        options: ["null", "undefined", "object", "string"],
        answer: 2
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"],
        answer: 1
    },
    {
        question: "What does the 'this' keyword refer to inside a regular function?",
        options: [
            "The current function",
            "The global object",
            "The parent object",
            "undefined"
        ],
        answer: 1
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["shift()", "splice()", "pop()", "remove()"],
        answer: 2
    },
    {
        question: "What is the output of: 2 + '2' in JavaScript?",
        options: ["4", "22", "NaN", "Error"],
        answer: 1
    },
    {
        question: "Which statement is used to stop a loop in JavaScript?",
        options: ["stop", "exit", "break", "return"],
        answer: 2
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A way to close the browser window",
            "A function that has access to its outer function's scope even after the outer function returns",
            "A method to terminate a function",
            "A loop that runs a fixed number of times"
        ],
        answer: 1
    },
    {
        question: "Which method is used to select an HTML element by its ID in JavaScript?",
        options: [
            "document.getElement()",
            "document.querySelector()",
            "document.findById()",
            "document.getElementById()"
        ],
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
            message = "Perfect! You're an javascript master!";
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