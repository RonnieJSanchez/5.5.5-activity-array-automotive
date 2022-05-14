//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduledService = flase;
    }
    //checks number of passengers the vehicle can hold
    loadPassenger(num){
        if(this.passenger > this.maximumPassengers){
            if ((num + this.passenger) <= this.maximumPassengers){
                this.passenger = num;
                return this.passenger;
            }else{
                console.log(this.model + " " + this.make + "not have enough room for all passengers.")
            }
        }else{
            console.log(this.model + " "  + this.make + " is full");
        }
    }
    //checks if vehicle has fuel
    start(){
        if(this.fuel > 0){
            console.log("engine started...!!!")
            return this.started == true
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }
    //checks if vehicle is due for service 
    scheduledService() {
        if(this.mileage > 30000){
            this.scheduledService = true;
            return this.scheduledService;
        
    }
    }
}
//this shows how to call from this module...
let Vehicle = new Car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(VehicleModule.make)
