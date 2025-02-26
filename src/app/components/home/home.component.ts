import { Component } from '@angular/core';
import { SectionHeroComponent } from './section-hero/section-hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
