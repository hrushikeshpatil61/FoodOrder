import { CartService } from './../services/cart.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { foods } from './../shared/models/food';
import { Component } from '@angular/core';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:foods;
  constructor(private fs:FoodService, private activatedRoute:ActivatedRoute,private cartService:CartService
    ,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.food = fs.getFoodById(params['id']);
      }
    })
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
