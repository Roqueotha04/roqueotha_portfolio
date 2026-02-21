import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isEnglish = signal(false);

  toggle() {
    this.isEnglish.set(!this.isEnglish());
  }
}