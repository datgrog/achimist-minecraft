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
  receivedData: Array<any> = [];

  /* really ??? http://stackoverflow.com/questions/36354325/angular-2-ngfor-using-numbers-instead-collections */
  nbEmptyCase: number[] = Array(9).fill(0);

  constructor (private ingredientService: IngredientService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.getIngredients()
      .subscribe(
        ingredients => {
          this.ingredients = ingredients;
          console.log('Ingredients');
          console.log(ingredients);
        },
        error => {
          this.errorMessage = <any>error;
        });
  }

  transferDataSuccess($event: any) {
    this.receivedData.push($event);
    console.log($event.dragData);
  }

  usedIngredient($event: any) {
    let usedIngredient: Ingredient = $event.dragData;
    usedIngredient.quantity--;
  }

/*  addHero (name: string) {
    if (!name) { return; }
    this.heroService.addHero(name)
      .subscribe(
        hero  => this.heroes.push(hero),
        error =>  this.errorMessage = <any>error);
  }*/
}
