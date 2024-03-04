import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(
    private router: Router
  ) {}

  backToHome() {
    this.router.navigate(['/home']);
  }

  redirectToContact() {
    this.router.navigate(['/contact']);
  }

  redirectToExperience() {
    this.router.navigate(['/experience']);
  }

}
