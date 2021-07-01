import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { IssueService } from '../../my-app.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  enteredAuthor = '';

  constructor(public appService: IssueService) {}

  onAddPost(form: NgForm){
    if (form.invalid) {
      return;
    }

    this.appService.addBlog(form.value.title, form.value.content, form.value.author).subscribe((res) => {
      console.log('res');
    });
  }
}
