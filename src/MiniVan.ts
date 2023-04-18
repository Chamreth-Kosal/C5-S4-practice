import { Vehicle } from "./Vehicle";
export class MiniVan extends Vehicle {
    
    private numberCustomers: number;
    private numberLuggage: number;
    constructor(plaetID:string, weight:number, numberCustomers: number, numberLuggage: number) {
        super(plaetID,weight)
        this.numberCustomers = numberCustomers
        this.numberLuggage = numberLuggage
    }

    getSpeed(): number {
        let speed:number = 130
        speed = speed - (this.numberCustomers *10) + (this.numberLuggage *5)
        return speed
    }
    
}


