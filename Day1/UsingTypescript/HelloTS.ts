// function Add(x:number, y: number):number {
//     return x+y;
// }

// //Declaring arrays
// var cars:string[] = ['test1','test2'];
// var cars2: Array<number> = new Array<number>(100,2000);

// //for loops
// for(let car in cars)//car will be index
// {
//     console.log(car)
// }

// for(let car of cars) // car will be instance of car
// {
//     console.log(car);
// }


// //Spread operator
// let allCars = [...cars,...cars2,'tata'];
// for (const car of allCars) {
//     console.log(car);    
// }


// //Funcation parameters

// // All parameters are required
// function Print(author:string, color:string, noOfPages:number) {
//     console.log(author);
//     console.log(color);
//     console.log(noOfPages);
// }
// Print("author1", 'Red',100);

// //Optional parameters
// //noOFPages is optional. All optional parameters should be last
// //Mark it with ? 
// function Print2(author: string, color: string, noOfPages?: number) {
//     console.log(author);
//     console.log(color);
//     console.log(noOfPages);
// }
// Print2("author1", 'Red');

// // Default parameters
// //noOFPages is optional. All optional parameters should be last
// //use = to pass in default value
// // Default value can be an expression or a function returning a value
// function Print3(author: string, color: string, noOfPages: number = 100) {
//     console.log(author);
//     console.log(color);
//     console.log(noOfPages);
// }
// Print3("author1", 'Red');


// // Arrow functions
// var square = function (x) {
//     return x * x;
// }

// var squareLamda = (x) => { return x * x };
// var squareLamda2 = x =>  x * x;

// console.log(square(10));
// console.log(squareLamda(100));
// console.log(squareLamda2(20));

// //class
// class Car {

//     //public (default) / private / protected - access modifiers for class members
//     name:string;
//     speed:number;

//     // constructor with default parameters
//     constructor(name:string="", speed:number=0) {
//         this.name = name;
//         this.speed = speed;
//     }

//     Accelerate():string{
//         //console.log('The car ' + this.name + ' is running at ' + this.speed + ' km/ph');

//         //string interpolation - ES6 feature
//         return `The car ${this.name} is running at ${this.speed} km/ph`;

//     }
// }

// class JamesBondCar extends Car{
//     canFly: boolean;
//     canSubmerge: boolean;

//     constructor(name:string, speed:number, canFly:boolean, canSubmerge:boolean){

//         //call base class constructor
//         super(name,speed);

//         this.canFly= canFly;
//         this.canSubmerge = canSubmerge;
//     }

//     Accelerate():string{
//         return `${super.Accelerate()}; Can Fly? - ${this.canFly}; Can Submerge? - ${this.canSubmerge}`;

//     }
// }

// var carObj = new Car("Car1",100);
// console.log(carObj.Accelerate());

// var jcarObj = new JamesBondCar("JamesBondCar", 400, true, false);
// console.log(jcarObj.Accelerate());

// Interfaces
 interface ICompany {
    name: string;
    city: string;
    IsMNC?: boolean; // Optional properties
 }

 // interface implementation
 class Company implements ICompany{
     constructor(public name: string, public city: string, public IsMNC?: boolean){

     }
 }

 var company: ICompany = { name: 'Synechron', city:'Pune' };
