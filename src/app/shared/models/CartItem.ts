import { foods } from "./food";

export class CartItem{
    food:foods;
    quantity:number = 1;
    constructor(food:foods){
        this.food = food;
    }
    
    get price():number{
        return (this.food.price)*(this.quantity);
    }
}