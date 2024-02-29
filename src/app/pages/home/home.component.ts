import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(private router: Router) {}
  
  goToAboutMe() {
    this.router.navigate(['/about-me']);
  }

  goToExperience() {
    this.router.navigate(['/experience']);
  }

  goToSkills() {
    console.log("Pincha en Herramientas");
  }

  goToContact() {
    console.log("Pincha en Contacto");
  }
}
