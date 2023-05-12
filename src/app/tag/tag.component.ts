import { Component } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  tags: Tag[] = [];
  constructor(private fs:FoodService){}
  ngOnInit(): void{
    this.tags = this.fs.getAllTag();
  }
}
