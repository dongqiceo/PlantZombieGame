class GameLogic{
    private static instance:GameLogic = null;
    public static getInstance() {
        if (!GameLogic.instance)
            GameLogic.instance = new GameLogic();
            //GameLogic.instance.init();

        return GameLogic.instance;
    }

    public gameUI:GameUI;
    public gameMap:GameMap;
    public playerController:PlayerController;
    //生成陽光
    // TODO
    public sunManager:SunManager;
    //生成僵尸
    //TODO
    public produceZombies:ProduceZombies
    // 植物列表
    public plants:Plants[];

    // 僵尸列表
    public zombies:Zombies[];

    //子弹列表
    public bullet:Bullet[];
    
    //植物计数器  
    private plantNumber:number; 
    //僵尸计数器
    private zombieNumber:number;


    private constructor() {

        this.gameUI = new GameUI();
        //定义地图
        this.gameMap = new GameMap(this.gameUI.getGrassSize(), this.gameUI.getGrassOffset());   
        //绘制临时矩形
        this.gameUI.getGrassNode().setNativeObject(this.gameMap);
        //游戏控制类
        this.playerController = new PlayerController();
        //阳光管理类
        this.sunManager = new SunManager(this.gameUI._view);

        this.plants = [];
        this.zombies = [];
        this.bullet = [];
        
    }

    //开始游戏
    public start() :void {
        this.init();
  
        // let i = new ProduceZombies();
        // this.zombies.push(i.randomzomies());
    }

    // 初始化
    public init():void {
        
        this.gameUI._view.visible = true;
        this.gameUI.init();
        this.gameMap.init(this.gameUI.getGrassSize());
        this.playerController.init();
        this.sunManager.init();

        this.plantNumber = 0;
        this.zombieNumber = 0;

        // TODO lee timer只需要起一个每帧调用的就可以  其他通过自己计算时间来决定是否该执行某个操作
        // 关于时间的获取操作 参考Date类 
        Laya.timer.loop(Utils.ZOMBIE_REFRESH,this,this.listZombie);
        Laya.timer.frameLoop(1, this, this.attack);
    }

    //添加植物列表
    public listPlant():void{
       //生成植物 
            let plant = new Plants();

            this.plants.push(plant);
            this.plants[this.plantNumber].init();
            this.gameUI._view.addChild(this.plants[this.plantNumber]);
            this.plantNumber++;
           
    }
    

    //添加僵尸列表
    public listZombie():void{

            let zombie = new Zombies();

            this.zombies.push(zombie);
            this.zombies[this.zombieNumber].init();
            this.gameUI._view.addChild(this.zombies[this.zombieNumber]);
            this.zombieNumber++;
    }

    /**
     * 攻击判定
     */
    public attack():void {
        for(let p = this.plants.length; p > 0; p--){
            for(let z = this.zombies.length; z > 0; z--){
                let zombie = this.zombies[z-1];
                let plant = this.plants[p-1];

                //将每一个植物实例传入僵尸攻击函数
                zombie.zombiesAck(plant);


                //将每一个僵尸实例传入植物攻击函数（子弹类TODO）
               // this.plants[p-1].plantsAck(zombie);
                
            }
        }

        // TODO lee 问题 removeChild以后没有让plant的数据从this.plants数组中摘除
        for(let p = this.plants.length; p > 0; p--){
            for(let z = this.zombies.length; z > 0; z--){
                
                if(this.plants[p-1].status == PlantStatus.DEAD){
                     this.gameUI._view.removeChild(this.plants[p-1]);
                }

                //  if(this.zombies[z-1].status == ZombieStatus.DEAD){
                //      this.gameUI._view.removeChild(this.zombies[p-1]);
                //  }
                
            }
        }



    }


    //更新状态 todo
    // TODO lee 应该让gamelogic统一管理所有元素的update  不要在每个元素自己内部启动不同的timer
    public update() :void{
        
        // TODO lee 应该在这里处理攻击循环 然后分别调用僵尸和植物的update
        // 攻击和update之间的顺序需要自己去思考和把握
    }

    //获取UI root节点
    public getUIRoot() {
        return this.gameUI;
    }

    //清空变量
    public cleanup():void {
        this.playerController.end();
        this.gameMap.cleanup();
        this.sunManager.cleanup();
        this.plantNumber = 0;
        //清空植物
        for(let i = 0; i < this.plants.length;i++) {
            this.plants[i].cleanup();
            this.gameUI._view.removeChild(this.plants[i]);
        }
        for(let i = 0; i < this.zombies.length;i++) {
            this.zombies[i].cleanup();
            this.gameUI._view.removeChild(this.zombies[i]);
        }
        this.plants.splice(0, this.plants.length);
        this.zombies.splice(0, this.zombies.length);
        this.gameUI._view.visible = false;
    }
    
}