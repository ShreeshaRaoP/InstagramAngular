import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PageEvent } from '@angular/material/paginator'; 

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  pageSize = 5; // 
  pageIndex = 0; // 

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

  
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }
}
