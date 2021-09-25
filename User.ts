class User extends Player {
    constructor() {
        super("x");
       
    }


    play(board: Board): void {        
        let isValid = false;
        let index;

        while (!isValid) {
            index = prompt(board.printBoard() + "enter your move");

            // null = exit game
            if (index == null)
                board.IsFinish = true;

            // validations
            // number between 1-9
            let isNotNumber = isNaN(Number(index));
            if (isNotNumber) {
                alert("input is not a number")
                continue;
            }

            // cast string to number
            let number = Number(index);

            let isNotInRange = number < 1 || number > 9;
            if (isNotInRange) {
                alert("input is not in range")
                continue;
            }

            // is in use
            let i: number = Math.floor((number - 1) / 3);
            let j: number = ((number + 2) % 3);

            let isInUse = isNaN(Number(board.CellArray[i][j]))
            if (isInUse) {
                alert("cell is already in use")
                continue;
            }

            // if valid set is valid to true
            isValid = true;
        }

        board.setBoard(Number(index), user);
    }
}