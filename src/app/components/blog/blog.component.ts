import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts = signal<any[]>([]);
  displayedPosts = signal<any[]>([]);
  showAll = signal(false);
  selectedPost: any = null;
  showModal = false;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadBlogPosts();
  }

  loadBlogPosts() {
    this.blogService.getBlogPosts().subscribe({
      next: (posts: any[]) => {
        this.blogPosts.set(posts);
        this.updateDisplayedPosts();
      },
      error: (err: any) => {
        console.error('Failed to load blog posts', err);
      }
    });
  }

  updateDisplayedPosts() {
    if (this.showAll()) {
      this.displayedPosts.set(this.blogPosts());
    } else {
      this.displayedPosts.set(this.blogPosts().slice(0, 3));
    }
  }

  toggleShowAll() {
    this.showAll.set(!this.showAll());
    this.updateDisplayedPosts();
  }

  openModal(post: any) {
    this.selectedPost = post;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedPost = null;
  }
}
