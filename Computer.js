var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer() {
        return _super.call(this, "o") || this;
    }
    Computer.prototype.play = function (board) {
        this.computerTurn(board);
    };
    Computer.prototype.computerTurn = function (board) {
        this.setRandomCell(board);
        // for random pick
        // get all free cells = loop over the board and add the free cells value to an array
        // example: free cells values = [4 ,6 ,8 ,2]
        // compouter pick between 0 - 3 (size of the array)
        // and use math.random for index
    };
    Computer.prototype.setRandomCell = function (board) {
        var freeCells = [];
        // populate free cells array
        for (var i = 0; i < board.size; i++) {
            for (var j = 0; j < board.size; j++) {
                var isCellInUse = isNaN(Number(board.CellArray[i][j]));
                if (!isCellInUse) {
                    freeCells.push(Number(board.CellArray[i][j]));
                }
            }
        }
        if (freeCells.length === 0)
            return;
        var randomCell = freeCells[Math.floor(Math.random() * freeCells.length)];
        board.setBoard(randomCell, this);
    };
    return Computer;
}(Player));
//# sourceMappingURL=Computer.js.map