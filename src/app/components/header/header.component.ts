import {
  Component,
  HostListener,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ModalComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  languageMenuOpen = false;
  contactModalOpen = false;
  isScrollingDown = false;
  lastScrollTop = 0;
  isDarkTheme = true; // Par défaut, thème sombre

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService // Ajoute l’injection ici
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkTheme = savedTheme ? savedTheme === 'dark' : true;
    }
    const lang = isPlatformBrowser(this.platformId)
      ? localStorage.getItem('lang') || 'fr'
      : 'fr';
    this.translate.setDefaultLang('fr');
    this.translate.use(lang);

    this.applyTheme();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleLanguageMenu(event: MouseEvent) {
    event.preventDefault();
    this.languageMenuOpen = !this.languageMenuOpen;
  }

  setLang(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
    this.translate.use(lang);
  }

  openContactModal(event: MouseEvent) {
    event.preventDefault();
    this.contactModalOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    // Sauvegarder le thème uniquement côté client
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }
  }

  applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      // Ajoute cette vérification !
      if (this.isDarkTheme) {
        document.documentElement.classList.remove('theme-light');
      } else {
        document.documentElement.classList.add('theme-light');
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrollingDown = st > this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
