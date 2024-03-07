import { Component } from '@angular/core';
import { faTrashCan,faFilePen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent {
  faTrashCan=faTrashCan
  faFilePen=faFilePen
}
