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
var RoadPileZombies = /** @class */ (function (_super) {
    __extends(RoadPileZombies, _super);
    function RoadPileZombies() {
        var _this = _super.call(this) || this;
        _this.blood = 300;
        _this.hurt = 20;
        return _this;
    }
    return RoadPileZombies;
}(Zombies));
//# sourceMappingURL=RoadPileZombies.js.map