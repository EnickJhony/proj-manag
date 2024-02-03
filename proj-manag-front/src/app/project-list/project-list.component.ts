import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

interface Member {
  id: number;
  name: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  members: Member;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  http = inject(HttpClient);

  project: Project[] = [];

  apiUrl = 'http://localhost:3000/project';

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.http.get(this.apiUrl).subscribe((project: any) => {
      const resul = project;

      // resul.map((projectData: any) => {
      //   const startDateFormatted = Intl.DateTimeFormat('pt-BR').format(
      //     new Date(projectData.startDate)
      //   );
      //   projectData.startDate = startDateFormatted;

      //   const endDateFormatted = Intl.DateTimeFormat('pt-BR').format(
      //     new Date(projectData.endDate)
      //   );
      //   projectData.endDate = endDateFormatted;
      // });

      this.project = resul;
    });
  }

  deleteProject(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.getProjects();
    });
  }
}
