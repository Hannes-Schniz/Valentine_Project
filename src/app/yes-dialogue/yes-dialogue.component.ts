import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-yes-dialogue',
  templateUrl: './yes-dialogue.component.html',
  styleUrls: ['./yes-dialogue.component.scss']
})
export class YesDialogueComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  moreText = "I love you more"

  you_more_button() {
    this.moreText = "No, love you more"
    const menu = document.querySelector('#animateMore')!;
    menu.classList.remove('animate');
    setTimeout(() => {
      menu.classList.add('animate');
    }, 1);
  }
}
