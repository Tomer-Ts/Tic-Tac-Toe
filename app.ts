
let user: Player = new User();
let computer: Computer = new Computer();
let board: Board = new Board();

let playerName = prompt("Enter name");
user.Name = playerName;

while (!board.IsFinish) {
    let currentPlayer: Player;

    if (board.IsComputer) {
        currentPlayer = computer;
        computer.play(board);
    }
    else {
        currentPlayer = user;
        user.play(board);
    }

    board.IsComputer = !board.IsComputer;
    board.checkBoard(currentPlayer);
}

if (user.IsWinner) {
    alert(`the winner is ${user.Name}`)
}
else if (computer.IsWinner) {
    alert("the winner is computer");
}
else {
    alert("teeeeeeeko");
}

