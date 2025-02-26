import { Component } from '@angular/core';
import { BoundedComponent } from '../bounded/bounded.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BoundedComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
