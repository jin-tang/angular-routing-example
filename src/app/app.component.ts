import { Component } from '@angular/core';
import { PostDataService } from './post-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingTutorial';
  allPost:any = [];
  constructor(private post: PostDataService) {
    this.post.getPostData().subscribe(data=>{
      console.log(data);
      this.allPost = data;
    });
  }

  loginForm = new FormGroup ({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  });
  getData() {
    console.log(this.loginForm.value);
  };

  validationMessage() {
    return this.loginForm.controls;
  }

  getDrivenData(data: any) {
    console.log(data);
  }
}
