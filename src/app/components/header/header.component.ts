import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  Inject,
  PLATFORM_ID,
  computed,
  signal,
  effect,
  inject,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ModalComponent,
    TranslateModule,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Signals pour tous les états locaux
  readonly menuOpen = signal(false);
  readonly languageMenuOpen = signal(false);
  readonly contactModalOpen = signal(false);
  readonly isScrollingDown = signal(false);
  readonly isDarkTheme = signal(true);
  private readonly lastScrollTop = signal(0);

  // SSR friendly
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translate = inject(TranslateService);

  constructor() {
    // Thème initial
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkTheme.set(savedTheme ? savedTheme === 'dark' : true);
    }
    // Langue initiale
    let lang = 'fr';
    if (isPlatformBrowser(this.platformId)) {
      lang = localStorage.getItem('lang') || 'fr';
    }
    this.translate.setDefaultLang('fr');
    this.translate.use(lang);

    // Effet pour appliquer le thème à chaque changement
    effect(() => {
      this.applyTheme();
    });
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  toggleLanguageMenu(event: MouseEvent) {
    event.preventDefault();
    this.languageMenuOpen.update((open) => !open);
  }

  setLang(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
    this.translate.use(lang);
  }

  openContactModal(event: MouseEvent) {
    event.preventDefault();
    this.contactModalOpen.set(true);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  closeContactModal() {
    this.contactModalOpen.set(false);
  }

  toggleTheme() {
    this.isDarkTheme.update((value) => !value);
    // Sauvegarder le thème côté client
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkTheme()) {
        document.documentElement.classList.remove('theme-light');
      } else {
        document.documentElement.classList.add('theme-light');
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrollingDown.set(st > this.lastScrollTop());
    this.lastScrollTop.set(st <= 0 ? 0 : st);
  }
}
