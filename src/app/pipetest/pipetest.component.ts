import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent implements OnInit {
  courseObj: any = {
    'id': 20,
    name: "Angular 2",
    date: new Date(),
    price: 69.8123745,
    require: ['typescript', 'html', 'css'],
    obj2: {
      obj2Id: 10,
      obj2Name: "Hoc Angular De Lam Gi?"
    }
  }

  percentA: number = 0.123;
  percentB: number = 2.123;

  constructor() { }

  ngOnInit() {
  }

}
