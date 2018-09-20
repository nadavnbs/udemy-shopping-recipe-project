import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingrediens } from '../shared/ingredint';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanget = new Subject<Recipe[]>()
  constructor(private slService:ShoppingListService) { }
  private recipes: Recipe[]= [
    new Recipe('test','test','https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',[new Ingrediens('meet',1),new Ingrediens('fries',15)])
  ];
  setRecipe(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanget.next(this.recipes.slice())
  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredients:Ingrediens[]){
    this.slService.addIngrediets(ingredients);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanget.next(this.recipes.slice());
  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanget.next(this.recipes.slice());    
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanget.next(this.recipes.slice());        
  }
}
