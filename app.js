var user = new User();
var computer = new Computer();
var board = new Board();
var playerName = prompt("Enter name");
user.Name = playerName;
while (!board.IsFinish) {
    var currentPlayer = void 0;
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
    //board.IsFinish = true;
}
if (user.IsWinner) {
    alert("the winner is " + user.Name);
}
else if (computer.IsWinner) {
    alert("the winner is computer");
}
else {
    alert("teeeeeeeko");
}
//# sourceMappingURL=app.js.map