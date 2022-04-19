import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CourseComponent } from './course/course.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'user', children:[
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'blog',
      component: BlogComponent
    },
    {
      path: 'course',
      component: CourseComponent
    },
    {
      path:'**',
      component: NotFoundComponent
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
