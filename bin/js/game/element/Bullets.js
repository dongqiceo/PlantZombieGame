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
var Bullets = /** @class */ (function (_super) {
    __extends(Bullets, _super);
    function Bullets(plant) {
        var _this = _super.call(this) || this;
        _this.plant = plant;
        return _this;
    }
    Bullets.prototype.init = function () {
        this.draw();
        this.impact();
    };
    Bullets.prototype.draw = function () {
        var x = this.plant._plant.x + this.plant._plant.width;
        var y = this.plant._plant.y + 10;
        this._bullet = fairygui.UIPackage.createObject("PlantsvsZombies", "bullet_pea").asImage;
        this._bullet.setSize(24, 24);
        this._bullet.setXY(x, y);
        this.addChild(this._bullet);
    };
    Bullets.prototype.shoot = function () {
    };
    Bullets.prototype.impact = function () {
        Laya.Tween.to(this._bullet, { x: 600 }, 1000);
    };
    return Bullets;
}(fairygui.GComponent));
//# sourceMappingURL=Bullets.js.map