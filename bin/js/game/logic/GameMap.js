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
//游戏地图
var Point = Laya.Point;
var GameMap = /** @class */ (function (_super) {
    __extends(GameMap, _super);
    function GameMap(grass_size, offset) {
        var _this = _super.call(this) || this;
        _this.p = null; //当前点击位置坐
        _this.mapbool = [];
        _this.offsetX = offset.x;
        _this.offsetY = offset.y;
        _this.init(grass_size);
        return _this;
    }
    //初始化
    GameMap.prototype.init = function (s) {
        this.initMap(s);
    };
    //初始化地图
    GameMap.prototype.initMap = function (size) {
        this.single_x = size.x / 9;
        this.single_y = size.y / 5;
        this.point = [];
        this.mapLine = [];
        for (var ix = 0; ix < 10; ix++) {
            this.point.push([]);
            for (var iy = 0; iy < 6; iy++) {
                this.point[ix].push(new Point());
                this.vx = this.single_x * ix;
                this.vy = this.single_y * iy;
                console.log(this.vx, this.vy);
                this.point[ix][iy].x = this.vx;
                this.point[ix][iy].y = this.vy;
            }
        }
        //地图记录值 检测当前单元格是否只有一个精灵
        for (var x = 0; x < Utils.MAP_COL; x++) {
            this.mapbool.push([]);
            for (var y = 0; y < Utils.MAP_LINE; y++) {
                this.mapbool.push([]);
                this.mapbool[x][y] = true;
            }
        }
        for (var i = 0; i < 6; i++) {
            this.mapLine[i] = this.point[0][i].y + this.offsetY;
        }
    };
    //根据坐标在grass绘制矩形
    GameMap.prototype.pointPos = function (posX, posY) {
        var x = this.point[posX][posY].x;
        var y = this.point[posX][posY].y;
        //this.graphics.drawRect(x, y, this.single_x, this.single_y,"#ff00ff");
        return { x: x + this.offsetX, y: y + this.offsetY };
    };
    //转换坐标
    GameMap.prototype.posToGridIndex = function (x, y) {
        var selfX = x - this.offsetX;
        var selfY = y - this.offsetY;
        this.gridX = Math.floor(selfX / this.single_x);
        this.gridY = Math.floor(selfY / this.single_y);
        //判断是否在区域内
        if (this.gridX < Utils.MAP_COL && this.gridY < Utils.MAP_LINE && this.gridX >= 0 && this.gridY >= 0) {
            if (this.mapbool[this.gridX][this.gridY]) {
                if (GameLogic.getInstance().sunManager.buyPlant()) { //判断阳光数，为渲染不置false
                    this.p = this.pointPos(this.gridX, this.gridY);
                    this.mapbool[this.gridX][this.gridY] = false;
                    console.log(this.mapbool[this.gridX][this.gridY]);
                    return true;
                }
            }
            return false;
        }
        else
            return false;
    };
    //返回单个格子大小
    GameMap.prototype.getSinglePos = function () {
        return { x: this.single_x, y: this.single_y };
    };
    //返回地图位置坐标
    GameMap.prototype.getMapPos = function () {
        return this.p;
    };
    //清除变量
    GameMap.prototype.cleanup = function () {
        this.graphics.clear();
        //GameLogic.getInstance().isTouch = false;
    };
    return GameMap;
}(Laya.Sprite));
//# sourceMappingURL=GameMap.js.map