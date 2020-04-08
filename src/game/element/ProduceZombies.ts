//僵尸管理类
class ProduceZombies{
    private amount:number;
    public zombie;
    constructor() {
        this.amount = 8;
    }
    
    public randomzomies(): Zombies{
        for(let i = 0;i<this.amount;i--){
            switch (Utils.getRandom(1,3)) {
                case 1:
                    return new normalZombies();
                case 2:
                    return new flagZombies();
                case 3:
                    return new RoadPileZombies();
            }
        }

    }

    public zombiesPlace() {
        // for() {
        //     switch(Utils.getRandom(1, Utils.MAP_COL)) {
        //         case 1:
        //         case 2:
        //         case 3:
        //         case 4:
        //         case 5:
        //     }
        // }
    }

}