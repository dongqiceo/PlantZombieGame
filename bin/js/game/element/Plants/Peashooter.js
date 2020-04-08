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
//植物种类
var Peashooter = /** @class */ (function (_super) {
    __extends(Peashooter, _super);
    function Peashooter() {
        var _this = _super.call(this) || this;
        _this.hurt = 20;
        _this.seepd = 1;
        _this.blood = 100;
        _this.value = 100;
        return _this;
    }
    Peashooter.prototype.shoot = function () {
    };
    return Peashooter;
}(Plants));
//# sourceMappingURL=Peashooter.js.map