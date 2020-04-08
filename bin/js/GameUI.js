var GameUI = /** @class */ (function () {
    function GameUI() {
        this._view = fairygui.UIPackage.createObject("PlantsvsZombies", "gamestart").asCom;
        this._view.getChild("letsgo").asButton.on(Laya.Event.CLICK, this, this.gamestart);
        this._view.getChild("quit").asButton.on(Laya.Event.CLICK, this, this.exit);
    }
    GameUI.prototype.addview = function () {
        fairygui.GRoot.inst.addChild(this._view);
    };
    GameUI.prototype.exit = function () {
        fairygui.GRoot.inst.removeChildren();
    };
    GameUI.prototype.gamestart = function () {
        fairygui.GRoot.inst.removeChildren();
        GameMain.gamelogic = new GameLogic();
    };
    return GameUI;
}());
//# sourceMappingURL=GameUI.js.map