import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://localhost:3200';

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any> {
    console.log("in service");
    return this.http.get(`${this.uri}/getBlogs`);
  }

  addBlog(title: string, content: string, author: string) {
    return this.http.post( `${this.uri}/customBlog`, {title, author, content});
  }
}
