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
  emptyCases: Ingredient[] = Array(10).fill({
    id: 0,
    nom: '',
    description: '',
    quantity: 0,
    css: {
      backgroundPositionX: '40',
      backgroundPositionY: '0'
    }
  });

  constructor (private ingredientService: IngredientService) {}

  ngOnInit() {
    this.getIngredients();
  }

  // Ingredient bug if quantity is 0 within inventory while dropping
  inventoryDrop($event: any) {
    console.log('inventoryDrop');
    let item = $event.dragData[0]; // item can be ingredient or craftedPotion

    // data are passed by ref so if item.quantity don't exist it mean that item is new brand potion !
    if (item.quantity) {
      // reference already exist
      console.log('reference exist');
      item.quantity++;
    } else {
      console.log('reference do not exist');
      for (let emptyCaseIdx in this.emptyCases) {
        // looking for an empty case
        if (this.emptyCases[emptyCaseIdx].id === 0) {
          item.quantity = 1;
          this.emptyCases[emptyCaseIdx] = item;
          break;
        }
      }
    }
  }

  getIngredients() {
    this.ingredientService.getIngredients()
      .subscribe(
        ingredients => {
          this.ingredients = ingredients;
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
