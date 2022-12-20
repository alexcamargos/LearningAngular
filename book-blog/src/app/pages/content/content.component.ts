import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blogPost';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass'],
})
export class ContentComponent implements OnInit {
  @Input() blogPosts: BlogPost[];

  private id: string | null = null;
  date: string;
  title: string;
  author: string;
  rating: number;
  content: string;

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService
  ) {
    this.blogPosts = this.blogPostService.blogPosts;

    this.date = '';
    this.title = '';
    this.author = '';
    this.rating = 0;
    this.content = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => {
        this.id = value.get('id');
        console.log(this.id);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );

    this.setDataToContentComponent(this.id);
  }

  private setDataToContentComponent(id:string | null): void {
    const post = this.blogPosts.filter((post) => post.id === id)[0];

    this.date = post.date;
    this.title = post.title;
    this.author = post.author;
    this.rating = post.rating;
    this.content = post.content;
  }
}
