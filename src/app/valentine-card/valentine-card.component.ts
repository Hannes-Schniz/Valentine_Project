import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoDialogueComponent } from '../no-dialogue/no-dialogue.component';
import { YesDialogueComponent } from '../yes-dialogue/yes-dialogue.component';

@Component({
  selector: 'app-valentine-card',
  templateUrl: './valentine-card.component.html',
  styleUrls: ['./valentine-card.component.scss']
})
export class ValentineCardComponent {

  constructor(public dialog: MatDialog) { }

  no_button() {
    this.dialog.open(NoDialogueComponent);
  }

  yes_button() {
    this.dialog.open(YesDialogueComponent);
  }
}
