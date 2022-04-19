import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BlogComponent } from './blog/blog.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    BlogComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
