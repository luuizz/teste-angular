import { Component } from '@angular/core';
import { SectionHeroComponent } from '../../components/home/section-hero/section-hero.component';

@Component({
  selector: 'app-home',
  imports: [SectionHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'teste-angular';
}
