const questions = [
    {
        q: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperTransfer Markup Language", "HyperText Managing Links"],
        answer: 0
    },
    {
        q: "Which tag is used to define the largest heading in HTML?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        answer: 2
    },
    {
        q: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
    },
    {
        q: "What attribute is used to specify the URL in an anchor tag?",
        options: ["src", "link", "href", "url"],
        answer: 2
    },
    {
        q: "Which HTML tag is used to insert an image?",
        options: ["<image>", "<photo>", "<picture>", "<img>"],
        answer: 3
    },
    {
        q: "Which tag creates an unordered (bulleted) list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: 1
    },
    {
        q: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        answer: 2
    },
    {
        q: "Which HTML attribute is used to define inline styles?",
        options: ["class", "font", "styles", "style"],
        answer: 3
    },
    {
        q: "Which tag is used to define a table row?",
        options: ["<td>", "<tr>", "<th>", "<row>"],
        answer: 1
    },
    {
        q: "What does the <!DOCTYPE html> declaration do?",
        options: ["Links CSS to HTML", "Tells browser it's HTML5", "Creates a heading", "Defines a function"],
        answer: 1
    },
    {
        q: "Which input type creates a checkbox?",
        options: ["<input type='check'>", "<input type='tick'>", "<input type='checkbox'>", "<checkbox>"],
        answer: 2
    },
    {
        q: "Which HTML tag is used for making text bold?",
        options: ["<bold>", "<b>", "<strong> only", "<b> or <strong>"],
        answer: 3
    },
    {
        q: "What is the purpose of the alt attribute in an <img> tag?",
        options: ["Sets image size", "Links to another image", "Provides alternate text if image fails", "Changes image color"],
        answer: 2
    },
    {
        q: "Which tag is used to create a dropdown list?",
        options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"],
        answer: 2
    },
    {
        q: "Where is the correct place to add JavaScript in an HTML page?",
        options: ["Inside <head> only", "Before </body> or in <head>", "Inside <img> tag", "Inside <style> tag"],
        answer: 1
    }
];

const letters = ["A", "B", "C", "D"];
let currentQ = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");
const qCounter = document.getElementById("q-counter");
const liveScore = document.getElementById("live-score");

function loadQuestion() {
    answered = false;
    feedback.innerText = "";
    nextBtn.style.display = "none";

    const q = questions[currentQ];
    questionText.innerText = q.q;
    qCounter.innerText = `QUESTION ${currentQ + 1} OF ${questions.length}`;
    progressBar.style.width = `${(currentQ / questions.length) * 100}%`;

    optionsGrid.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span class="option-letter">${letters[i]}</span> ${opt}`;
        btn.onclick = () => selectAnswer(i, btn);
        optionsGrid.appendChild(btn);
    });

    // Fade in effect
    const questionBox = document.querySelector(".question-box");
    questionBox.classList.remove("fade-in");
    void questionBox.offsetWidth;
    questionBox.classList.add("fade-in");
}

function selectAnswer(index, btn) {
    if (answered) return;
    answered = true;

    const correct = questions[currentQ].answer;
    const allBtns = optionsGrid.querySelectorAll(".option-btn");

    allBtns.forEach(b => b.disabled = true);

    if (index === correct) {
        btn.classList.add("correct");
        score++;
        liveScore.innerText = score;
        feedback.innerText = "✓ Correct!";
        feedback.style.color = "#2ecc71";
    } else {
        btn.classList.add("wrong");
        allBtns[correct].classList.add("correct");
        feedback.innerText = "✗ Wrong answer!";
        feedback.style.color = "#e94560";
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQ++;
    if (currentQ < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    document.getElementById("quiz-screen").style.display = "none";
    const scoreScreen = document.getElementById("score-screen");
    scoreScreen.style.display = "block";

    const username = localStorage.getItem("username") || "Player";
    document.getElementById("player-name").innerText = username.toUpperCase();
    document.getElementById("final-score").innerText = score;

    const pct = Math.round((score / questions.length) * 100);
    document.getElementById("percentage").innerText = `Accuracy: ${pct}%`;

    let msg = "";
    let trophy = "🏆";

    if (pct === 100)     { msg = "Perfect score! You're an HTML master! 🎉"; trophy = "🥇"; }
    else if (pct >= 80)  { msg = "Excellent work! You know HTML really well!"; trophy = "🏆"; }
    else if (pct >= 60)  { msg = "Good job! Keep practicing to master HTML."; trophy = "👍"; }
    else if (pct >= 40)  { msg = "Not bad, but there's room to grow!"; trophy = "📚"; }
    else                 { msg = "Keep studying — you'll get it next time!"; trophy = "💪"; }

    document.getElementById("score-message").innerText = msg;
    document.getElementById("trophy").innerText = trophy;
}

function restartQuiz() {
    currentQ = 0;
    score = 0;
    liveScore.innerText = 0;
    document.getElementById("score-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

// Start the quiz
loadQuestion();