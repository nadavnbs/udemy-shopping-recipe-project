import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuardService } from './auth/auth-guard.service'
import { HomeComponent } from './core/home/home.component';


const appRouter: Routes = [
  {path:'', component:HomeComponent},
  {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule',canLoad: [AuthGuardService] },
  {path:'shopping-list',component:ShoppingListComponent}, 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
