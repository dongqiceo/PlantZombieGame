//阳光生成
var ProduceSun = /** @class */ (function () {
    function ProduceSun() {
        this.sunvalue = 25;
        this.score = 0;
        this.producetime = 5;
    }
    ProduceSun.prototype.dirsun = function () {
        this._view = fairygui.UIPackage.createObject("PlantsvsZombies", "sun").asCom;
    };
    ProduceSun.prototype.sunplus = function () {
        this.score += this.sunvalue;
    };
    return ProduceSun;
}());
//阳光拾取
var takesun = /** @class */ (function () {
    function takesun() {
    }
    return takesun;
}());
//# sourceMappingURL=ProduceSun.js.map