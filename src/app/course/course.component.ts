import { Course } from './../viewproduct/define/course.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() courses: Course[];
  @Input() typeSummary: number;
  @Input() typeCurrency: string;
  @Input("tyGia") tyGiaUSD: number;
  constructor() { }

  ngOnInit() {
  }

}
