import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  animations:[
    trigger('wellIn', [
      state('active', style({
      })),
      state('inactive', style({
      })),
      transition('active => inactive', animate('100ms ease-in')),
      transition('inactive => active', animate('100ms ease-in'))
    ])
  ]
})

export class AppComponent {
  title = 'CV';

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
  }

  panelMouseOut(i: number) {
    document.getElementById("infoWells" + i).className = "well hidden"
    console.log("stuff")
  }
}