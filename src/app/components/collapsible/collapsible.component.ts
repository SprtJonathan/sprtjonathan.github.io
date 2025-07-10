import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Utilitaire pour id unique (par composant)
let COLLAPSIBLE_ID = 0;

@Component({
  selector: 'app-collapsible',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './collapsible.component.html',
  styleUrl: './collapsible.component.scss'
})
export class CollapsibleComponent {
  readonly open = signal(false);
  readonly title = input<string>('');
  private readonly id = `collapsible-panel-${COLLAPSIBLE_ID++}`;

  toggle(): void {
    this.open.update(o => !o);
  }

  get panelId(): string {
    return this.id;
  }
}
