import { Component, trigger, state, transition, style, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('wellIn', [
      state('close', style({ opacity: '1' })),
      state('open', style({ opacity: '0' })),
      transition('open => close', animate('400ms ease-in')),
      transition('close => open', animate('400ms ease-out'))

    ])
  ]
})

export class AppComponent {
  title = 'CV';

  wellState: string = 'open';

  wellOpenClose(): void {
    this.wellState = (this.wellState === 'open') ? 'close' : 'open';
  }

  public panels = [
    { id: 1, name: 'Profile', pnlTextArea: '', info: "Let us know why you wish to work in your sector!", tipPos: "Above" },
    { id: 2, name: 'Experience', pnlTextArea: '', info: "Tell us about your work history!", tipPos: "Above" },
    { id: 3, name: 'Education', pnlTextArea: '', info: "Tell us where you studied and how well you did!", tipPos: "Above" },
    { id: 4, name: 'Interests', pnlTextArea: '', info: "Tell us a little bit about yourself and your hobbies!", tipPos: "Below" }
  ];

  private getText(event: any, i: number) {
    this.panels[i].pnlTextArea = event.target.value;
    console.log(this.panels[i].pnlTextArea);
  }

  panelMouseOver(i: number) {
    document.getElementById("infoWells" + i).className = "well"
    console.log("here")
  }

  panelMouseOut(i: number) {
    document.getElementById("infoWells" + i).className = "well hidden"
    console.log("here")
  }
}