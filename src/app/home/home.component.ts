import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foods } from '../shared/models/food';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchFood = "";
  foods:foods[]=[];
  constructor(private fs:FoodService,private router:ActivatedRoute){

  }
  ngOnInit(){
    this.router.params.subscribe(params=>{
      if(params['searchItem'])this.foods = this.fs.getAll().filter(food =>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tagItem']){
        
        this.foods = this.fs.getFoodByTag(params['tagItem']);
      }
      else this.foods= this.fs.getAll();
    })
    
  }
}
