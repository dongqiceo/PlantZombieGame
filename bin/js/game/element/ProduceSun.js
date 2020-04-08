//阳光管理类
var ProduceSun = /** @class */ (function () {
    function ProduceSun(view) {
        this.sun = null;
        this.sunvalue = 25;
        this._view = view;
        this.score = 0;
        this.init();
    }
    ProduceSun.prototype.init = function () {
        if (this.sun == null) {
            this.dirsun();
        }
    };
    //显示太阳
    ProduceSun.prototype.dirsun = function () {
        this.sun = fairygui.UIPackage.createObject("PlantsvsZombies", "sun").asCom;
        this.sun.setSize(Utils.SUN_SIZE, Utils.SUN_SIZE);
        var romdanX = GameLogic.getRandomIntInclusive(Utils.SUN_SIZE, fairygui.GRoot.inst.width - Utils.SUN_SIZE);
        var romdanY = GameLogic.getRandomIntInclusive(Utils.SUN_SIZE, fairygui.GRoot.inst.height - Utils.SUN_SIZE);
        this.sun.setXY(romdanX, romdanY);
        this._view.addChild(this.sun);
        // var sp = new Laya.Sprite();
        // sp.addChild(sun.displayObject);
    };
    ProduceSun.prototype.takesun = function (x, y) {
        var sunX = this.sun.x;
        var sunY = this.sun.y;
        if (x > sunX && y > sunY && x < sunX + Utils.SUN_SIZE && sunY + Utils.SUN_SIZE) {
            this._view.removeChild(this.sun);
            this.sun = null;
            this.sunplus(true);
            this.init();
            return false;
        }
        return true;
    };
    ProduceSun.prototype.sunplus = function (i) {
        if (i)
            this.score += this.sunvalue;
        this._view.getChild("score").text = "得分：" + this.score;
    };
    ProduceSun.prototype.cleanup = function () {
        this.score = 0;
    };
    return ProduceSun;
}());
//# sourceMappingURL=ProduceSun.js.map