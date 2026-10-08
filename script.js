const welcomeScreen = document.getElementById("welcome-screen");
const mainScreen = document.getElementById("main-screen");
const continueBtn = document.getElementById("continue-btn");

const heartPath = document.querySelector(".heart path");
const cards = document.querySelectorAll(".mystery-card");

// HEART DRAWING

const heartLength = heartPath.getTotalLength();

heartPath.style.strokeDasharray = heartLength;
heartPath.style.strokeDashoffset = heartLength;

heartPath.animate(
  [
    { strokeDashoffset: heartLength },
    { strokeDashoffset: 0 }
  ],
  {
    duration: 2800,
    easing: "ease-in-out",
    fill: "forwards"
  }
);

// HEART GLOW

heartPath.animate(
  [
    { filter: "drop-shadow(0 0 3px rgba(255, 0, 0, 0.5))" },
    { filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.9))" },
    { filter: "drop-shadow(0 0 3px rgba(255, 0, 0, 0.5))" }
  ],
  {
    duration: 1800,
    iterations: Infinity,
    easing: "ease-in-out"
  }
);

// CONTINUE BUTTON

continueBtn.addEventListener("click", function () {
  welcomeScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
});

// MYSTERY CARDS

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("open");
  });
});
