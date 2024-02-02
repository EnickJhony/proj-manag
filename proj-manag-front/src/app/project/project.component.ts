import { HttpClient } from '@angular/common/http';
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
    let { name, description, startDate, endDate, memberId } = this.project;
    let errorMessage = null;

    if (!name) {
      errorMessage = 'Nome é obrigatório';
    }
    if (name.length < 4) {
      errorMessage = errorMessage
        ? errorMessage + ' | ' + 'Nome precisa ter pelo menos 4 caracteres'
        : 'Nome precisa ter pelo menos 4 caracteres';
    }
    if (!description) {
      errorMessage = errorMessage
        ? errorMessage + ' | ' + ' Descrição é obrigatória'
        : 'Descrição é obrigatória';
    }
    if (!startDate) {
      errorMessage = errorMessage
        ? errorMessage + ' | ' + 'Todo projeto precisa de uma data inicial'
        : 'Todo projeto precisa de uma data inicial';
    }
    if (!memberId) {
      errorMessage = errorMessage
        ? errorMessage + ' | ' + 'O projeto precisa de um membro'
        : 'O projeto precisa de um membro';
    }
    if (endDate && endDate < startDate) {
      errorMessage = errorMessage
        ? errorMessage + ' | ' + 'A data final é anterior a data inicial'
        : 'A data final é anterior a data inicial';
    }
    if (errorMessage) {
      alert(errorMessage);
    }
    
    const startDateObj = new Date(startDate);
    const startDateFormatted = startDateObj.toISOString();

    let endDateFormatted = null;

    if (!endDate || endDate === '') {
      endDateFormatted = null;
    } else {
      const endDateObj = new Date(endDate);
      endDateFormatted = endDateObj.toISOString();
    }

    const memberIdFormatted = parseInt(memberId);

    const dataFormatted = {
      ...this.project,
      startDate: startDateFormatted,
      endDate: endDateFormatted,
      memberId: memberIdFormatted,
    };

    if (!errorMessage) {
      this.http
        .post('http://localhost:3000/project', dataFormatted)
        .subscribe(() => {
          this.project = {
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            memberId: '',
          };
          alert('Projeto criado com sucesso!');
        });
    }
  }
}
