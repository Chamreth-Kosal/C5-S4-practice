import { Vehicle } from "./Vehicle";
export class TucTuc extends Vehicle{
    private numberCustomer: number;
    constructor(numberCustomer: number, plaetID:string, weight:number){
        super(plaetID,weight);
        this.numberCustomer = numberCustomer;
    }
    
    getSpeed(): number {
        let speed:number = 130
        speed = speed - (this.numberCustomer *5)
        return speed
    }
}