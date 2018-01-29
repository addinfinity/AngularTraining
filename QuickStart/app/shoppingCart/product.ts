export class Product {
    public name?:string;
    public price?:number;
    public rating?:number;
    public imageUrl?:string;    

    constructor(name?: string, price?: number, rating?: number, imageUrl?:string){
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }
}