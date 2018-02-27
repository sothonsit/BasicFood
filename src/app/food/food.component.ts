import { Component, OnInit, Output, Input } from '@angular/core';
import { FoodService } from '../service/food.service';
import { Food } from '../model/food';
import { FoodDetailComponent } from '../food-detail/food-detail.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodName: string;
  foodCal: string;
  event: string;
  selected: number;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  onClick(event) {
    switch (event) {
      case 'Edit' : {
        const index = this.foodService.foodList.findIndex(f => f.id === this.selected);
        Object.assign(this.foodService.foodList[index], {id: this.selected, name: this.foodName, cal: this.foodCal});
        break;
      }

      case 'Add' : {
        this.foodService.foodList.push(
          {
            id: this.foodService.foodList.length + 1,
            name: this.foodName,
            cal: this.foodCal
          }
        );
      }
    }

  }

  onClear() {
    this.foodName = '';
    this.foodCal = '';
  }

  selectFoodEvent(food: Food) {
    this.selected =  food.id;
    this.foodName = food.name;
    this.foodCal = food.cal;
    this.event = 'Edit';
  }

}
