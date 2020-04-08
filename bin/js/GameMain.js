var WebGL = Laya.WebGL;
var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400, WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "center";
        //设置横竖屏
        //Laya.stage.screenMode = "vertical";
        fairygui.UIConfig.packageFileExtension = "xml";
        Laya.loader.load([{ url: "res/PlantsvsZombies_atlas0.png", type: Loader.IMAGE },
            { url: "res/PlantsvsZombies.xml", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function (res) {
        console.log(res);
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.GRoot.inst.displayObject.zOrder = 1000;
        fairygui.UIPackage.addPackage("res/PlantsvsZombies");
        GameMain.gamestartui = new GamestartUI();
        GameMain.gamestartui.addview();
    };
    GameMain.gamestartui = null;
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map