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
var SunFlower = /** @class */ (function (_super) {
    __extends(SunFlower, _super);
    function SunFlower() {
        var _this = _super.call(this) || this;
        _this.isLive = false;
        _this.sun = false;
        _this.blood = 50;
        _this.value = 50;
        return _this;
    }
    return SunFlower;
}(Plants));
//# sourceMappingURL=SunFlower.js.map