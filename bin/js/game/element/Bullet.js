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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(plant) {
        return _super.call(this) || this;
    }
    Bullet.prototype.init = function () {
        this.draw();
    };
    Bullet.prototype.draw = function () {
        var x = this.plant.x + this.plant.width;
        var y = this.plant.y + 10;
        this._bullet = fairygui.UIPackage.createObject("PlantsvsZombies", "bullet_pea").asImage;
        this._bullet.setXY(x, y);
        this.addChild(this._bullet);
    };
    Bullet.prototype.impact = function (zombie) {
        Laya.Tween.to(this._bullet, { x: zombie.x }, 2000);
    };
    return Bullet;
}(fairygui.GComponent));
//# sourceMappingURL=Bullet.js.map