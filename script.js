let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let play = document.querySelector(".play");
let isAutoPlay = true;
let intervalId;

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

play.addEventListener("click", () => {
  isAutoPlay = !isAutoPlay;
  if (isAutoPlay) {
    document.querySelector(".play").textContent = "Pause";
    intervalId = setInterval(nextslide, 2000);
  } else {
    clearInterval(intervalId);
    document.querySelector(".play").textContent = "Play";
  }
});

function nextslide() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}

if (isAutoPlay) {
  intervalId = setInterval(nextslide, 2000);
}
