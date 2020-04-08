class Utils {
    public static readonly GREEN_X = 100;
    public static readonly GREEN_Y = 50;
    public static readonly SUN_SIZE = 40;
    public static readonly MAP_LINE = 5;
    public static readonly MAP_COL = 9;
    public static readonly SUN_TIME = 500;
    public static readonly SUN_VALUE = 25;
    public static readonly PEASHOOTER_VALUE = 100;
    public static readonly MOVE_SPEED = 45000;
    public static readonly ZOMBIE_REFRESH = 5000;
    public static readonly ZOMBIE_BLOOD = 200;
    public static readonly ZOMBIE_HURT = 10;
    public static readonly PLANT_BLOOD = 200;
    public static readonly PLANT_HURT = 25;
    //随机数生成
    public static getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }
}