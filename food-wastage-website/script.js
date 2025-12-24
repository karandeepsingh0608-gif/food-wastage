function showTip() {
    alert("Tip: Plan your meals and store food properly to reduce wastage!");
}
function showTip(tipNumber) {
    const tips = [
        "Plan your meals to avoid over-purchasing.",
        "Store food properly to increase shelf life.",
        "Use leftovers creatively instead of throwing them away."
    ];
    alert(tips[tipNumber]);
}
function checkAnswer(isCorrect) {
    const result = document.getElementById("quizResult");
    if (isCorrect) {
        result.innerText = "Correct! About 30% of food is wasted worldwide.";
    } else {
        result.innerText = "Try again!";
    }
}
function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
window.onscroll = function() {
    document.getElementById("topBtn").style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
let progress = 0;
function increaseProgress() {
    if (progress < 100) {
        progress += 20;
        document.getElementById("progressBar").style.width = progress + "%";
    }
}
