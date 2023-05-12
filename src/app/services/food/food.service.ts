import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodByTag(tag:string) :foods[]{

    return tag=='all'?this.getAll():this.getAll().filter(fooditem =>fooditem.tags?.includes(tag));
    
  }
  TagArr= [
    {name:'all',count:14},
    {name:'breakfast',count:14},
    {name:'lunch',count:14},
    {name:'dinner',count:14},
    {name:'pizza',count:14},
    {name:'fastfood',count:14},
    {name:'fry',count:14}
    
  ];
  getAllTag():Tag[]{
    for(let i = 1;i<this.TagArr.length;i++){
      this.TagArr[i].count = this.getAll().filter(fooditem =>fooditem.tags?.includes(this.TagArr[i].name)).length;
    }
    this.TagArr[0].count = this.getAll().length;
    return this.TagArr;
  }
  getAll():foods[]{
    return [
      {
        id:1,
        price:10,
        name:'chicken',
        favorite:true,
        star: 0,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'assets/img1.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:2,
        price:10,
        name:'food2',
        favorite:false,
        star: 0,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'assets/img2.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:3,
        price:10,
        name:'food3',
        favorite:false,
        star: 0,
        tags:['fry','pizza','breakfast'],
        imageUrl:'assets/img3.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:4,
        price:10,
        name:'food4',
        favorite:false,
        star: 0,
        tags:['fastfood','pizza','breakfast'],
        imageUrl:'assets/img4.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:5,
        price:10,
        name:'food5',
        favorite:false,
        star: 0,
        tags:['fastfood','pizza','dinner'],
        imageUrl:'assets/img5.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:6,
        price:10,
        name:'food6',
        favorite:false,
        star: 0,
        tags:['fastfood','pizza','dinner'],
        imageUrl:'assets/img6.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:7,
        price:10,
        name:'food7',
        favorite:false,
        star: 0,
        tags:['fastfood','pizza','breakfast'],
        imageUrl:'assets/img7.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:8,
        price:10,
        name:'food8',
        favorite:false,
        star: 0,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'assets/img8.jpg',
        cookTime:'10-20',
        origins:['italy']
      },
      {
        id:9,
        price:10,
        name:'food9',
        favorite:false,
        star: 0,
        tags:['fastfood','pizza','lunch'],
        imageUrl:'assets/img9.jpg',
        cookTime:'10-20',
        origins:['italy']
      }  
  ]
  }
}
