import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../model/food';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  @Output() selectFoodEvent = new EventEmitter();

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoodList();
  }

  getFoodList() {
    this.foodService.getFoods().subscribe(
      foods => {
        this.foodService.foodList = foods;
      }
    );
  }

  onEdit(food: Food) {
    this.selectFoodEvent.emit(food);
  }

  onDelete(food: Food) {
    this.foodService.foodList = this.foodService.foodList.filter(f => f.id !== food.id);
  }

}
