//阳光管理类
class SunManager {
    
    public score:number;
    public sunFlag:boolean = false;
    public _sunScore:fairygui.GObject;
    private _view:fairygui.GComponent;
    public sun:fairygui.GComponent =null;
    
    constructor(view:fairygui.GComponent) {
        this._view = view;
        this.score = 0;
        this.init();
        
    }
    //初始化，如果太阳为空调用显示
    public init() {
        this._sunScore = this._view.getChild("score");
        if(this.sun == null) {
            this.dirSun();
        }
    }

    //显示太阳
    public dirSun() {
            
            this.sun = fairygui.UIPackage.createObject("PlantsvsZombies","sun").asCom;
            this.sun.setSize(Utils.SUN_SIZE,Utils.SUN_SIZE);
        
            let romdanX = Utils.getRandom(Utils.SUN_SIZE,fairygui.GRoot.inst.width-Utils.SUN_SIZE);
            let romdanY = Utils.getRandom(Utils.SUN_SIZE,fairygui.GRoot.inst.height-Utils.SUN_SIZE);
            this.sun.setXY(romdanX,romdanY);
            this._view.addChild(this.sun);
            //显示成功后设置阳光状态
            this.sunFlag = true;
    }
    
    //拾取阳光
    public takeSun(x, y) :boolean{
        if (this.sunFlag){
            let sunX = this.sun.x;
            let sunY = this.sun.y;
        
            if (x > sunX && y > sunY && x < sunX+Utils.SUN_SIZE && sunY + Utils.SUN_SIZE){
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
    }

    //累计得分
    public sunScore() {
        this.score += Utils.SUN_VALUE;
        this.updateScore();
    }

    //购买植物设定
    // TODO lee 注意函数命名 这个函数并没有执行名字里的功能 只是检测阳光是否充足
    public buyPlant() {
        if(this.score >= Utils.PEASHOOTER_VALUE){
            this.score -= Utils.PEASHOOTER_VALUE;
            this.updateScore();
            return true;
        }
        return false;
    }

    public update(){
        
    }


    public updateScore(){
         this._sunScore.text = ''+this.score;
    }


    public cleanup(){
        this.score = 0;
        this._sunScore.text = ''+this.score;
    }
}