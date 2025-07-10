import { Component, Inject, PLATFORM_ID, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = signal('Jonathan Binot');

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.initTranslate();
  }

  private initTranslate(): void {
    let lang = 'fr';
    if (isPlatformBrowser(this.platformId)) {
      lang = localStorage.getItem('lang') ?? 'fr';
    }
    this.translate.setDefaultLang('fr');
    this.translate.use(lang);
  }
}
