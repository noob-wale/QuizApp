const userName = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore");
const saveBtn = document.getElementById('saveBtn');

finalScore.innerText = mostRecentScore;

userName.addEventListener('keyup', userValue);

function userValue() {
    console.log(userName.value);
    saveBtn.disabled = !userName.value;
}

function saveHighScore(e) {
    e.preventDefault();
}
