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
var Snowpea = /** @class */ (function (_super) {
    __extends(Snowpea, _super);
    function Snowpea() {
        var _this = _super.call(this) || this;
        _this.hurt = 15;
        _this.seepd = 1;
        _this.slow = true;
        _this.isLive = false;
        _this.blood = 100;
        _this.value = 175;
        return _this;
    }
    Snowpea.prototype.shoot = function () {
    };
    return Snowpea;
}(Plants));
//# sourceMappingURL=Snowpea.js.map