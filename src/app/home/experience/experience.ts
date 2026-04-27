import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-experience',
  imports: [FadeInDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  langService = inject(LanguageService);

  estudiveLogoPath = '/experience/Dark%20Logo%20with%20Bright%20Orange%20Accent%20(5).jpg';
  utnLogoPath = '/experience/utn-nacional.jpg';
}
