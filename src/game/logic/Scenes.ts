class Scenes{
    private static instance:Scenes = null;
    public static getInstance() {
        if (!Scenes.instance)
            Scenes.instance = new Scenes();

        return Scenes.instance;
    }
  
    public gameUI:GameUI;

    public gameMap:GameMap;

    //阳光分数
    public sunScore:number;


    // 植物列表
    public plants:Plants[];

    // 僵尸列表
    public zombies:Zombies[];

    //子弹列表
    public bullets:Bullets[];
    
    //植物计数器  
    private plantNumber:number; 
    //僵尸计数器
    private zombieNumber:number;
    //子弹计数器
    private bulletNumber:number;

    //僵尸边界
    private deadLine:number;

    private constructor() {

        this.gameUI = new GameUI();
        //定义地图
        this.gameMap = new GameMap(this.gameUI.getGrassSize(), this.gameUI.getGrassOffset());   

        //游戏控制类
        //this.playerController = new PlayerController();
        //阳光管理类
        //this.sunManager = new SunManager(this.gameUI._view)
        
    }

    // 初始化
    public init():void {

        this.plants = [];
        this.zombies = [];
        this.bullets = [];
        this.gameUI._view.visible = true;
        this.gameUI.init();
        this.gameMap.init();
        //this.playerController.init();
        //this.sunManager.init();

        this.plantNumber = 0;
        this.zombieNumber = 0;
        this.bulletNumber = 0;

        // TODO lee timer只需要起一个每帧调用的就可以  其他通过自己计算时间来决定是否该执行某个操作
        // 关于时间的获取操作 参考Date类 
        //间隔时间生成僵尸
        Laya.timer.loop(Utils.ZOMBIE_REFRESH,this,this.createZombie);
        Laya.timer.frameLoop(1, this, this.update);

    }

    public eventListen():void{
        //添加舞台监听事件,监听鼠标按下
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
    }
    
    //事件
    public onMouseDown():void{
        let x = Laya.stage.mouseX;
        let y = Laya.stage.mouseY;
        //let sunClass = Scenes.getInstance().sunManager;
        //let gameMapClass = Scenes.getInstance().gameMap;
        // if(sunClass.takeSun(x, y)){
        //     if(gameMapClass.posToGridIndex(x, y)){   //设定坐标并判断坐标内精灵是否唯一
        //          this.createPlant();           //在点击坐标内显示植物           
        //     }    
        // }

        
    }

    //阳光管理器
    public SunManager() {
        let sun = fairygui.UIPackage.createObject("PlantsvsZombies","sun").asCom;
        sun.setSize(Utils.SUN_SIZE,Utils.SUN_SIZE);
        let romdanX = Utils.getRandom(Utils.SUN_SIZE,fairygui.GRoot.inst.width-Utils.SUN_SIZE);
        let romdanY = Utils.getRandom(Utils.SUN_SIZE,fairygui.GRoot.inst.height-Utils.SUN_SIZE);
        sun.setXY(romdanX,romdanY);
        this.gameUI._view.addChild(sun);
    }

    //添加植物
    public createPlant(gridPos:Point):void{
       //生成植物 
            let plant = new Plants();

            this.plants.push(plant);
            this.plants[this.plantNumber].init();
            this.gameUI._view.addChild(this.plants[this.plantNumber]);
            
            this.plantNumber++;
            
    }
    
    //添加僵尸
    public createZombie(gridPos:Point):void{

            let zombie = new Zombies();


            this.zombies.push(zombie);
            this.zombies[this.zombieNumber].init();
            this.gameUI._view.addChild(this.zombies[this.zombieNumber]);
            this.zombieNumber++;
    }

    //创建子弹  (TODO)
    public createBullet(plantPos:Point){
        let bullet = new Bullets();


        this.bullets.push(bullet);
        this.bullets[this.bulletNumber].init();
        this.gameUI._view.addChild(this.bullets[this.bulletNumber]);
        this.bulletNumber++;
    }
    
    //攻击判定
    public attack():void {
        for(let p = this.plants.length; p > 0; p--){
            for(let z = this.zombies.length; z > 0; z--){
                let zombie = this.zombies[z-1];
                let plant = this.plants[p-1];

                //将每一个植物坐标传入僵尸攻击函数
                zombie.checkAck();

                //将每一个僵尸坐标传入植物攻击函数（子弹类 TODO）
                plant.checkAck()

            }
        }

        // TODO lee 问题 removeChild以后没有让plant的数据从this.plants数组中摘除（√）
        for(let p = this.plants.length; p > 0; p--){
                if(this.plants[p-1].status == PlantStatus.DEAD){
                     this.gameUI._view.removeChild(this.plants[p-1]);
                     this.plants.splice(p-1, 1);
                     this.plantNumber--;
                }
        }
        for(let z = this.zombies.length; z > 0; z--){
                //如果僵尸死亡或者到达边界则删除
                 if(this.zombies[z-1].status == ZombieStatus.DEAD || this.zombies[z-1]._zombie.x == 0){
                     this.gameUI._view.removeChild(this.zombies[z-1]);
                     this.zombies.splice(z-1, 1);
                     this.zombieNumber--;
                 }
                
        }

    }


    //更新状态 todo
    // TODO lee 应该让Scenes统一管理所有元素的update  不要在每个元素自己内部启动不同的timer
    public update():void{
        //1.检测游戏状态
        //2.更新所有节点状态  a.坐标  b.小太阳
        //3.碰撞检测
        //attack()    主要攻击方法
        
        // TODO lee 应该在这里处理攻击循环 然后分别调用僵尸和植物的update
        // 攻击和update之间的顺序需要自己去思考和把握
        // 計算攻擊
        this.attack();

        for(let p = 0; p < this.plants.length; p++){
           this.plants[p].update();
        }
        for(let z = 0; z < this.zombies.length; z++){
            this.zombies[z].update();
        }

        // 生成陽光
        //this.sunManager.update();
        

      
    }

    //获取UI root节点
    public getUIRoot() {
        return this.gameUI;
    }

    //清空变量
    public cleanup():void {
        Laya.timer.clear(this, this.update);
        //注销监听
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        this.gameMap.cleanup();
        this.sunScore = 0;
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