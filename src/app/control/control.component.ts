import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Output("typeSummaryChange") typeSummaryChange = new EventEmitter<number>();
  @Output("typeCurrencyChange") typeCurrencyChange = new EventEmitter<string>();
  @Input() typeSummary: number;
  @Input() typeCurrency: string;
  constructor() { }

  arrSummary: any[]=[
    {id:0, name:'Small'},
    {id:1, name:'Medium'},
    {id:2, name:'Lagre'},
  ]
  
  arrCurrency: any[]=[
    {id:"vnd", name:'VND'},
    {id:"usd", name:'USD'},
    {id:"jpy", name:'Yen Nhat'}
  ]

  ngOnInit() {
  }

  changeSummary1($event){
    //console.log($event.target.value)
    this.typeSummaryChange.emit($event.target.value);
  }

  changeCurrency($event){
    this.typeCurrencyChange.emit($event.target.value);
  }
}
