import { Component } from '@angular/core';
import { faTrashCan,faFilePen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {
  faTrashCan=faTrashCan
  faFilePen=faFilePen
}
