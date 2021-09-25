class Board {
    private cellArray: string[] [];
    set CellArray(v: string[][]) {
        this.cellArray = v;
    }
    get CellArray(): string[][] {
        return this.cellArray;
    }
    private isFinish: boolean;
    set IsFinish(v: boolean) {
        this.isFinish = v;
    }
    get IsFinish(): boolean {
        return this.isFinish;
    }

    private isComputer: boolean;
    set IsComputer(v: boolean) {
        this.isComputer = v;
    }
    get IsComputer(): boolean {
        return this.isComputer;
    }
    readonly size = 3;
    
  

    constructor() {
        this.IsFinish = false;
        this.IsComputer = false;
        this.CellArray = [[" 1 ", " 2 ", " 3 "],[" 4 ", " 5 ", " 6 "], [" 7 ", " 8 ", " 9 "]];
        
    }

    printBoard() {
        let boarder: string = "------------\n";
        console.log(this.CellArray);
        for (let i = 0; i < this.CellArray.length; i++) {
            for (let j = 0; j < this.CellArray[i].length; j++) {
                boarder +=`| ${this.CellArray[i][j] }`
            }
            boarder += `\n------------\n`;
        }
        return boarder;
    }

    checkBoard(player: Player) {
        debugger;

        this.checkRows(player);
        this.checkColumns(player);
        this.checkDiagonals(player);
        this.checkDraw();
    }

    checkDiagonals(player: Player) {

        // first diagonal
        // (0,0) (1,1) (2,2)
        let value = null;
        let previousValue = null;

        for (var i = 0; i < this.size; i++) {
            value = this.CellArray[i][i];

            let isInUse = this.isInUse(i, i);
            if (!isInUse)
                break; // go to the next row

            // on first check
            if (previousValue == null) {
                previousValue = value;
                continue; // go to next column
            }

            // different values
            if (previousValue != value)
                break; // go to the next row

            // values are even
            if (i == this.size - 1 && previousValue == value) { // last loop
                player.IsWinner = true;
                board.isFinish = true;
            }
        }

        // second diagonal
        // (0,2) (1,1) (2,0)

        value = null;
        previousValue = null;

        for (var i = 0; i < this.size; i++) {
            value = this.CellArray[i][2 - i];

            let isInUse = this.isInUse(i, 2 - i);
            if (!isInUse)
                break; // go to the next row

            // on first check
            if (previousValue == null) {
                previousValue = value;
                continue; // go to next column
            }

            // different values
            if (previousValue != value)
                break; // go to the next row

            // values are even
            if (i == this.size - 1 && previousValue == value) { // last loop
                player.IsWinner = true;
                board.isFinish = true;
            }
        }
    }

    checkDraw() {
        let isDraw: boolean = true;

        for (var i = 0; i < this.size; i++) {
            if (!isDraw)
                break;

            for (var j = 0; j < this.size; j++) {
                let isInUse = this.isInUse(i, j);

                if (!isInUse) {
                    isDraw = false;
                    break;
                }
            }
        }

        if (isDraw) {
            board.isFinish = true;
        }
    }

    checkColumns(player: Player) {
        for (var column = 0; column < this.size; column++) {
            if (player.IsWinner)
                break;

            let value = null;
            let previousValue = null;

            for (var row = 0; row < this.size; row++) {
                value = this.CellArray[row][column];

                let isInUse = this.isInUse(row, column);
                if (!isInUse)
                    break; // go to the next row

                // on first check
                if (previousValue == null) {
                    previousValue = value;
                    continue; // go to next column
                }

                // different values
                if (previousValue != value)
                    break; // go to the next row

                // values are even
                if (row == this.size - 1 && previousValue == value) { // last loop
                    player.IsWinner = true;
                    board.isFinish = true;
                }
            }
        }
    }

    checkRows(player: Player) {
        for (var row = 0; row < this.size; row++) {
            if (player.IsWinner)
                break;

            let value = null;
            let previousValue = null;

            for (var col = 0; col < this.size; col++) {
                value = this.CellArray[row][col];

                let isInUse = this.isInUse(row, col);
                if (!isInUse)
                    break; // go to the next row

                // on first check
                if (previousValue == null) {
                    previousValue = value;
                    continue; // go to next column
                }

                // different values
                if (previousValue != value)
                    break; // go to the next row

                // values are even
                if (col == this.size - 1 && previousValue == value) { // last loop
                    player.IsWinner = true;
                    board.isFinish = true;
                }
            }
        }
    }

    setBoard(index: number, player: Player) {
        let i: number = Math.floor((index - 1) / 3);
        let j: number = ((index+2) % 3);
        this.CellArray[i][j] = player.Mark;
    }

    private isInUse(row: number, col: number): boolean {
        let numericValue = Number(this.CellArray[row][col]);
        let isInUse = isNaN(numericValue);

        return isInUse;
    }
}
