import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../ingredient/ingredient.model';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from "../recipe/recipe.model";

@Component({
    selector: 'alchimist-brewer',
    template: require('./brewer.component.html'),
    styleUrls:  ['app/brewer/brewer.component.css']
})


export class BrewerComponent implements OnInit {
  @Input() mode: string;
  recipes: Recipe[];

  brewerInput: BrewerInput = {
    ingredient: null,
    bottle1: null,
    bottle2: null,
    bottle3: null
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes()
      .subscribe(
        recipes => {
          this.recipes = recipes;
        },
        error => {
          console.log(error);
        });
  }

  allowBrewing(): boolean {
    if (this.brewerInput.ingredient && (this.brewerInput.bottle1 || this.brewerInput.bottle2 || this.brewerInput.bottle3)) {
      // 1 ingredient et au moins 1 bottle')
      return true;
    } else {
      return false;
    }
  }

  startBrewing() {
    console.log('startBrewing');
    let primaryIngredientId = this.brewerInput.ingredient.id;
    let craftedPotion: Ingredient;

    for (let recipe of this.recipes) {
      for (let ingredient of recipe.ingredients) {
        if (primaryIngredientId === ingredient.id) {
          craftedPotion = recipe.result;
        }
      }
    }
    console.log(craftedPotion);
    // clear ingredient and replace bottle water by crafted potion
    this.brewerInput.ingredient = null;
    if (this.brewerInput.bottle1) {
      this.brewerInput.bottle1 = craftedPotion;
    }
    if (this.brewerInput.bottle2) {
      this.brewerInput.bottle2 = craftedPotion;
    }
    if (this.brewerInput.bottle3) {
      this.brewerInput.bottle3 = craftedPotion;
    }

  }

  ingredientDrop($event: any) {
    console.log('ingredientDrop');
    this.brewerInput.ingredient = $event.dragData;
  }

  allowDrop(zone: string) {
    const BOTTLE_ID = 373;

    return (ingredient: Ingredient) => {
      if (zone === 'ingredient') {
        if (ingredient.id === BOTTLE_ID) {
          return false;
        } else {
          return this.brewerInput.ingredient === null;
        }
      }
      if (zone === 'output1') {
        if (ingredient.id !== BOTTLE_ID) {
          return false;
        } else {
          return this.brewerInput.bottle1 === null;
        }
      }
      if (zone === 'output2') {
        if (ingredient.id !== BOTTLE_ID) {
          return false;
        } else {
          return this.brewerInput.bottle2 === null;
        }
      }
      if (zone === 'output3') {
        if (ingredient.id !== BOTTLE_ID) {
          return false;
        } else {
          return this.brewerInput.bottle3 === null;
        }
      }
    };
  }

  resetBrowerInput($event: any) {
    console.log('resetIngredient');
    if ($event.dragData[1] === 'ingredient') {
      this.brewerInput.ingredient = null;
    }
    if ($event.dragData[1] === 'bottle1') {
      this.brewerInput.bottle1 = null;
    }
    if ($event.dragData[1] === 'bottle2') {
      this.brewerInput.bottle2 = null;
    }
    if ($event.dragData[1] === 'bottle3') {
      this.brewerInput.bottle3 = null;
    }

  }

  bottleDrop1($event: any) {
    console.log('bottleDrop1');
    this.brewerInput.bottle1 = $event.dragData;
  }
  bottleDrop2($event: any) {
    console.log('bottleDrop2');
    this.brewerInput.bottle2 = $event.dragData;
  }
  bottleDrop3($event: any) {
    console.log('bottleDrop3');
    this.brewerInput.bottle3 = $event.dragData;
  }
}

interface BrewerInput {
  ingredient: Ingredient;
  bottle1: Ingredient;
  bottle2: Ingredient;
  bottle3: Ingredient;
}
