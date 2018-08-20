import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[]= [
    new Recipe('test','test','https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')
  ];
  getRecipes(){
    return this.recipes.slice();
  }
}
