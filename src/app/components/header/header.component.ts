import { Component } from '@angular/core';
import { BoundedComponent } from "../bounded/bounded.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [BoundedComponent]
})
export class HeaderComponent {

}
