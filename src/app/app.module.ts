import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FormsModule } from '@angular/forms';
import { FoodService } from './service/food.service';


@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
