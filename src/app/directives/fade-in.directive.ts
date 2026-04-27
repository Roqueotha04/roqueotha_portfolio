import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit, OnDestroy {
  @Input() fadeInDelay = 0;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    if (typeof window === 'undefined') return;

    const el = this.el.nativeElement;
    el.style.transitionDelay = `${this.fadeInDelay}ms`;
    el.classList.add('fade-in-init');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('fade-in-init');
          el.classList.add('fade-in-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
