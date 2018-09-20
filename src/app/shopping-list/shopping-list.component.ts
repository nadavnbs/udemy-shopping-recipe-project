import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingrediens} from '../shared/ingredint'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  ingredints:Ingrediens[]
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredints = this.slService.getIngredints()
    this.subscription = this.slService.ingredientsChenge.subscribe((ingredints:Ingrediens[])=>{
      this.ingredints = ingredints
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index)
  }


}
