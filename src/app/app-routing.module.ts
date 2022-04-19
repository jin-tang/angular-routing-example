import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { CourseComponent } from './component/course/course.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductComponent } from './component/product/product.component';
import { PostsComponent } from './component/posts/posts.component';

const routes: Routes = [
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
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'product/:name',
    component: ProductComponent
  },
  {
    path: 'post',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
