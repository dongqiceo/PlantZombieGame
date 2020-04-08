// class PlayerController {
//         private txt: Texts;
//         constructor() {
//             Laya.stage.alignV = Stage.ALIGN_MIDDLE;
//             Laya.stage.alignH = Stage.ALIGN_CENTER;
//             this.setup();
//         }
//         private setup(): void {
//             this.createInteractiveTarget();
//         }
//         private createInteractiveTarget(): void {
//             var rect: Sprite = new Sprite();
//             rect.size(200, 200);
//             rect.x = (Laya.stage.width - 200) / 2;
//             rect.y = (Laya.stage.height - 200) / 2;
//             Laya.stage.addChild(rect);
//             //增加鼠标事件
//             rect.on(Event.MOUSE_DOWN, this, this.mouseHandler);
//             rect.on(Event.MOUSE_UP, this, this.mouseHandler);
//             rect.on(Event.CLICK, this, this.mouseHandler);
//             rect.on(Event.RIGHT_MOUSE_DOWN, this, this.mouseHandler);
//             rect.on(Event.RIGHT_MOUSE_UP, this, this.mouseHandler);
//             rect.on(Event.RIGHT_CLICK, this, this.mouseHandler);
//             rect.on(Event.MOUSE_MOVE, this, this.mouseHandler);
//             rect.on(Event.MOUSE_OVER, this, this.mouseHandler);
//             rect.on(Event.MOUSE_OUT, this, this.mouseHandler);
//             rect.on(Event.DOUBLE_CLICK, this, this.mouseHandler);
//             rect.on(Event.MOUSE_WHEEL, this, this.mouseHandler);
//         }
//         /**
//          * 鼠标响应事件处理
//          */
//         private mouseHandler(e: Event): void {
//             switch (e.type) {
//                 case Event.MOUSE_DOWN:
//                     this.appendText("\n————————\n左键按下");
//                     break;
//                 case Event.MOUSE_UP:
//                     this.appendText("\n左键抬起");
//                     break;
//                 case Event.CLICK:
//                     this.appendText("\n左键点击\n————————");
//                     break;
//                 case Event.RIGHT_MOUSE_DOWN:
//                     this.appendText("\n————————\n右键按下");
//                     break;
//                 case Event.RIGHT_MOUSE_UP:
//                     this.appendText("\n右键抬起");
//                     break;
//                 case Event.RIGHT_CLICK:
//                     this.appendText("\n右键单击\n————————");
//                     break;
//                 case Event.MOUSE_MOVE:
//                     // 如果上一个操作是移动，提示信息仅加入.字符
//                     if (/鼠标移动\.*$/.test(this.txt.text))
//                         this.appendText(".");
//                     else
//                         this.appendText("\n鼠标移动");
//                     break;
//                 case Event.MOUSE_OVER:
//                     this.appendText("\n鼠标经过目标");
//                     break;
//                 case Event.MOUSE_OUT:
//                     this.appendText("\n鼠标移出目标");
//                     break;
//                 case Event.DOUBLE_CLICK:
//                     this.appendText("\n鼠标左键双击\n————————");
//                     break;
//                 case Event.MOUSE_WHEEL:
//                     this.appendText("\n鼠标滚轮滚动");
//                     break;
//             }
//         }
//         private appendText(value: String): void {
//             this.txt.text += value;
//             this.txt.scrollY = this.txt.maxScrollY;
//         }
// } 
// new PlayerController();
//# sourceMappingURL=PlayerController.js.map