import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

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
        tags:['fastfood','pizza','lunch'],
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
        tags:['fastfood','pizza','lunch'],
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
        tags:['fastfood','pizza','lunch'],
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
        tags:['fastfood','pizza','lunch'],
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
        tags:['fastfood','pizza','lunch'],
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
