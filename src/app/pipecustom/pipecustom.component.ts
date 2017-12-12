import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecustom',
  templateUrl: './pipecustom.component.html',
  styleUrls: ['./pipecustom.component.css']
})
export class PipecustomComponent implements OnInit {

  courseObj: any = {
    'id': 20,
    name: "Angular 2",
    date: new Date(),
    price: 69.8123745,
    require: ['twn', 'html', 'css', 'Net', 'typescript','Angular'],
    obj2: {
      obj2Id: 10,
      obj2Name: "Hoc Angular De Lam Gi?"
    }
  }

  arrNumber: number[] = [7,2,3,1,5,8,7,6,9];
  description: string = "Chúng tôi đã lập kỷ lục thế giới mới khi bắn trúng mục tiêu từ khoảng cách 4.210 m. Tôi là người khai hỏa với sự trợ giúp từ các chuyên gia hiệu chỉnh đường đạn"
  text: string = "Angular 4 Is very easy";
  arrCategory: string[] = ["IT", "Programming", "Mobile", "Web", "Java", "IT", "Web"];

  constructor() { }

  ngOnInit() {
  }

}
