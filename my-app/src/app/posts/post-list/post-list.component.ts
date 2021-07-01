import { Component, OnInit } from "@angular/core";
import { IssueService } from '../../my-app.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts: any;


  constructor(public appService: IssueService) {}

  ngOnInit() {
    console.log("onInit");
    this.appService.getBlogs().subscribe((data) => {
      this.posts = data;
      console.log("data", data);
    })
  }


}
