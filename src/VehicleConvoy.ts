import { Vehicle } from "./Vehicle";

export class VehicleConvoy{
    Vehicles: Vehicle[] = [];
    addVehicles(vehi: Vehicle){
    this.Vehicles.push(vehi)
   }
   getMaxSpeed(): number{
        let ConvoySpeed = 0
        ConvoySpeed = this.Vehicles[0].getSpeed();
        for (let allVihicle of this.Vehicles){
            let theSpeed = allVihicle.getSpeed()
            if (theSpeed < ConvoySpeed){
                ConvoySpeed = theSpeed
            }
        }
        return ConvoySpeed
   }
}


