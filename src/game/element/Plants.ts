//植物基类

enum PlantStatus {
    ATTACK,
    WAIT,
    DEAD,
    HURT        //被攻击状态(持续减伤)
}
class Plants extends fairygui.GComponent {
    public blood:number;
    public hurt:number;
    public seepd:number;
    public value:number;
    public _plant:fairygui.GMovieClip;
    public status:PlantStatus;

    private zombie:Zombies;
    private size:any;
    constructor(){
        super();
        this.value = Utils.PEASHOOTER_VALUE;
        this.blood = Utils.PLANT_BLOOD; 
        this.hurt =  Utils.PLANT_HURT;
        
    }

    //植物初始化
    public init():void {
        //初始化植物位置
        this.size = Scenes.getInstance().gameMap.getSinglePos();
        let mapPos = Scenes.getInstance().gameMap.getMapPos();

        //绘制植物
        this._plant = fairygui.UIPackage.createObject("PlantsvsZombies","pea").asMovieClip;
        this._plant.setSize(this.size.x, this.size.y);
        this._plant.setXY(mapPos.x, mapPos.y);
        this._plant.playing = true;
        this.addChild(this._plant);
   
        // TODO lee 让gamelogic来统一管理timer，不要每个类自己新建timer  关于时间间隔、速度等，自己用变量记录来管理
        // 例如记录上一次执行某个操作的时间 当update函数再一次被gamelogic调用的时候 判断当前时间和上一次执行操作的时间间隔是否满足需要的间隔
        // 当间隔满足需求时 再一次执行某个操作并记录下时间
       
    }


    //植物是否可攻击判定，设定攻击状态，攻击频率控制
    public checkAck(zombiePlace:any) {
            
        //植物判定僵尸位置（如果植物格子内则进行操作）
        if(this._plant.y == zombiePlace.y && zombiePlace.x > this._plant.x - this.size.x){
            return true;
        }
            
            return false;
        }

    //受伤函数 减血
    public setlessHp(hurt) {
        if(this.blood > hurt){
            this.blood -= hurt;
            this.status = PlantStatus.HURT;
        }
        else{
            this.status = PlantStatus.DEAD;
            
        }
    }
    
    // hurtZombie
    // public hurtZombie(zombie:Zombies) {
    //     //变为攻击状态
    //     //this.status = PlantStatus.ATTACK;

    //     //zombie.lessBlood(this);

    //     if(zombie.status == ZombieStatus.DEAD)
    //         this.status = PlantStatus.WAIT;

    // }

    //死亡处理
    public dead(){


    }

    //攻击方式，近战或射击，射击调用射击方法
    public attack(){

    }

    //射击方法 ，返回射击参数，位置，方向
    public getShootParameter(){


    }

        
    //状态判定
        //坐标
        //攻击    a.攻击检测
            //        b.攻击      近战
            //                    远程
    public update() {
         switch (this.status){
            case PlantStatus.ATTACK:
                
                break;
            case PlantStatus.DEAD:

                break;
            case PlantStatus.WAIT:
                
                break;
            case PlantStatus.HURT:
                
                break;
            
        }
    }

    //清理变量
    public cleanup() {
        
        this.removeChild(this._plant);

    }

}