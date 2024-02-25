document.addEventListener("DOMContentLoaded", function () {
    var finalScore = localStorage.getItem("finalScore");
    document.getElementById("finalScore").innerText = finalScore;

    writeProgress(finalScore);
});

function restartGame() {
    window.location.href = "jatek.html";
}

function upgradeFeature1() {
    alert("Most gyorsabb lett a karaktered!")
    restartGame(
        setInterval(() => {
            if (repül) {
              if (karakterPosition < maxMagassag) {
                repülésiSebesség += 1.5;
                repülésiSebesség *= 1;
              }
            } else {
              esés();
            }
          
            if (karakterPosition + repülésiSebesség > maxMagassag) {
              karakterPosition = maxMagassag;
              repülésiSebesség = 0;
            } else {
              karakterPosition += repülésiSebesség;
            }
          
            karakter.style.bottom = karakterPosition + "px";
          }, 15)
    );
}

function upgradeFeature2() {
    alert("Feature 2 Upgraded!");
}

function writeProgress(finalScore) {
    fetch("progress.txt")
        .then(response => response.text())
        .then(currentProgress => {
            currentProgress = parseInt(currentProgress) || 0;
            var newProgress = currentProgress + parseInt(finalScore);
            fetch("progress.txt", {
                method: "PUT",
                body: newProgress.toString(),
            })
            .then(() => console.log("Progress updated successfully"))
            .catch(error => console.error("Error updating progress:", error));
        })
        .catch(error => console.error("Error reading progress:", error));
}
