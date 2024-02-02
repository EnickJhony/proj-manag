import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-manag-front';

  onClick() {
    console.log('botão 1');
  }
}
