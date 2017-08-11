import { Component, SimpleChanges, Input} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

interface OnChanges {
  ngOnChanges(changes: SimpleChanges): void
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger ('visibilityChanged', [
       state('shown' , style({ opacity: 1 })),
    state('hidden', style({ opacity: 0 })),
    transition('shown => hidden', animate('600ms')),
    transition('hidden => shown', animate('300ms')),
    ])
  ]
})

export class FaderComp implements OnChanges {
  @Input() isVisible : boolean = true;
  
  ngOnChanges(changes: SimpleChanges) {
  }
}



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