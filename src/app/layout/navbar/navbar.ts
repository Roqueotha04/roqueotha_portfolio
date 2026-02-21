import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-navbar',
  standalone: true, // Asegúrate de que sea standalone si usas imports
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  langService = inject(LanguageService);
}