import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediens } from '../shared/ingredint';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
  ingredientsChenge = new Subject<Ingrediens[]>();
  startedEditing = new Subject<number>();
  private ingredints:Ingrediens[] = [
    new Ingrediens('test',3),
    new Ingrediens('test2',5)    
  ]
  getIngredints(){
    return this.ingredints.slice();
  }
  addIngredint(ingredint:Ingrediens){
    this.ingredints.push(ingredint);
    this.ingredientsChenge.next(this.ingredints.slice())
  }
  addIngrediets(ingredients:Ingrediens[]){
    this.ingredints.push(...ingredients);
    this.ingredientsChenge.next(this.ingredints.slice())
  }
  getIngredient(index:number){
    return this.ingredints[index];
  }
  updateIngredient(index:number,newIngredient:Ingrediens){
    this.ingredints[index] = newIngredient;
    this.ingredientsChenge.next(this.ingredints.slice());
  }
  deleteIngredient(index:number){
    this.ingredints.splice(index,1);
    this.ingredientsChenge.next(this.ingredints.slice());
  }
}
