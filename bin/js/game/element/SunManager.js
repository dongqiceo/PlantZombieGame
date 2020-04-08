//阳光管理类
var SunManager = /** @class */ (function () {
    function SunManager(view) {
        this.sunFlag = false;
        this.sun = null;
        this._view = view;
        this.score = 0;
        this.init();
    }
    //初始化，如果太阳为空调用显示
    SunManager.prototype.init = function () {
        this._sunScore = this._view.getChild("score");
        if (this.sun == null) {
            this.dirSun();
        }
        // Laya.stage.frameLoop(5, this, this.update);
    };
    //显示太阳
    SunManager.prototype.dirSun = function () {
        this.sun = fairygui.UIPackage.createObject("PlantsvsZombies", "sun").asCom;
        this.sun.setSize(Utils.SUN_SIZE, Utils.SUN_SIZE);
        var romdanX = Utils.getRandom(Utils.SUN_SIZE, fairygui.GRoot.inst.width - Utils.SUN_SIZE);
        var romdanY = Utils.getRandom(Utils.SUN_SIZE, fairygui.GRoot.inst.height - Utils.SUN_SIZE);
        this.sun.setXY(romdanX, romdanY);
        this._view.addChild(this.sun);
        //显示成功后设置阳光状态
        this.sunFlag = true;
    };
    //拾取阳光
    SunManager.prototype.takeSun = function (x, y) {
        if (this.sunFlag) {
            var sunX = this.sun.x;
            var sunY = this.sun.y;
            if (x > sunX && y > sunY && x < sunX + Utils.SUN_SIZE && sunY + Utils.SUN_SIZE) {
                this._view.removeChild(this.sun);
                this.sun = null;
                this.sunFlag = false;
                this.sunScore();
                // TODO lee 让gamelogic来统一管理timer，不要随便新建
                Laya.timer.loop(Utils.SUN_TIME, this, this.init);
                return false;
            }
        }
        return true;
    };
    //累计得分
    SunManager.prototype.sunScore = function () {
        this.score += Utils.SUN_VALUE;
        this.updateScore();
    };
    //购买植物设定
    // TODO lee 注意函数命名 这个函数并没有执行名字里的功能 只是检测阳光是否充足
    SunManager.prototype.buyPlant = function () {
        if (this.score >= Utils.PEASHOOTER_VALUE) {
            this.score -= Utils.PEASHOOTER_VALUE;
            this.updateScore();
            return true;
        }
        return false;
    };
    SunManager.prototype.update = function () {
    };
    SunManager.prototype.updateScore = function () {
        this._sunScore.text = '' + this.score;
    };
    SunManager.prototype.cleanup = function () {
        this.score = 0;
        this._sunScore.text = '' + this.score;
    };
    return SunManager;
}());
//# sourceMappingURL=SunManager.js.map