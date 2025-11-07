const choices = {
  name: "",
  sector: "",
  slogan: ""
};

let step = 1;

function selectOption(type, value) {
  choices[type] = value;
  document.getElementById(`step${step}`).classList.add("hidden");
  step++;
  const nextStep = document.getElementById(`step${step}`);
  if (nextStep) {
    nextStep.classList.remove("hidden");
  } else {
    showResult();
  }
}

function showResult() {
  const pitchCard = document.getElementById("pitchCard");
  pitchCard.innerHTML = `
    <h3>${choices.name}</h3>
    <p><strong>Sector:</strong> ${choices.sector}</p>
    <p><em>"${choices.slogan}"</em></p>
    <hr>
    <p>👏 Ready to pitch at <strong>Web Summit 2025</strong>!</p>
  `;
  document.getElementById("result").classList.remove("hidden");
}

function restartGame() {
  step = 1;
  choices.name = "";
  choices.sector = "";
  choices.slogan = "";
  document.querySelectorAll(".step").forEach((el) => el.classList.add("hidden"));
  document.getElementById("step1").classList.remove("hidden");
}
