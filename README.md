# quiz-web-application

A multi-topic interactive quiz application built with vanilla HTML, CSS, and JavaScript. It tests users on **HTML**, **CSS**, and **JavaScript** fundamentals.

---

## Live project
https://mohitsinghbora.github.io/quiz-web-application/index.html

---

## Project Structure

```
quizapp/
│
├── index.html          # Landing page (name entry)
├── script.js           # Handles name input & localStorage
├── style.css           # Styles for landing page
│
├── choosequiz/
│   ├── choosequiz.html # Quiz topic selection page
│   ├── choosequiz.js   # Displays personalized welcome using stored name
│   └── choosequiz.css  # Styles for topic selection page
│
├── html/
│   ├── html.html       # HTML quiz page
│   ├── html.js         # HTML quiz logic & questions (15 questions)
│   └── html.css        # Styles for HTML quiz
│
├── css/
│   ├── css.html        # CSS quiz page
│   ├── css.js          # CSS quiz logic & questions (15 questions)
│   └── css.css         # Styles for CSS quiz
│
├── js/
│   ├── js.html         # JavaScript quiz page
│   ├── js.js           # JS quiz logic & questions (15 questions)
│   └── js.css          # Styles for JS quiz
│
└── assets/
    ├── sideFace.jpg    # Landing page image
    └── winner.jpg      # Choose quiz page image
```

---

## Features

- **Personalized Experience** — Users enter their name on the landing page; it's stored in `localStorage` and displayed throughout the app.
- **3 Quiz Topics** — HTML, CSS, and JavaScript, each with 15 unique questions.
- **Instant Feedback** — Correct answers highlight green, wrong answers highlight red after each selection.
- **Score Tracking** — Live score updates displayed during the quiz.
- **Results Screen** — Personalized result message based on performance.
- **Responsive Design** — Mobile-friendly layouts across all pages.

---

## How to Use

1. Open `index.html` in a browser.
2. Enter your name and click **Next**.
3. Choose a quiz topic: **HTML**, **CSS**, or **JavaScript**.
4. Answer all 15 questions — click an option to see if you're correct.
5. Click **Next** to proceed to the next question.
6. View your final score and personalized feedback at the end.

---

## Scoring & Results

| Score       | Message                        |
|-------------|--------------------------------|
| 15 / 15     | Perfect! You're a master!      |
| 12 – 14     | Excellent!                     |
| 7 – 11      | Good!                          |
| 0 – 6       | You need improvement!          |

---

## Tech Stack

- **HTML5** — Structure and markup
- **CSS3** — Styling and responsive design
- **Vanilla JavaScript** — Quiz logic, DOM manipulation, localStorage
- **Google Fonts** — Ubuntu font family
- **Font Awesome** — Icons (arrow, back button)

---

## localStorage Usage

| Key        | Value                        | Purpose                          |
|------------|------------------------------|----------------------------------|
| `username` | String (user's entered name) | Personalize the quiz experience  |

---

## Known Issues / Bugs

- Back button links in quiz pages point to `../choosequize/choosequize.html` (typo — folder is actually `choosequiz`). Update the `href` in `html.html`, `css.html`, and `js.html` to fix navigation.
- The `<p>` tag in `js.html` still reads "HTML" instead of "JavaScript" in the quiz header.
- Similarly, `css.html` header reads "HTML" instead of "CSS".
- The completion message in `js.js` and `css.js` still says "You're an HTML master!" — should be updated to match the respective subject.

---

## Setup & Run

No build tools or dependencies required. Simply:

```bash
# Clone or download the project
git clone <your-repo-url>

# Open the landing page in any browser
open index.html
```

> ⚠️ Due to `localStorage` usage, open via a local server or directly in a browser. Avoid opening as a raw file in some restricted environments.

---

## License

This project is open source and free to use for learning purposes.