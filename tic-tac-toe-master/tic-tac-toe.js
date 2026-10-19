document.addEventListener("DOMContentLoaded", () => {
  const Slots = document.querySelectorAll("#board div");

  let turn = "O";

  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let boardState = Array(9).fill("");

  Slots.forEach((div, index) => {
    div.classList.add("square");
    div.classList.add("hover");
    div.addEventListener("click", () => {
      if (div.textContent === "" && turn === "O") {
        div.textContent = "O";
        boardState[index] = "O";
        turn = "X";
      } else if (div.textContent === "" && turn === "X") {
        div.textContent = "X";
        boardState[index] = "X";
        turn = "O";
      }

      const winner = winningCombos.forEach((Combos) => {
        if (Combos.every((index) => boardState[index] === "O")) {
          document.getElementById("status").textContent =
            "Congratulations! O is the Winner!";
        } else if (Combos.every((index) => boardState[index] === "X")) {
          document.getElementById("status").textContent =
            "Congratulations! X is the Winner!";
        }
      });
    });
  });

  const resetButton = document.querySelector(".controls .btn");
  resetButton.addEventListener("click", () => {
    boardState = Array(9).fill("");
    Slots.forEach((div) => {
      div.textContent = "";
    });
    document.getElementById("status").textContent =
      "Move your mouse over a square and click to play an X or an O.";
    turn = "O";
  });
});
