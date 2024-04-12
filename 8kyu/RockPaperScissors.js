const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  const action = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (p2 === action[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
