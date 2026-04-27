import { Component, signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  langService = inject(LanguageService);
  email = 'roqueotha04@gmail.com';
  isCopied = signal(false); 

  copiarEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 2000);
    });
  }
}