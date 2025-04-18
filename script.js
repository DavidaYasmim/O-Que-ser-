const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const poemContainer = document.getElementById("poemContainer");
const loveSong = document.getElementById("loveSong");

let yesFontSize = 24; // Tamanho inicial do botão "Sim"

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // Aumenta o tamanho do botão "Sim"
  yesFontSize += 8;
  yesBtn.style.fontSize = `${yesFontSize}px`;

  // Quando "Sim" ficar muito grande, esconde o "Não"
  if (yesFontSize >= 64) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  poemContainer.classList.add("show");
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  if (loveSong) {
    loveSong.play();
  }
});
