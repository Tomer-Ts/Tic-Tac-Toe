var Board = /** @class */ (function () {
    function Board() {
        this.size = 3;
        this.IsFinish = false;
        this.IsComputer = false;
        this.CellArray = [[" 1 ", " 2 ", " 3 "], [" 4 ", " 5 ", " 6 "], [" 7 ", " 8 ", " 9 "]];
    }
    Object.defineProperty(Board.prototype, "CellArray", {
        get: function () {
            return this.cellArray;
        },
        set: function (v) {
            this.cellArray = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "IsFinish", {
        get: function () {
            return this.isFinish;
        },
        set: function (v) {
            this.isFinish = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "IsComputer", {
        get: function () {
            return this.isComputer;
        },
        set: function (v) {
            this.isComputer = v;
        },
        enumerable: false,
        configurable: true
    });
    Board.prototype.printBoard = function () {
        var boarder = "------------\n";
        console.log(this.CellArray);
        for (var i = 0; i < this.CellArray.length; i++) {
            for (var j = 0; j < this.CellArray[i].length; j++) {
                boarder += "| " + this.CellArray[i][j];
            }
            boarder += "\n------------\n";
        }
        return boarder;
    };
    Board.prototype.checkBoard = function (player) {
        debugger;
        this.checkRows(player);
        this.checkColumns(player);
        this.checkDiagonals(player);
        this.checkDraw();
    };
    Board.prototype.checkDiagonals = function (player) {
        // first diagonal
        // (0,0) (1,1) (2,2)
        var value = null;
        var previousValue = null;
        for (var i = 0; i < this.size; i++) {
            value = this.CellArray[i][i];
            var isInUse = this.isInUse(i, i);
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
            var isInUse = this.isInUse(i, 2 - i);
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
    };
    Board.prototype.checkDraw = function () {
        var isDraw = true;
        for (var i = 0; i < this.size; i++) {
            if (!isDraw)
                break;
            for (var j = 0; j < this.size; j++) {
                var isInUse = this.isInUse(i, j);
                if (!isInUse) {
                    isDraw = false;
                    break;
                }
            }
        }
        if (isDraw) {
            board.isFinish = true;
        }
    };
    Board.prototype.checkColumns = function (player) {
        for (var column = 0; column < this.size; column++) {
            if (player.IsWinner)
                break;
            var value = null;
            var previousValue = null;
            for (var row = 0; row < this.size; row++) {
                value = this.CellArray[row][column];
                var isInUse = this.isInUse(row, column);
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
    };
    Board.prototype.checkRows = function (player) {
        for (var row = 0; row < this.size; row++) {
            if (player.IsWinner)
                break;
            var value = null;
            var previousValue = null;
            for (var col = 0; col < this.size; col++) {
                value = this.CellArray[row][col];
                var isInUse = this.isInUse(row, col);
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
    };
    Board.prototype.setBoard = function (index, player) {
        var i = Math.floor((index - 1) / 3);
        var j = ((index + 2) % 3);
        this.CellArray[i][j] = player.Mark;
    };
    Board.prototype.isInUse = function (row, col) {
        var numericValue = Number(this.CellArray[row][col]);
        var isInUse = isNaN(numericValue);
        return isInUse;
    };
    return Board;
}());
//# sourceMappingURL=board.js.map