document.addEventListener("DOMContentLoaded", function () {
  var finalScore = localStorage.getItem("finalScore");
  document.getElementById("finalScore").innerText = finalScore;

  writeProgress(finalScore);
});

function restartGame() {
  window.location.href = "jatek.html";
}

let fejl1 = document.querySelector(".upgrade-option1");
if (finalScore >= 20 && fejl1.addEventListener("click")) {
  finalScore -= 20;
  function upgradeFeature1() {
    localStorage.setItem("life", "5");
  }
}

upgradeFeature1();

function upgradeFeature2() {
  alert("Feature 2 Upgraded!");
}

function writeProgress(finalScore) {
  fetch("progress.txt")
    .then((response) => response.text())
    .then((currentProgress) => {
      currentProgress = parseInt(currentProgress) || 0;
      var newProgress = currentProgress + parseInt(finalScore);
      fetch("progress.txt", {
        method: "PUT",
        body: newProgress.toString(),
      })
        .then(() => console.log("Progress updated successfully"))
        .catch((error) => console.error("Error updating progress:", error));
    })
    .catch((error) => console.error("Error reading progress:", error));
}
