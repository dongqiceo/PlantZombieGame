var ZombiesView = /** @class */ (function () {
    function ZombiesView() {
        this._normal = fairygui.UIPackage.createObject("PlantsvsZombies", "normalZombie").asCom;
    }
    ZombiesView.prototype.addview = function () {
        this.producezombies = new ProduceZombies();
        this.producezombies.zombie();
    };
    return ZombiesView;
}());
//# sourceMappingURL=ZombiesView.js.map