import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() title:string = "" ;
  @Input() data:any[] = [];
  @Output() seletedData = new EventEmitter()
  changes(event:any): void {
    this.seletedData.emit(event);
  }

}
