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
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this, "x") || this;
    }
    User.prototype.play = function (board) {
        var isValid = false;
        var index;
        while (!isValid) {
            index = prompt(board.printBoard() + "enter your move");
            // null = exit game
            if (index == null)
                board.IsFinish = true;
            // validations
            // number between 1-9
            var isNotNumber = isNaN(Number(index));
            if (isNotNumber) {
                alert("input is not a number");
                continue;
            }
            // cast string to number
            var number = Number(index);
            var isNotInRange = number < 1 || number > 9;
            if (isNotInRange) {
                alert("input is not in range");
                continue;
            }
            // is in use
            var i = Math.floor((number - 1) / 3);
            var j = ((number + 2) % 3);
            var isInUse = isNaN(Number(board.CellArray[i][j]));
            if (isInUse) {
                alert("cell is already in use");
                continue;
            }
            // if valid set is valid to true
            isValid = true;
        }
        board.setBoard(Number(index), user);
    };
    return User;
}(Player));
//# sourceMappingURL=User.js.map