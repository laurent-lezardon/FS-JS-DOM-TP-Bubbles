let compteur = 0;
let kills = 0;
const numberOfKills = document.querySelector(".compt");
console.log(numberOfKills);

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);
  // console.log(bubble);
  bubble.classList.add("bubble");
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.width = size;
  bubble.style.height = size;
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  setTimeout(() => {
    bubble.remove();
  }, 8000);
  bubble.addEventListener("click", () => {
    kills += 1;
    numberOfKills.innerText = kills;

    bubble.remove();
  });
};
// bubbleMaker();

setInterval(bubbleMaker, 500);
