import { CategoryCoursePipe } from './pipes/cs-categoryCourse.pipe.';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipetestComponent } from './pipetest/pipetest.component';
import { PipecustomComponent } from './pipecustom/pipecustom.component';
import { CapilatizePipe } from './pipes/cs-pipe.pipe';
import { ArrayPipe } from './pipes/cs-arrpipe.pipe';
import { SortPipe } from './pipes/cs-sortpipe.pipe';
import { SummaryPipe } from './pipes/cs-summary.pipe';
import { CategoryPipe } from './pipes/cs-categorypipe.pipe';
import { ControlComponent } from './control/control.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CourseComponent } from './course/course.component';
import { CourseSummaryPipe } from './pipes/cs-coursesummary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipetestComponent,
    PipecustomComponent,
    CapilatizePipe,
    ArrayPipe,
    SortPipe, 
    SummaryPipe,
    CategoryPipe,
    ControlComponent,
    ViewproductComponent,
    CourseComponent,
    CourseSummaryPipe,
    CategoryCoursePipe    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
