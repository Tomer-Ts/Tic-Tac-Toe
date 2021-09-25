var Player = /** @class */ (function () {
    function Player(mk) {
        this.mark = mk;
    }
    Object.defineProperty(Player.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (v) {
            this.name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "Mark", {
        get: function () {
            return this.mark;
        },
        set: function (v) {
            this.mark = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "IsWinner", {
        get: function () {
            return this.isWinner;
        },
        set: function (v) {
            this.isWinner = v;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
//# sourceMappingURL=player.js.map