import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http'

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthServiceService } from 'src/app/auth/auth-service.service';


@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {
  constructor(private dataStorageService:DataStorageService,private authService:AuthServiceService) { }

  ngOnInit() {
  }
  onSaveData(){
    this.dataStorageService.storeRecipe().subscribe((response:Response)=>{
      console.log(response)
    })
  }
  onFetchData(){
    this.dataStorageService.getRecipes();
  };
  onLogOut(){
    this.authService.logOut()
  }

}
