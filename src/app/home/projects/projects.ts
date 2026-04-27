import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  langService = inject(LanguageService);

  readonly total = 3;
  currentIndex = signal(0);
  visible = signal(true);

  navigate(dir: 'prev' | 'next') {
    if (!this.visible()) return;
    this.visible.set(false);
    setTimeout(() => {
      const step = dir === 'next' ? 1 : this.total - 1;
      this.currentIndex.set((this.currentIndex() + step) % this.total);
      this.visible.set(true);
    }, 300);
  }
}
