import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  langService = inject(LanguageService);
}
