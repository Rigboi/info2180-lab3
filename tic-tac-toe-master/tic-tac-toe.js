document.addEventListener("DOMContentLoaded", () => {
  const Slots = document.querySelectorAll("#board div");

  Slots.forEach((div) => {
    div.classList.add("square");
  });
});
