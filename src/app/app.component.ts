import { Component, trigger, state, transition, style, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('wellIn', [
      state('close', style({ opacity: '0' })),
      state('open', style({ opacity: '1' })),
      transition('open => close', animate('400ms ease-in')),
      transition('close => open', animate('400ms ease-out'))
    ])
  ]
})

export class AppComponent {
  title = 'CV';

  // id isnt needed, state defines whether or not the well is displayed
  // name is the title of the panel, pnltextarea is the information the user enters
  // info is the message displayed in the well and tippos is redundent

  public panels = [
    {
      checked: 0, state: 'close', name: 'Profile', pnlTextArea: '',
      info: 'Let us know why you wish to work in your sector! '
    },
    {
      checked: 0, state: 'close', name: 'Experience', pnlTextArea: '',
      info: 'Tell us about your work history! '
    },
    {
      checked: 0, state: 'close', name: 'Education', pnlTextArea: '',
      info: 'Tell us where you studied and how well you did! '
    },
    {
      checked: 0, state: 'close', name: 'Interests', pnlTextArea: '',
      info: 'Tell us a little bit about yourself and your hobbies! '
    }
  ];

  wellOpenClose(i: number): void {
    if (this.panels[i].checked === 0) {
      this.panels[i].state = (this.panels[i].state === 'open') ? 'close' : 'open';
    }
    else {
      this.panels[i].state = 'open';
    };
  }

  chkbxClicked(i) {
    this.panels[i].checked = (this.panels[i].checked === 0) ? 1 : 0;
  }
}