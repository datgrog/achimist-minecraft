import {Component, Input, OnInit} from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import {Recipe} from "../recipe/recipe.model";

@Component({
    selector: 'alchimist-brewer',
    template: require('./brewer.component.html'),
    styleUrls:  ['app/brewer/brewer.component.css']
})
export class BrewerComponent implements OnInit {
  @Input() mode: string;
  errorMessage: string;
  recipes: Recipe[];
  receivedData: Array<any> = [];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    if (this.mode === 'live')
      this.getRecipes();
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

  transferDataSuccess($event: any) {
    this.receivedData.push($event);
    console.log($event.dragData);
  }
}
