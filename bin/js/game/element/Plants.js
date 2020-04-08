//植物基类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PlantStatus;
(function (PlantStatus) {
    PlantStatus[PlantStatus["ATTACK"] = 0] = "ATTACK";
    PlantStatus[PlantStatus["WAIT"] = 1] = "WAIT";
    PlantStatus[PlantStatus["DEAD"] = 2] = "DEAD";
    PlantStatus[PlantStatus["HURT"] = 3] = "HURT"; //被攻击状态(持续减伤)
})(PlantStatus || (PlantStatus = {}));
var Plants = /** @class */ (function (_super) {
    __extends(Plants, _super);
    function Plants() {
        var _this = _super.call(this) || this;
        _this.value = Utils.PEASHOOTER_VALUE;
        _this.blood = Utils.PLANT_BLOOD;
        _this.hurt = Utils.PLANT_HURT;
        return _this;
    }
    //植物初始化
    Plants.prototype.init = function () {
        this.place();
        this.draw();
        // TODO lee 让gamelogic来统一管理timer，不要每个类自己新建timer  关于时间间隔、速度等，自己用变量记录来管理
        // 例如记录上一次执行某个操作的时间 当update函数再一次被gamelogic调用的时候 判断当前时间和上一次执行操作的时间间隔是否满足需要的间隔
        // 当间隔满足需求时 再一次执行某个操作并记录下时间
    };
    //受伤函数 减血
    Plants.prototype.lessBlood = function (zombie) {
        if (this.blood > zombie.hurt) {
            this.blood -= zombie.hurt;
            this.status = PlantStatus.HURT;
        }
        else {
            this.status = PlantStatus.DEAD;
        }
    };
    //植物设定位置
    Plants.prototype.place = function () {
        this.size = GameLogic.getInstance().gameMap.getSinglePos();
        this.mapPos = GameLogic.getInstance().gameMap.getMapPos();
    };
    //植物攻击判定
    Plants.prototype.plantsAck = function (zombie) {
        if (zombie != null) {
            if (zombie.status != ZombieStatus.DEAD) {
                //植物判定僵尸位置（如果植物格子内则进行操作）
                if (this._plant.y == zombie._zombie.y && zombie._zombie.x > this._plant.x - this.size.x) {
                    this.hurtZombie(zombie);
                    return true;
                }
            }
        }
        return false;
    };
    // hurtZombie
    Plants.prototype.hurtZombie = function (zombie) {
        //变为攻击状态
        //this.status = PlantStatus.ATTACK;
        //zombie.lessBlood(this);
        if (zombie.status == ZombieStatus.DEAD)
            this.status = PlantStatus.WAIT;
    };
    Plants.prototype.shoot = function () {
    };
    //更新植物当前状态
    Plants.prototype.update = function () {
        switch (this.status) {
            case PlantStatus.ATTACK:
                break;
            case PlantStatus.DEAD:
                break;
            case PlantStatus.WAIT:
                break;
            case PlantStatus.HURT:
                break;
        }
    };
    //绘制植物
    Plants.prototype.draw = function () {
        this._plant = fairygui.UIPackage.createObject("PlantsvsZombies", "pea").asMovieClip;
        this._plant.setSize(this.size.x, this.size.y);
        this._plant.setXY(this.mapPos.x, this.mapPos.y);
        this._plant.playing = true;
        this.addChild(this._plant);
    };
    //植物生命周期
    // public life() {
    // }
    //清理变量
    Plants.prototype.cleanup = function () {
        this.removeChild(this._plant);
    };
    return Plants;
}(fairygui.GComponent));
//# sourceMappingURL=Plants.js.map