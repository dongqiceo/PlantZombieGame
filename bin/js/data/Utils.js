var Utils = /** @class */ (function () {
    function Utils() {
    }
    //随机数生成
    Utils.getRandom = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Utils.GREEN_X = 100;
    Utils.GREEN_Y = 50;
    Utils.SUN_SIZE = 40;
    Utils.MAP_LINE = 5;
    Utils.MAP_COL = 9;
    Utils.SUN_TIME = 500;
    Utils.SUN_VALUE = 25;
    Utils.PEASHOOTER_VALUE = 100;
    Utils.MOVE_SPEED = 45000;
    Utils.ZOMBIE_REFRESH = 5000;
    Utils.ZOMBIE_BLOOD = 200;
    Utils.ZOMBIE_HURT = 10;
    Utils.PLANT_BLOOD = 200;
    Utils.PLANT_HURT = 25;
    return Utils;
}());
//# sourceMappingURL=Utils.js.map