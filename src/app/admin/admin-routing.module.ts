import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path:'admin',children:[
    {
      path:'blog',
      component: BlogComponent
    },
    {
      path:'course',
      component: CourseComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
