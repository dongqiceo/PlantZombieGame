class Bullets extends fairygui.GComponent{
    public _bullet:fairygui.GImage;


    constructor(){
        super();
    }

    public init():void{
        let x = plant.x + width;
        let y = plant.y + 10; 
        this._bullet = fairygui.UIPackage.createObject("PlantsvsZombies","bullet_pea").asImage;
        this._bullet.setSize(24,24);
        this._bullet.setXY(x, y);
        this.addChild(this._bullet);
    }

    //移动
    public move(){
        
    }

    //子弹生命结束
    public die(){

    }

    //子弹伤害
    public damage(hurt){

    }

}