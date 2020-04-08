var GamestartUI = /** @class */ (function () {
    function GamestartUI() {
        this._view = fairygui.UIPackage.createObject("PlantsvsZombies", "gamestart").asCom;
        this._view.getChild("letsgo").asButton.on(Laya.Event.CLICK, this, this.gamestart);
        this._view.getChild("quit").asButton.on(Laya.Event.CLICK, this, this.exit);
    }
    GamestartUI.prototype.addview = function () {
        fairygui.GRoot.inst.addChild(this._view);
    };
    GamestartUI.prototype.exit = function () {
        fairygui.GRoot.inst.removeChildren();
    };
    GamestartUI.prototype.gamestart = function () {
        fairygui.GRoot.inst.removeChildren();
        GameMain.gamelogic = new GameLogic();
    };
    return GamestartUI;
}());
//# sourceMappingURL=GamestartUI.js.map