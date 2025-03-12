import { Component } from '@angular/core';
import { BoundedComponent } from "../../bounded/bounded.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  imports: [BoundedComponent, FormsModule],
  templateUrl: './new-post.component.html'
})
export class NewPostComponent {
  tweetMessage: string = '';
  tweetMaxLenght: number = 240;
  tweetRemain: number = this.tweetMaxLenght;

  changeTweet() {
    this.tweetRemain = 240 - this.tweetMessage.length
  }

  sendTweet() {
    alert(this.tweetMessage);
  }
}
