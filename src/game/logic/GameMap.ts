//游戏地图
import Point = Laya.Point;

class GameMap {
        
        public single_x:number; //单个格子大小
        public single_y:number;
        public gridX:number;    //游戏格子坐标
        public gridY:number;
        public point:Point[][];     //实际屏幕像素坐标数组
        public mousePos:any = null;    //当前点击位置的格子坐标

        private offset:any;  //地图偏移坐标
        private gressSize:any;  //地图大小
        private mapGridStatus:boolean[][] = [];
        constructor(grassSize, offset) {
            this.offset = offset;
            this.gressSize = grassSize;

        }

        //初始化
        public init() {

        }

        //初始化地图
        public initMap():void{

            this.single_x = this.gressSize.x / 9;
            this.single_y = this.gressSize.y / 5;
            
            this.point = [];

            for(let ix = 0; ix < 10 ;ix++) {
                this.point.push([]);
                for(let iy = 0; iy < 6; iy++) {
                    this.point[ix].push(new Point());
                    let vx = this.single_x * ix + this.offset.x;
                    let vy = this.single_y * iy + this.offset.y;    
                    console.log(vx,vy);    
                    this.point[ix][iy].x = vx;
                    this.point[ix][iy].y = vy;
                }
            }

            //地图状态值
            for(let x = 0; x < Utils.MAP_COL; x++){
                this.mapGridStatus.push([]);
                for(let y = 0; y < Utils.MAP_LINE; y++){
                    this.mapGridStatus.push([]);
                    this.mapGridStatus[x][y] = true;
                   
                }
            }


        }

        //计算格子下标
        getGridSubscript(x, y){
            let selfX = x - this.offset.x;    
            let selfY = y - this.offset.y;
            this.gridX = Math.floor(selfX / this.single_x);
            this.gridY = Math.floor(selfY / this.single_y);              
        }
        
        //接收点击坐标判定是否在棋盘内
        public cheackMousePos(col, line) {
            //判断是否在棋盘内
            if (col< Utils.MAP_COL && line < Utils.MAP_LINE && col >= 0 && line >= 0) { 
                return true;
            }
            
            return false;
        }

        //设定地图棋盘状态的二维数组（可放置和不可放置）
        setMapStatus(col, line, gridStatus:boolean){

            //点击后将状态置false
            if(col <=  Utils.MAP_COL && line <= Utils.MAP_LINE)
                this.mapGridStatus[col][line] = gridStatus;

                   
        }     
    
        
        //返回点击坐标对应的地图格子坐标
        getGridPos(col, line){
            return this.point[this.gridX][this.gridY];
        }  

        

        //清除变量
        public cleanup() {
            this.gridX = 0;
            this.gridY = 0;
        }
}