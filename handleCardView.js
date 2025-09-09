let active = 2;
const cards = document.querySelectorAll(".project-card");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

export function handleCardView() {
  cards[active].style.transform = "none";
  cards[active].style.filter = "none";
  cards[active].style.zIndex = 1;
  cards[active].style.opacity = 1;

  let j = 0;
  for (let i = active + 1; i < cards.length; i++) {
    j++;
    cards[i].style.transform = `translateX(${120 * j}px) scale(${
      1 - 0.2 * j
    }) perspective(16px) rotateY(-1deg)`;
    cards[i].style.filter = "blur(5px)";
    cards[i].style.zIndex = -j;
    cards[i].style.opacity = j > 2 ? 0 : 0.6;
  }

  j = 0;
  for (let i = active - 1; i >= 0; i--) {
    j++;
    cards[i].style.transform = `translateX(${-120 * j}px) scale(${
      1 - 0.2 * j
    }) perspective(16px) rotateY(1deg)`;
    cards[i].style.filter = "blur(5px)";
    cards[i].style.zIndex = -j;
    cards[i].style.opacity = j > 2 ? 0 : 0.6;
  }
}

function handlePrevClick() {
  active = active - 1 >= 0 ? active - 1 : active;
  handleCardView();
}

prev.onclick = handlePrevClick;

function handleNextClick() {
  active = active + 1 < cards.length ? active + 1 : active;
  handleCardView();
}

next.onclick = handleNextClick;

export { handlePrevClick, handleNextClick };
