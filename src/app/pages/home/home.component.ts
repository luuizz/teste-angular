import { Component } from '@angular/core';
import { SectionHeroComponent } from '../../components/home/section-hero/section-hero.component';
import { NewPostComponent } from '../../components/home/new-post/new-post.component';

@Component({
  selector: 'app-home',
  imports: [SectionHeroComponent, NewPostComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'teste-angular';
}
