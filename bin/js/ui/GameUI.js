var GameUI = /** @class */ (function () {
    function GameUI() {
        this._view = fairygui.UIPackage.createObject("PlantsvsZombies", "gamepanel").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._view.getChild("backhome").asButton.on(Laya.Event.CLICK, this, this.backhome);
        this._grass = this._view.getChild("green").asGraph;
        this.init();
    }
    GameUI.prototype.init = function () {
        this._view.visible = true;
    };
    //获取草地大小
    GameUI.prototype.getGrassSize = function () {
        return { x: this._grass.width, y: this._grass.height };
    };
    //获取草地节点
    GameUI.prototype.getGrassNode = function () {
        return this._grass;
    };
    //返回草地坐标
    GameUI.prototype.getGrassOffset = function () {
        return { x: this.getGrassNode().x, y: this.getGrassNode().y };
    };
    GameUI.prototype.cleanup = function () {
    };
    //返回主界面
    GameUI.prototype.backhome = function () {
        this._view.visible = false;
        //调用游戏逻辑类清除数据
        GameLogic.getInstance().cleanup();
        GameMain.gamestartui = new GamestartUI;
        GameMain.gamestartui.addview();
    };
    return GameUI;
}());
//# sourceMappingURL=GameUI.js.map