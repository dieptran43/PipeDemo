import { Course } from './define/course.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  courses: Course[] =[];
  //dinh nghia cac bien
  typeSummary: number = 0;
  typeCurrency: string = 'usd';
  tyGia = 1;

  constructor() { 
    this.courses.push(
      new Course("C01", "Ruby On Rails", "1.jpg","Have you ever logged in to a website for the first time by simply clicking a 'Sign in with Google' or 'Sign in with Facebook' button? Ever wonder how they did that ? This course will teach you how to use Microsoft's Identity framework—a complete user authentication and authorization system for ASP.NET applications.", 50, ["Php", "Ruby", "Angular"])
    );
    this.courses.push(
      new Course("C02", "Full stack Angular 4, Node Js", "2.jpg","Have you ever logged in to a website for the first time by simply clicking a 'Sign in with Google' or 'Sign in with Facebook' button? Ever wonder how they did that ? This course will teach you how to use Microsoft's Identity framework—a complete user authentication and authorization system for ASP.NET applications.", 50, ["Php", "Ruby", "Angular"])
    );
    this.courses.push(
      new Course("C03", "React native full stack", "3.jpg","Have you ever logged in to a website for the first time by simply clicking a 'Sign in with Google' or 'Sign in with Facebook' button? Ever wonder how they did that ? This course will teach you how to use Microsoft's Identity framework—a complete user authentication and authorization system for ASP.NET applications.", 50, ["Php", "Ruby", "Angular"])
    );
    this.courses.push(
      new Course("C04", "IOS 4 & Android Kolin", "4.jpg","Have you ever logged in to a website for the first time by simply clicking a 'Sign in with Google' or 'Sign in with Facebook' button? Ever wonder how they did that ? This course will teach you how to use Microsoft's Identity framework—a complete user authentication and authorization system for ASP.NET applications.", 50, ["Php", "Ruby", "Angular"])
    );
  }

  ngOnInit() {
  }

  changeSummary($event){
    this.typeSummary = $event;
  }
  
  changeCurrency($event){
    //console.log("event"+ $event)
    this.typeCurrency = $event;
    this.tyGia = $event =="vnd"? 20000: $event =="jpy"? 10000: 1;
  }

}
