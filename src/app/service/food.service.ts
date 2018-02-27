import { Injectable } from '@angular/core';
import { Food } from '../model/food';
import { Observable } from 'rxjs/Observable';
import { foodMock } from '../mock/food-mock';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FoodService {

  foodList: Food[];

  constructor() { }

  public getFoods(): Observable<Food[]> {
    return of(foodMock);
  }
}
