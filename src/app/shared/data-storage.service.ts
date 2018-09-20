import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http } from '@angular/http';
import { Recipe } from '../recipes/recipe';
import { Response } from '@angular/http'
import { map } from 'rxjs/operators'; 
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:Http,private recipeService:RecipeService,private authService:AuthServiceService) { }

  storeRecipe(){
    const token = this.authService.getIdToken()    
    return this.http.put('https://udemy-cours-project.firebaseio.com/recipes.json?auth=' + token,this.recipeService.getRecipes())
  };
  getRecipes(){
    const token = this.authService.getIdToken()
    this.http.get('https://udemy-cours-project.firebaseio.com/recipes.json?auth=' + token).pipe(map((response:Response)=>{
      const recipes:Recipe[] = response.json();
      for(let recipe of recipes){
        if(!recipe['ingredients']){
          console.log(recipe)
          recipe['ingredients'] = [];
        }
      }
      return recipes      
    })).subscribe((recipes:Recipe[])=>{
      this.recipeService.setRecipe(recipes)
    })
  }
}
