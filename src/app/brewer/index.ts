import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrewerComponent } from './brewer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BrewerComponent
    ],
    exports: [
        BrewerComponent
    ]
})
export class BrewerModule {}
