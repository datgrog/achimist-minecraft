import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { IngredientService } from '../ingredient/ingredient.service';
import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot()
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
