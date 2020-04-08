class GameUI {
    public _view:fairygui.GComponent;

    private _grass:fairygui.GGraph;

    constructor() {
        this._view = fairygui.UIPackage.createObject("PlantsvsZombies","gamepanel").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);

        fairygui.GRoot.inst.addChild(this._view);

        this._view.getChild("backhome").asButton.on(Laya.Event.CLICK,this,this.backhome);
        this._grass = this._view.getChild("green").asGraph;

        this.init();
    }
    
    public init():void {
        this._view.visible = true;
    }

    //获取草地大小
    public getGrassSize():{x:number, y:number} {
        return  {x:this._grass.width, y:this._grass.height};
    }

    //获取草地节点
    public getGrassNode():fairygui.GGraph {
        return this._grass;
    }
    
    //返回草地坐标
    public getGrassOffset():{x:number, y:number} {
        return {x:this.getGrassNode().x,y:this.getGrassNode().y}}

    public cleanup (){

    }
    
    //返回主界面
    public backhome():void { 
        this._view.visible = false;
        //调用游戏逻辑类清除数据
        GameLogic.getInstance().cleanup();

        GameMain.gamestartui = new GamestartUI;
        GameMain.gamestartui.addview();
        
    } 
}