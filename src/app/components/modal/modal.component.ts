import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  readonly title = input<string>('');
  readonly close = output<void>();

  closeModal(): void {
    this.close.emit();
  }

  // Ferme la modale uniquement si le clic vient de l’overlay
  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
