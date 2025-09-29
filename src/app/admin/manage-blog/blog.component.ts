import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from 'src/app/core/services/blog.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ManageBlogFormComponent } from './manage-blog-form.component';

@Component({
  selector: 'app-manage-blog',
  standalone: true,
  imports: [CommonModule, ManageBlogFormComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class ManageBlogComponent implements OnInit {
  blogPosts: any[] = [];
  loading = false;
  error = '';
  showForm = false;
  editingPost: any = null;

  constructor(
    private blogService: BlogService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {
    this.loading = true;
    this.blogService.getBlogPosts().subscribe({
      next: (posts:any) => {
        this.blogPosts = posts;
        this.loading = false;
      },
      error: (err:any) => {
        this.error = 'Failed to load blog posts';
        this.loading = false;
      }
    });
  }

  addNewBlogPost() {
    this.editingPost = null;
    this.showForm = true;
  }

  editBlogPost(post: any) {
    this.editingPost = post;
    this.showForm = true;
  }

  saveBlogPost(postData: any) {
    if (this.editingPost) {
      this.blogService.updateBlogPost(this.editingPost.id, postData).subscribe({
        next: () => {
          this.loadBlogPosts();
          this.closeForm();
        },
        error: (err:any) => {
          this.error = 'Failed to update blog post';
        }
      });
    } else {
      this.blogService.createBlogPost(postData).subscribe({
        next: () => {
          this.loadBlogPosts();
          this.closeForm();
        },
        error: (err:any) => {
          this.error = 'Failed to create blog post';
        }
      });
    }
  }

  deleteBlogPost(id: number) {
    if (confirm('Are you sure you want to delete this blog post?')) {
      this.blogService.deleteBlogPost(id).subscribe({
        next: () => {
          this.blogPosts = this.blogPosts.filter(post => post.id !== id);
        },
        error: (err:any) => {
          this.error = 'Failed to delete blog post';
        }
      });
    }
  }

  closeForm() {
    this.showForm = false;
    this.editingPost = null;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
