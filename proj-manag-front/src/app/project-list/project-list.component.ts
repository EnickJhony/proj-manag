import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  http = inject(HttpClient);

  project: any[] = [];

  apiUrl = 'http://localhost:3000/project';

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.http.get(this.apiUrl).subscribe((project: any) => {
      this.project = project;
    });
  }

  deleteProject(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.getProjects();
    })
  }
}
