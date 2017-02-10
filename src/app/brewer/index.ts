import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrewerComponent } from './brewer.component';
import { DndModule } from 'ng2-dnd';
import { RecipeService } from '../recipe/recipe.service';

@NgModule({
    imports: [
      CommonModule,
      DndModule.forRoot()
    ],
    declarations: [
      BrewerComponent
    ],
    providers: [
      RecipeService
    ],
    exports: [
        BrewerComponent
    ]
})
export class BrewerModule {}
