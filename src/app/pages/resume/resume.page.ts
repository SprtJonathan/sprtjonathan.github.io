import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { CollapsibleComponent } from '../../components/collapsible/collapsible.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    ModalComponent,
    CollapsibleComponent,
  ],
  templateUrl: './resume.page.html',
  styleUrl: './resume.page.scss',
})
export class ResumePage {
  readonly translate = inject(TranslateService);

  // Calcul dynamique de l'âge
  readonly birthDate = new Date(1999, 1, 14); // mois commence à 0
  readonly age = computed(() => {
    const now = new Date();
    let age = now.getFullYear() - this.birthDate.getFullYear();
    const m = now.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < this.birthDate.getDate())) {
      age--;
    }
    return age;
  });

  // Modal pour "Montage Photo"
  readonly editingModalOpen = signal(false);

  // Modal pour "Création Vidéoludique"
  readonly gamesModalOpen = signal(false);

  openEditingModal() {
    this.editingModalOpen.set(true);
  }
  closeEditingModal() {
    this.editingModalOpen.set(false);
  }

  openGamesModal() {
    this.gamesModalOpen.set(true);
  }
  closeGamesModal() {
    this.gamesModalOpen.set(false);
  }
  selectedHobby: any = null;

  openHobbyModal(hobby: any) {
    this.selectedHobby = hobby;
  }
  closeHobbyModal() {
    this.selectedHobby = null;
  }
}
