import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  constructor(
    private router: Router
  ) {}

  backToHome() {
    this.router.navigate(['/home']);
  }

}
