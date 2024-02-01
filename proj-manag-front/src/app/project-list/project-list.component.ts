import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  http = inject(HttpClient);

  project: any[] = [];

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects() {
    this.http
      .get('http://localhost:3000/project')
      .subscribe((projects: any) => {
        this.project = projects;
      });
  }
}
