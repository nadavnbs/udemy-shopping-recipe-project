import { Component, OnInit } from '@angular/core';
import {Ingrediens} from '../shared/ingredint'
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredints:Ingrediens[]
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredints = this.slService.getIngredints()
    this.slService.ingredientsChenge.subscribe((ingredints:Ingrediens[])=>{
      this.ingredints = ingredints
    })
  }


}
