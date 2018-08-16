import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {
   @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
}
