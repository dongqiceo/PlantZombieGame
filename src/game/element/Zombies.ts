//僵尸基类

enum ZombieStatus {
    ATTACK,             //攻击
    MOVE,               //移动
    DEAD,               //死亡
    HURT                //被攻击状态(持续减伤)
}

class Zombies extends fairygui.GComponent{
    // TODO lee 属性或变量的名称尽量统一 不要有的带下划线有的不带
    
    public blood:number;            //血量
    public hurt:number;             //攻击伤害
    public _zombie:fairygui.GMovieClip;
    public size:any;                //接收单元格大小设置僵尸大小
    public moveingTween:any;        //缓动变量
    public status:ZombieStatus;     //僵尸状态

    private plant:Plants;           //植物实例
    private singlePos:number;       //僵尸单位移动坐标轴

    constructor() {
        super();
        this.blood = Utils.ZOMBIE_BLOOD;
        this.hurt = Utils.ZOMBIE_HURT;
       
    }

    //僵尸初始化
    public init():void{
        this.size = Scenes.getInstance().gameMap.getSinglePos();
        let mapLine = Scenes.getInstance().gameMap.mapLine();
        let i = Utils.getRandom(0,Utils.MAP_LINE);
        this.singlePos = mapLine[i];
        
        this._zombie = fairygui.UIPackage.createObject("PlantsvsZombies","normalZombie").asMovieClip;
        this._zombie.setSize(this.size.x * 1.8,this.size.y * 1.1);
        this._zombie.setXY(fairygui.GRoot.inst.width, this.singlePos);
        this._zombie.playing = true;
        this.addChild(this._zombie);
        this.moveingTween = Laya.Tween.to(this._zombie, { x: 0}, Utils.MOVE_SPEED);
    }

    //移动管理，方向，速度，停止 
    public move(){

    }

    //僵尸是否可攻击判定,攻击频率控制
    public checkAck(plantPlace:any) {
        if(plantPlace != null){
            if(plantPlace.y == this._zombie.y && plantPlace.x >= this._zombie.x && this._zombie.x > plantPlace.x - this.size.x) {
                    
            }
        }
    }


    // public hurtPlant(plant:Plants) {
    //     // 播放攻击动画

    //     //让僵尸停下转换攻击状态
    //     this.moveingTween.pause();
    //     //this.status = ZombieStatus.ATTACK;

    //     // 让植物掉血
    //     plant.lessBlood(this);

    //     if(plant.status == PlantStatus.DEAD)
    //         this.status = ZombieStatus.MOVE;
    // }


    //受伤函数 减血
    public setlessHp(plant:Plants){

        // TODO lee 这里不应该是判断this.blood>0  而是应该判断 this.blood > plant.hurt(√)
        if(this.blood > plant.hurt){

            this.blood -= plant.hurt;
            this.status = ZombieStatus.HURT;
        }
        else{
            this.status = ZombieStatus.DEAD;
        }
    }

    //死亡处理
    public dead(){

    }

    //更新当前僵尸状态 移动更新 是否攻击
    public update(){
        switch (this.status){
            case ZombieStatus.ATTACK:
                
                break;
            case ZombieStatus.DEAD:
               
                break;
            case ZombieStatus.MOVE:{
                this.moveingTween.resume();
                break;
            }
            case ZombieStatus.HURT:
   
                break;
        }
    }



    public cleanup() {
        this.removeChild(this._zombie);
    }
    
}



