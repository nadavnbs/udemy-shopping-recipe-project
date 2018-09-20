import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
   recipes: Recipe[];
   subscription:Subscription;
  constructor(private recipeservice:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeservice.recipesChanget.subscribe((recipes:Recipe[])=>{
      this.recipes = recipes
    })
    this.recipes = this.recipeservice.getRecipes();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }


}
