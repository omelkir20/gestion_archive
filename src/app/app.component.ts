import { Component, EventEmitter,Output} from '@angular/core';
import { faUsersLine ,faUser,faHouseChimney,faThLarge,faSignOut,faFile} from '@fortawesome/free-solid-svg-icons';
interface NavToggle{
  collapsed:boolean;
  screenWidth:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faUsersLine=faUsersLine
  faUser=faUser
  faHouseChimney=faHouseChimney
  faThLarge=faThLarge
  faSignOut=faSignOut
  faFile=faFile
  label: string[] = ["Dashboard", "Département", "Etudiant","Affectation","Groupe","se déconnecter"];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  @Output() onToggleNav: EventEmitter<NavToggle> = new EventEmitter();

  collapsed=false;
  screenWidth=0;

  toggleCollapsed():void{
    this.collapsed = !this.collapsed;
    this.onToggleNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  cLoseNav():void{
    this.collapsed=false;
    this.onToggleNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  
}
