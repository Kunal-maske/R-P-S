let img = document.querySelectorAll(".img");
let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");
let msg = document.querySelector(".msg");
let x = document.querySelector("#x");
let y = document.querySelector("#y");
let reset = document.querySelector(".reset");

let us = 0;
let cs = 0;
img.forEach((i) => {
  i.addEventListener("click", () => {
    const userchoice = i.getAttribute("id");
    console.log("your choice :", userchoice);
    x.innerText = "Your choice: " + userchoice;

    const game = (userchoice) => {
      const choices = ["rock", "paper", "scissor"];
      let compchoice = choices[Math.floor(Math.random() * 3)];
      console.log("computer choice :", compchoice);
      y.innerText = "Computer choice: " + compchoice;

      if (userchoice === compchoice) {
        console.log("draw");
        msg.innerText = "draw";
      } else {
        let userWin = true;
        if (userchoice === "rock") {
          userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          userWin = compchoice === "scissor" ? false : true;
        } else {
          userWin = compchoice === "rock" ? false : true;
        }
        const winner = () => {
          if (userWin) {
            us++;
            console.log("User score incremented:", us);
            userscore.innerText = us;
            msg.innerText = "You won!";
            console.log("You won message should display.");
          } else {
            cs++;
            console.log("Computer score incremented:", cs);
            compscore.innerText = cs;
            msg.innerText = "Computer won!";
            console.log("Computer won message should display.");
          }
        };
        winner();
      }
    };
    game(userchoice);
  });
  reset.addEventListener("click", () => {
    us = 0;
    cs = 0;
    msg.innerText = "";
    userscore.innerText = us;
    compscore.innerText = cs;
    x.innerText = "";
    y.innerText = "";
  });
});
