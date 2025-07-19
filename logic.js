let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = (userChoice, computerChoice) => {
  console.log("its a draw");
  msg.innerHTML = `Its a draw! You chose ${userChoice} and Computer chose ${computerChoice}`;
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    msg.innerHTML = `You Won! You chose ${userChoice} and Computer chose ${computerChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerHTML = userScore;
  } else {
    msg.innerHTML = `You lost! You chose ${userChoice} and Computer chose ${computerChoice}`;
    msg.style.backgroundColor = "red";
    computerScore++;
    computerScorePara.innerHTML = computerScore;
  }
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    drawGame(userChoice, computerChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
