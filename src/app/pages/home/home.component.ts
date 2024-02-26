import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor() {}
  
  goToAboutMe() {
    console.log("Pincha en Sobre mí");
  }

  goToExperience() {
    console.log("Pincha en Formación y Experiencia");
  }

  goToSkills() {
    console.log("Pincha en Herramientas");
  }

  goToContact() {
    console.log("Pincha en Contacto");
  }
}
