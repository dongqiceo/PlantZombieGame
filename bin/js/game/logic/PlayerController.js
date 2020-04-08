//游戏控制类
var PlayerController = /** @class */ (function () {
    function PlayerController() {
        this.init();
    }
    PlayerController.prototype.init = function () {
        this.start();
    };
    //事件监听
    PlayerController.prototype.start = function () {
        //添加舞台监听事件,监听鼠标按下
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        /**精灵(圆形)的位置跟着鼠标的位置移动
        * mouseX：鼠标在 Stage 上的 X 轴坐标；mouseY：鼠标在 Stage 上的 Y 轴坐标*/
        //为舞台绑定鼠标松开事件
        // Laya.stage.on(Laya.Event.MOUSE_UP, this, function () {
        //     //鼠标松开时，在松开的位置固定显示一个圆形
        //     var cicle_up = this.createplant;
        //     cicle_up.change(Laya.stage.mouseX, Laya.stage.mouseY);
        // });
        // //添加舞台监听事件,监听鼠标移动
        // Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    };
    //事件
    PlayerController.prototype.onMouseDown = function () {
        var x = Laya.stage.mouseX;
        var y = Laya.stage.mouseY;
        var sunClass = GameLogic.getInstance().sunManager;
        var gameMapClass = GameLogic.getInstance().gameMap;
        if (sunClass.takeSun(x, y)) {
            if (gameMapClass.posToGridIndex(x, y)) { //设定坐标并判断坐标内精灵是否唯一
                GameLogic.getInstance().listPlant(); //在点击坐标内显示植物           
            }
        }
    };
    //注销监听
    PlayerController.prototype.cleanup = function () {
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    };
    return PlayerController;
}());
//# sourceMappingURL=PlayerController.js.map