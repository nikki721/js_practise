//class

function Products(name,price){
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`product : ${this.name}`);
        console.log(`price : $${this.price.toFixed(2)}`);
    };
}
const pr1  = new Products("shirt",13.99);
console.log(pr1.name);
console.log(pr1.price);
pr1.displayProduct();