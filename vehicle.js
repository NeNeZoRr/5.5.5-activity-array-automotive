class Vehicle {
    constructor(make, model, year, price, vin) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.price = price;
      this.vin = vin;
      this.paint = undefined;
    }
  
    paint(paintColor) {
      return this.paint = paintColor;
    }
  
    drive() {
        return this.model + " " + "drive"
    }
  }

let newFord = new Vehicle("Ford", "F-150", "2015", 19000, "1234", "blue" )
console.log(newFord)