//constructor 
function Car(make,model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("ford","mustang",2029,"red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);