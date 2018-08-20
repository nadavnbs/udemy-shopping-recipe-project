import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediens } from '../shared/ingredint';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }
  ingredientsChenge = new EventEmitter<Ingrediens[]>();
  private ingredints:Ingrediens[] = [
    new Ingrediens('test',3),
    new Ingrediens('test2',5)    
  ]
  getIngredints(){
    return this.ingredints.slice();
  }
  addIngredint(ingredint:Ingrediens){
    this.ingredints.push(ingredint);
    this.ingredientsChenge.emit(this.ingredints.slice())
  }
}
