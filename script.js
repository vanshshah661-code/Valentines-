function nextPage(num) {
  document.querySelectorAll('.page').forEach(p =>
    p.classList.remove('active')
  );
  document.getElementById(`page${num}`).classList.add('active');
}

function gift(choice) {
  document.body.innerHTML = `
    <h1>You chose: ${choice} 💝</h1>
    <p style="font-size:18px;">Good choice cutu 🥰</p>
    <button onclick="finalGift()">Continue 💕</button>
  `;
}

function finalGift() {
  document.body.innerHTML = `
    <h1>nvm cutu 😌💖</h1>
    <h2>You get EVERYTHING 🫶✨</h2>
    <p>
      Flowers 🌸<br>
      Dates 🌹<br>
      Surprises 🎁<br><br>
      And unlimited love from me 💘
    </p>
  `;
}

/* NO BUTTON RUN AWAY */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 70;
    const y = Math.random() * 70;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "vw";
    noBtn.style.top = y + "vh";
  });
}
