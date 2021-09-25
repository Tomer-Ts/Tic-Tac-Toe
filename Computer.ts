class Computer extends Player {

    play(board: Board): void {
        this.computerTurn(board);
    }

    constructor() {
        super("o");
    }

    computerTurn(board: Board): void {
        this.setRandomCell(board);

        // for random pick
        // get all free cells = loop over the board and add the free cells value to an array
        // example: free cells values = [4 ,6 ,8 ,2]
        // compouter pick between 0 - 3 (size of the array)

        // and use math.random for index
    }

    private setRandomCell(board: Board): void {
        let freeCells: number[] = [];

        // populate free cells array
        for (var i = 0; i < board.size; i++) {
            for (var j = 0; j < board.size; j++) {

                let isCellInUse = isNaN(Number(board.CellArray[i][j]));

                if (!isCellInUse) {
                    freeCells.push(Number(board.CellArray[i][j]));
                }
            }
        }

        if (freeCells.length === 0)
            return;
        
        let randomCell = freeCells[Math.floor(Math.random() * freeCells.length)];
        board.setBoard(randomCell, this);
    }
}