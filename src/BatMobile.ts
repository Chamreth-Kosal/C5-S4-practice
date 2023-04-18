import { Vehicle } from "./Vehicle";
export class BatMobile extends Vehicle{
    getSpeed(): number {
        let speed: number
        if (this.isBatman) {
            speed = 500
        } else {
            speed = 110
        }
        return speed
    }
    isBatman: boolean;
    constructor(plateID: string, weight: number, isBatman: boolean){
        super(plateID, weight)
        this.isBatman = isBatman;
    }
}



