// Snowboarding - by Matthew Abel

// Event Listener for btn
document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked() {
  // input vars
  let a1 = document.getElementById("q1").value;
  let a2 = document.getElementById("q2").value;
  let a3 = document.getElementById("q3").value.toLowerCase();
  let a4 = document.getElementById("q4").value;
  let a5 = document.getElementById("q5").value.toLowerCase();

  // calc score
  let score = 0;
  if (a1 == "5") {
    score = score + 1;
    document.getElementById("q1-is-correct-msg").innerHTML = "Correct";
    document.getElementById("q1-is-correct-msg").style.color = "Green";
  } else {
    document.getElementById("q1-is-correct-msg").innerHTML = "Incorrect";
    document.getElementById("q1-is-correct-msg").style.color = "Red";
  }

  if (a2 == "1965") {
    score++;
    document.getElementById("q2-is-correct-msg").innerHTML = "Correct";
    document.getElementById("q2-is-correct-msg").style.color = "Green";
  } else {
    document.getElementById("q2-is-correct-msg").innerHTML = "Incorrect";
    document.getElementById("q2-is-correct-msg").style.color = "Red";
  }

  if (a3 == "split" || a3 == "split board") {
    score++;
    document.getElementById("q3-is-correct-msg").innerHTML = "Correct";
    document.getElementById("q3-is-correct-msg").style.color = "Green";
  } else {
    document.getElementById("q3-is-correct-msg").innerHTML = "Incorrect";
    document.getElementById("q3-is-correct-msg").style.color = "Red";
  }

  if (a4 == "freestyle" || a4 == "freestyle board") {
    score++;
    document.getElementById("q4-is-correct-msg").innerHTML = "Correct";
    document.getElementById("q4-is-correct-msg").style.color = "Green";
  } else {
    document.getElementById("q4-is-correct-msg").innerHTML = "Incorrect";
    document.getElementById("q4-is-correct-msg").style.color = "Red";
  }

  if (a5 == "burton") {
    score++;
    document.getElementById("q5-is-correct-msg").innerHTML = "Correct";
    document.getElementById("q5-is-correct-msg").style.color = "Green";
  } else {
    document.getElementById("q5-is-correct-msg").innerHTML = "Incorrect";
    document.getElementById("q5-is-correct-msg").style.color = "Red";
  }

  console.log("hi");
  let percentageScore = Math.round((score / 5) * 100);

  // output
  message = "";
  if (score == 5) {
    message = "Great work! Your score is";
  } else {
    message = "Almost there! Your score is";
  }

  document.getElementById(
    "output"
  ).innerHTML = `${message}: ${score}/5 (${percentageScore}%)`;
}
