import {Component, OnInit} from '@angular/core';
import { RecipeService } from './recipe.service';
import { IngredientService } from '../ingredient/ingredient.service';
import { Recipe } from './recipe.model';
import { Ingredient } from '../ingredient/ingredient.model';

@Component({
  selector: 'alchimist-recipes',
  template: require('./recipe.component.html'),
  styleUrls:  ['app/recipe/recipe.component.css']
})
export class RecipeComponent implements OnInit {
  errorMessage: string;
  recipes: Recipe[];
  ingredients: Ingredient[];

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService) {
  }

  ngOnInit() {
      this.getRecipes();
      this.getIngredients();
  }

  getRecipes() {
    this.recipeService.getRecipes()
      .subscribe(
        recipes => {
          this.recipes = recipes;
          console.log('Recipes');
          console.log(recipes);
        },
        error => {
          this.errorMessage = <any>error;
        });
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

  getSpriteIngredient(id: number) {
    // hum, comment on fait normalement ??
    // très moche et pas opti du tout
    if (this.ingredients !== undefined) {
      for (let ingredient of this.ingredients) {
        if (ingredient.id === id) {
          return ingredient.css.backgroundPositionX + 'px ' + ingredient.css.backgroundPositionY + 'px';
        }
      }
    }
  }
}
