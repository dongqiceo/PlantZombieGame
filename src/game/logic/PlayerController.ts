//游戏控制类
//     class PlayerController {

//     constructor(){
//         this.init();
//     }

    
//     //事件监听
//     public init():void{
//         //添加舞台监听事件,监听鼠标按下
//         Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        
        
//     }
//     //事件
//     public onMouseDown():void{
//         let x = Laya.stage.mouseX;
//         let y = Laya.stage.mouseY;
//         let sunClass = Scenes.getInstance().sunManager;
//         let gameMapClass = Scenes.getInstance().gameMap;
//         if(sunClass.takeSun(x, y)){
//             if(gameMapClass.posToGridIndex(x, y)){   //设定坐标并判断坐标内精灵是否唯一
//                  Scenes.getInstance().createPlant();           //在点击坐标内显示植物           
//             }    
//         }       
//     }

    
//     //注销监听
//     public cleanup() {
//          Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
//     }


// }