import {
  handleCardView,
  handleNextClick,
  handlePrevClick,
} from "./handleCardView.js";

let currPage = "main";

const house = document.querySelector(".house");
const houseInterior = document.querySelector(".house-interior");
const propertyBoard = document.querySelector(".property-board");
const moreAboutBooks = document.querySelector(".more-about-books");
const projects = document.querySelector(".projects");
const contactCard = document.querySelector(".contact-card");
const goto = document.querySelector(".go-to");
const portfolioTitle = document.querySelector(".portfolio__title");
const body = document.querySelector("body");

export function managePageRouting(newPage) {
  currPage = newPage;

  switch (currPage) {
    case "main": {
      portfolioTitle.style.display = "block";
      body.style.background =
        "linear-gradient(rgb(199, 252, 245) 50%, rgb(2, 163, 16) 50%)";
      house.style.display = "block";
      propertyBoard.style.display = "flex";
      houseInterior.style.display = "none";
      moreAboutBooks.style.display = "none";
      break;
    }

    case "interior": {
      portfolioTitle.style.display = "none";
      house.style.display = "none";
      propertyBoard.style.display = "none";
      houseInterior.style.display = "block";
      break;
    }

    case "projects": {
      portfolioTitle.style.display = "none";
      body.style.background = "linear-gradient(135deg, #ff0000, #0000ff)";
      house.style.display = "none";
      propertyBoard.style.display = "none";
      houseInterior.style.display = "none";
      moreAboutBooks.style.display = "flex";
      projects.style.display = "flex";
      contactCard.style.display = "none";
      goto.style.display = "flex";
      handleCardView();
      break;
    }

    case "contact": {
      portfolioTitle.style.display = "none";
      body.style.background = "linear-gradient(135deg, #ff0000, #0000ff)";
      house.style.display = "none";
      propertyBoard.style.display = "none";
      houseInterior.style.display = "none";
      moreAboutBooks.style.display = "flex";
      projects.style.display = "none";
      contactCard.style.display = "flex";
      goto.style.display = "none";
    }
  }
}

document.addEventListener("keydown", (e) => {
  if (currPage === "projects") {
    if (e.key === "ArrowLeft") {
      handlePrevClick();
    } else if (e.key === "ArrowRight") {
      handleNextClick();
    }
  }
});
