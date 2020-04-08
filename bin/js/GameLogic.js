var Sprite = Laya.Sprite;
var Stage = Laya.Stage;
var Texts = Laya.Text;
var Events = Laya.Event;
var Browser = Laya.Browser;
var GameLogic = /** @class */ (function () {
    function GameLogic() {
        this._view = fairygui.UIPackage.createObject("PlantsvsZombies", "gamepanel").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        this.addview();
    }
    GameLogic.prototype.addview = function () {
        fairygui.GRoot.inst.addChild(this._view);
    };
    GameLogic.prototype.gamestart = function () {
        this.producesun = new ProduceSun;
    };
    return GameLogic;
}());
//僵尸生成
//僵尸攻击
var ZombiesAck = /** @class */ (function () {
    function ZombiesAck() {
    }
    return ZombiesAck;
}());
//植物生成
//植物攻击
var PlantsAck = /** @class */ (function () {
    function PlantsAck() {
    }
    return PlantsAck;
}());
//# sourceMappingURL=GameLogic.js.map