import { Component } from '@angular/core';
import { faTrashCan,faFilePen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  faTrashCan=faTrashCan
  faFilePen=faFilePen
}
