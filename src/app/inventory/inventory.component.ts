import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';
import { IngredientService } from '../ingredient/ingredient.service';

@Component({
  selector: 'alchimist-inventory',
  template: require('./inventory.component.html'),
  styleUrls:  ['app/inventory/inventory.component.css']
})

export class InventoryComponent implements OnInit {
  errorMessage: string;
  ingredients: Ingredient[];

  constructor (private ingredientService: IngredientService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.getIngredients()
      .subscribe(
        ingredients => {
          this.ingredients = ingredients;
          console.log(ingredients);
        },
        error => {
          this.errorMessage = <any>error;
        });
  }

/*  addHero (name: string) {
    if (!name) { return; }
    this.heroService.addHero(name)
      .subscribe(
        hero  => this.heroes.push(hero),
        error =>  this.errorMessage = <any>error);
  }*/
}
