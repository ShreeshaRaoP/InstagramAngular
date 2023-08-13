import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PageEvent } from '@angular/material/paginator'; // Import PageEvent

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  pageSize = 5; // Number of rows per page
  pageIndex = 0; // Current page index

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.apiService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  // Function to handle page change event
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }
}
