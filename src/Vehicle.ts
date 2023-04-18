export abstract class Vehicle{
    constructor(private plaetID:string, private weight:number){}

    abstract getSpeed():number;
    toString():string{
        return this.plaetID + "weight" + this.weight
    }
}

