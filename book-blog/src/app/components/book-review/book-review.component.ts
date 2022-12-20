import { Component, Input, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blogPost';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.sass'],
})
export class BookReviewComponent implements OnInit {
  @Input() blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) {
    this.blogPosts = this.blogPostService.blogPosts;
  }

  ngOnInit(): void {
    console.log(this.blogPosts);
  }
}
