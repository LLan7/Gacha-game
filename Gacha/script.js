let pullCount = 0;
let results = [];
const maxPulls = 10;

let num1, num2, correctAnswer;

window.onload = function () {
  generateMathProblem();
};

function generateMathProblem() {
  num1 = Math.floor(Math.random() * 90) + 10; // 10–99
  num2 = Math.floor(Math.random() * 90) + 10;
  correctAnswer = num1 * num2;
  document.getElementById("mathProblem").textContent = `${num1} × ${num2}`;
}

function checkMathAnswer() {
  const userAnswer = parseInt(document.getElementById("mathAnswer").value);
  if (userAnswer === correctAnswer) {
    alert("✅ Correct! You can now start the gacha.");
    document.getElementById("gachaArea").style.display = "block";  // 👈 显示抽卡区
  } else {
    alert("❌ Incorrect. Try again.");
  }
}

function pullGacha() {
  if (pullCount >= maxPulls) {
    alert("You have reached the maximum number of pulls (10).");
    return;
  }

  const roll = Math.random() * 100;
  let result = "";

  if (roll < 60) {
    result = "Common";
  } else if (roll < 85) {
    result = "Uncommon";
  } else if (roll < 98) {
    result = "Rare";
  } else {
    result = "Super Rare"; // 2% chance
  }

  pullCount++;
  results.push(result);

  document.getElementById("pullCount").textContent = pullCount;
  const list = document.getElementById("resultList");
  const item = document.createElement("li");
  item.textContent = `Pull ${pullCount}: ${result}`;
  list.appendChild(item);
}

function endSession() {
  alert(`Session complete!\nTotal pulls: ${pullCount}\nResults:\n${results.join(", ")}`);
}
