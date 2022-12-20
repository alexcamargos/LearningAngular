import { Injectable } from '@angular/core';

import { BlogPost } from '../models/blogPost';
import { books } from '../data/books_data';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  blogPosts: BlogPost[] = books


  constructor() { }
}
