import { managePageRouting } from "./manageRouting.js";

const doors = document.querySelector(".house-doors");
const backButton = document.querySelector(".back-button");
const backToHome = document.querySelector(".back-to-home");
const backFromContact = document.querySelector(".back-from-contact");
const goto = document.querySelector(".go-to");
const projectsBook = document.querySelector(".leftside-book");
const contactBook = document.querySelector(".rightside-book");

doors.addEventListener("click", () => {
  managePageRouting("interior");
});

backButton.onclick = backToHome.onclick = () => {
  managePageRouting("main");
};

projectsBook.addEventListener("click", () => {
  managePageRouting("projects");
});

contactBook.onclick = goto.onclick = () => {
  managePageRouting("contact");
};
