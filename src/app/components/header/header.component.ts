import { Component } from '@angular/core';
import { BoundedComponent } from "../bounded/bounded.component";
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [BoundedComponent, AvatarComponent]
})
export class HeaderComponent {

}
