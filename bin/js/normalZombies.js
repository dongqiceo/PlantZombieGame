var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var normalZombies = /** @class */ (function (_super) {
    __extends(normalZombies, _super);
    function normalZombies() {
        var _this = _super.call(this) || this;
        _this.blood = 200;
        _this.hurt = 15;
        _this.isLive = true;
        return _this;
    }
    return normalZombies;
}(Zombies));
//# sourceMappingURL=normalZombies.js.map