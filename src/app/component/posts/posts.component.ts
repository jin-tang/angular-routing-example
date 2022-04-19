import { Component, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/post-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  allPost:any;
  constructor(private post:PostDataService) { 
    this.post.getPostData().subscribe(data=>{
      this.allPost = data;
    })
  }

  ngOnInit(): void {

  }

}
