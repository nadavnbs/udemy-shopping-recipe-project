import { Component, OnInit } from '@angular/core';
import {Ingrediens} from '../shared/ingredint'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredints:Ingrediens[] = [
    new Ingrediens('test',3),
    new Ingrediens('test2',5)    
  ]
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredint:Ingrediens){
    this.ingredints.push(ingredint);
  }

}
