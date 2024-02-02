import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  http = inject(HttpClient);

  project = {
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    memberId: '',
  };
  createProject() {
    const startDate = this.project.startDate;
    const endDate = this.project.endDate;

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const startDateFormatted = startDateObj.toISOString();
    const endDateFormatted = endDateObj.toISOString();

    const memberId = this.project.memberId;
    const memberIdFormatted = parseInt(memberId);
    console.log(typeof memberIdFormatted);
    console.log(memberIdFormatted);

    const dataFormatted = {
      ...this.project,
      startDate: startDateFormatted,
      endDate: endDateFormatted,
      memberId: memberIdFormatted,
    }

    console.log(dataFormatted);
    this.http.post('http://localhost:3000/project', dataFormatted).subscribe(() => {
      console.log('project created successfully');
      this.project = {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        memberId: '',        
      }
    })
  }
}
