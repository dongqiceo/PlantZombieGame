//僵尸管理类
var ProduceZombies = /** @class */ (function () {
    function ProduceZombies() {
        this.amount = 8;
    }
    ProduceZombies.prototype.randomzomies = function () {
        for (var i = 0; i < this.amount; i--) {
            switch (Utils.getRandom(1, 3)) {
                case 1:
                    return new normalZombies();
                case 2:
                    return new flagZombies();
                case 3:
                    return new RoadPileZombies();
            }
        }
    };
    ProduceZombies.prototype.zombiesPlace = function () {
        // for() {
        //     switch(Utils.getRandom(1, Utils.MAP_COL)) {
        //         case 1:
        //         case 2:
        //         case 3:
        //         case 4:
        //         case 5:
        //     }
        // }
    };
    return ProduceZombies;
}());
//# sourceMappingURL=ProduceZombies.js.map