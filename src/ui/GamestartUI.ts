class GamestartUI{
    private _view:fairygui.GComponent;
    constructor(){
        this._view = fairygui.UIPackage.createObject("PlantsvsZombies","gamestart").asCom;
        this._view.getChild("letsgo").asButton.on(Laya.Event.CLICK,this,this.gamestart);
        this._view.getChild("quit").asButton.on(Laya.Event.CLICK,this,this.exit);
    }
    
    addview() {
        fairygui.GRoot.inst.addChild(this._view);
    }

    exit(){
        fairygui.GRoot.inst.removeChild(this._view);
    }

    gamestart(){
        fairygui.GRoot.inst.removeChild(this._view);
        Scenes.getInstance().init();
}
}