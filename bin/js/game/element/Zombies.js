//僵尸基类
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
var ZombieStatus;
(function (ZombieStatus) {
    ZombieStatus[ZombieStatus["ATTACK"] = 0] = "ATTACK";
    ZombieStatus[ZombieStatus["MOVE"] = 1] = "MOVE";
    ZombieStatus[ZombieStatus["DEAD"] = 2] = "DEAD";
    ZombieStatus[ZombieStatus["HURT"] = 3] = "HURT"; //被攻击状态(持续减伤)
})(ZombieStatus || (ZombieStatus = {}));
var Zombies = /** @class */ (function (_super) {
    __extends(Zombies, _super);
    function Zombies() {
        var _this = _super.call(this) || this;
        _this.blood = Utils.ZOMBIE_BLOOD;
        _this.hurt = Utils.ZOMBIE_HURT;
        return _this;
    }
    //僵尸初始化
    Zombies.prototype.init = function () {
        this.place();
        this.draw();
    };
    //僵尸位置坐标
    Zombies.prototype.place = function () {
        this.size = GameLogic.getInstance().gameMap.getSinglePos();
        var mapLine = GameLogic.getInstance().gameMap.mapLine;
        var i = Utils.getRandom(0, Utils.MAP_LINE);
        this.singlePos = mapLine[i];
    };
    //僵尸攻击及攻击判定 接收植物实例进行操作
    Zombies.prototype.zombiesAck = function (plant) {
        if (plant != null) {
            if (plant.status != PlantStatus.DEAD) {
                if (plant._plant.y == this._zombie.y && plant._plant.x >= this._zombie.x && this._zombie.x > plant._plant.x - this.size.x) {
                    this.hurtPlant(plant);
                }
            }
        }
    };
    Zombies.prototype.hurtPlant = function (plant) {
        // 播放攻击动画
        //让僵尸停下转换攻击状态
        this.moveingTween.pause();
        //this.status = ZombieStatus.ATTACK;
        // 让植物掉血
        plant.lessBlood(this);
        if (plant.status == PlantStatus.DEAD)
            this.status = ZombieStatus.MOVE;
    };
    //受伤函数 减血
    Zombies.prototype.lessBlood = function (plant) {
        // TODO lee 这里不应该是判断this.blood>0  而是应该判断 this.blood > plant.hurt(√)
        if (this.blood > plant.hurt) {
            this.blood -= plant.hurt;
            this.status = ZombieStatus.HURT;
        }
        else {
            this.status = ZombieStatus.DEAD;
        }
    };
    //更新当前僵尸状态 移动更新 是否攻击
    Zombies.prototype.update = function () {
        switch (this.status) {
            case ZombieStatus.ATTACK:
                break;
            case ZombieStatus.DEAD:
                break;
            case ZombieStatus.MOVE: {
                this.moveingTween.resume();
                break;
            }
            case ZombieStatus.HURT:
                break;
        }
    };
    //僵尸绘制
    Zombies.prototype.draw = function () {
        this._zombie = fairygui.UIPackage.createObject("PlantsvsZombies", "normalZombie").asMovieClip;
        this._zombie.setSize(this.size.x * 1.8, this.size.y * 1.1);
        this._zombie.setXY(fairygui.GRoot.inst.width, this.singlePos);
        this._zombie.playing = true;
        this.addChild(this._zombie);
        this.moveingTween = Laya.Tween.to(this._zombie, { x: 0 }, Utils.MOVE_SPEED);
    };
    // public life(){
    // }
    Zombies.prototype.cleanup = function () {
        this.removeChild(this._zombie);
    };
    return Zombies;
}(fairygui.GComponent));
//# sourceMappingURL=Zombies.js.map