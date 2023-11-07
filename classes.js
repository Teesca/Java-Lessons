class Vechile{
    constructor(make,name,engine){
        this.make = make;
        this.name = name;
        this.engine = engine;
    }
    get getName(){
        return(`The name of this vechile is ${this.name}`)

    };
}
let bike = new Vechile ("Kawanski","suzuki","1340c");
let car = new Vechile ("Yaris", "Toyota", "VVT1");
let truck = new Vechile ("Two Tipper", "Mercedes Benz", "C63");

console.log(`${bike.getName}`);
console.log(`${car.getName}`);
console.log(`${truck.getName}`);