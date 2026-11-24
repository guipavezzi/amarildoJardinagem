import { Component, OnDestroy, signal } from '@angular/core';
import { Home } from "./components/home/home";
import { Contact } from "./components/contact/contact";
import { About } from "./components/about/about";
import { Galery } from "./components/galery/galery";

@Component({
  selector: 'app-root',
  imports: [Home, Contact, About, Galery],
  templateUrl: './app.html',
  host: { '(click)': 'scrollToSection($event)' },
  styleUrl: './app.css'
})
export class App implements OnDestroy {
  protected readonly title = signal('amarildoJardinagem');

  private scrollFrame = 0;

  protected scrollToSection(event: MouseEvent): void {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const clicked = event.target;
    if (!(clicked instanceof Element)) return;
    const link = clicked.closest<HTMLAnchorElement>('a[data-smooth-scroll]');
    if (!link) return;
    const section = document.getElementById(link.hash.slice(1));
    if (!section) return;

    event.preventDefault();
    cancelAnimationFrame(this.scrollFrame);

    if (location.hash !== link.hash) {
      history.pushState(history.state, '', link.hash);
    }

    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });

    const start = window.scrollY;
    const padding = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const destination = start + section.getBoundingClientRect().top - padding;
    const startedAt = performance.now();
    const duration = 550;
    let lastPosition = start;

    // Animate individual scroll steps even when the browser disables native smooth scrolling.
    const animate = (now: number) => {
      if (window.scrollY !== lastPosition || location.hash !== link.hash) return;

      const elapsed = Math.max(now - startedAt, 0);
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress * progress * (3 - 2 * progress);
      window.scrollTo({ top: start + (destination - start) * easedProgress, behavior: 'instant' });
      lastPosition = window.scrollY;

      if (progress < 1) this.scrollFrame = requestAnimationFrame(animate);
    };

    this.scrollFrame = requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    if (this.scrollFrame) cancelAnimationFrame(this.scrollFrame);
  }
}
