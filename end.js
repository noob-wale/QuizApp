const userName = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore");
const saveBtn = document.getElementById('saveBtn');
const MAX_HIGHSCORES = 5;

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

finalScore.innerText = mostRecentScore;

userName.addEventListener('keyup', userValue);

function userValue() {
    saveBtn.disabled = !userName.value;
};

function saveHighScore(e) {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: userName.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./index.html");
};

