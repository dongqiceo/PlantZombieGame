var GameLogic = /** @class */ (function () {
    function GameLogic() {
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
        this.bullets = [];
    }
    GameLogic.getInstance = function () {
        if (!GameLogic.instance)
            GameLogic.instance = new GameLogic();
        //GameLogic.instance.init();
        return GameLogic.instance;
    };
    //开始游戏
    GameLogic.prototype.start = function () {
        this.init();
    };
    // 初始化
    GameLogic.prototype.init = function () {
        this.gameUI._view.visible = true;
        this.gameUI.init();
        this.gameMap.init(this.gameUI.getGrassSize());
        this.playerController.init();
        this.sunManager.init();
        this.plantNumber = 0;
        this.zombieNumber = 0;
        this.bulletNumber = 0;
        // TODO lee timer只需要起一个每帧调用的就可以  其他通过自己计算时间来决定是否该执行某个操作
        // 关于时间的获取操作 参考Date类 
        //间隔时间生成僵尸
        Laya.timer.loop(Utils.ZOMBIE_REFRESH, this, this.listZombie);
        Laya.timer.frameLoop(1, this, this.update);
    };
    //添加植物列表
    GameLogic.prototype.listPlant = function () {
        //生成植物 
        var plant = new Plants();
        this.plants.push(plant);
        this.plants[this.plantNumber].init();
        this.gameUI._view.addChild(this.plants[this.plantNumber]);
        //test
        this.createBullet(this.plants[this.plantNumber]);
        this.plantNumber++;
    };
    //添加僵尸列表
    GameLogic.prototype.listZombie = function () {
        var zombie = new Zombies();
        this.zombies.push(zombie);
        this.zombies[this.zombieNumber].init();
        this.gameUI._view.addChild(this.zombies[this.zombieNumber]);
        this.zombieNumber++;
    };
    //创建子弹  (TODO)
    GameLogic.prototype.createBullet = function (plant) {
        var bullet = new Bullets(plant);
        this.bullets.push(bullet);
        this.bullets[this.bulletNumber].init();
        this.gameUI._view.addChild(this.bullets[this.bulletNumber]);
        this.bulletNumber++;
    };
    //攻击判定
    GameLogic.prototype.attack = function () {
        for (var p = this.plants.length; p > 0; p--) {
            for (var z = this.zombies.length; z > 0; z--) {
                var zombie = this.zombies[z - 1];
                var plant = this.plants[p - 1];
                //将每一个植物实例传入僵尸攻击函数
                zombie.zombiesAck(plant);
                //将每一个僵尸实例传入植物攻击函数（子弹类 TODO）
                if (plant.plantsAck(zombie)) {
                }
            }
        }
        // TODO lee 问题 removeChild以后没有让plant的数据从this.plants数组中摘除（√）
        for (var p = this.plants.length; p > 0; p--) {
            if (this.plants[p - 1].status == PlantStatus.DEAD) {
                this.gameUI._view.removeChild(this.plants[p - 1]);
                this.plants.splice(p - 1, 1);
                this.plantNumber--;
            }
        }
        for (var z = this.zombies.length; z > 0; z--) {
            //如果僵尸死亡或者到达边界则删除
            if (this.zombies[z - 1].status == ZombieStatus.DEAD || this.zombies[z - 1]._zombie.x == 0) {
                this.gameUI._view.removeChild(this.zombies[z - 1]);
                this.zombies.splice(z - 1, 1);
                this.zombieNumber--;
            }
        }
    };
    //更新状态 todo
    // TODO lee 应该让gamelogic统一管理所有元素的update  不要在每个元素自己内部启动不同的timer
    GameLogic.prototype.update = function () {
        // TODO lee 应该在这里处理攻击循环 然后分别调用僵尸和植物的update
        // 攻击和update之间的顺序需要自己去思考和把握
        // 計算攻擊
        this.attack();
        for (var p = 0; p < this.plants.length; p++) {
            this.plants[p].update();
        }
        for (var z = 0; z < this.zombies.length; z++) {
            this.zombies[z].update();
        }
        // 生成陽光
        this.sunManager.update();
    };
    //获取UI root节点
    GameLogic.prototype.getUIRoot = function () {
        return this.gameUI;
    };
    //清空变量
    GameLogic.prototype.cleanup = function () {
        Laya.timer.clear(this, this.update);
        this.playerController.cleanup();
        this.gameMap.cleanup();
        this.sunManager.cleanup();
        this.plantNumber = 0;
        //清空植物
        for (var i = 0; i < this.plants.length; i++) {
            this.plants[i].cleanup();
            this.gameUI._view.removeChild(this.plants[i]);
        }
        for (var i = 0; i < this.zombies.length; i++) {
            this.zombies[i].cleanup();
            this.gameUI._view.removeChild(this.zombies[i]);
        }
        this.plants.splice(0, this.plants.length);
        this.zombies.splice(0, this.zombies.length);
        this.gameUI._view.visible = false;
    };
    GameLogic.instance = null;
    return GameLogic;
}());
//# sourceMappingURL=GameLogic.js.map