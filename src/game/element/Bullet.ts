class Bullet extends Plants {
    public _bullet:fairygui.GGraph;

    constructor(){
        
        super();
    }

    public draw():void{
        this._bullet = fairygui.UIPackage.createObject("PlantsvsZombies","bullet_pea").asGraph;
        //Laya.Tween.to(this._bullet, {x: zombie.x});

    }
}