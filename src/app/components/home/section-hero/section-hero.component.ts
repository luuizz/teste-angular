import { Component } from '@angular/core';
import { BoundedComponent } from "../../bounded/bounded.component";

@Component({
  selector: 'app-section-hero',
  standalone: true,
  templateUrl: './section-hero.component.html',
  styleUrl: './section-hero.component.css',
  imports: [BoundedComponent]
})
export class SectionHeroComponent {

}
