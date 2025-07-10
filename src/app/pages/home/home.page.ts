import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  private readonly startYear = 2021;
  private readonly currentYear = new Date().getFullYear();

  readonly yearsOfExperience = signal(this.currentYear - this.startYear);
}
