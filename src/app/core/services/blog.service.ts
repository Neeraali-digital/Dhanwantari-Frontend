import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = `${environment.apiUrl}blogposts/`;

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBlogPost(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  createBlogPost(blogPost: any): Observable<any> {
    if (blogPost.image) {
      const formData = new FormData();
      Object.keys(blogPost).forEach(key => {
        if (blogPost[key] !== null && blogPost[key] !== undefined) {
          formData.append(key, blogPost[key]);
        }
      });
      return this.http.post<any>(this.apiUrl, formData);
    } else {
      return this.http.post<any>(this.apiUrl, blogPost);
    }
  }

  updateBlogPost(id: number, blogPost: any): Observable<any> {
    if (blogPost.image) {
      const formData = new FormData();
      Object.keys(blogPost).forEach(key => {
        if (blogPost[key] !== null && blogPost[key] !== undefined) {
          formData.append(key, blogPost[key]);
        }
      });
      return this.http.put<any>(`${this.apiUrl}${id}/`, formData);
    } else {
      return this.http.put<any>(`${this.apiUrl}${id}/`, blogPost);
    }
  }

  deleteBlogPost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
