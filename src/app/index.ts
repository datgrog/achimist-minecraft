import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {BrewerModule} from './brewer/index';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IngredientData } from './ingredient/ingredient-data';
import { InventoryModule } from './inventory/index';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    BrewerModule,
    InventoryModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(IngredientData)
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
