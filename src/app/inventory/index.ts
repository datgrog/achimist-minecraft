import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import {IngredientService} from "../ingredient/ingredient.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InventoryComponent
  ],
  providers: [
    IngredientService
  ],
  exports: [
    InventoryComponent
  ]
})
export class InventoryModule {}
