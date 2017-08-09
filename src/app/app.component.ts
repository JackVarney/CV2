import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  private disableToolTips(i) {
    for (var j = 0; i == j; j++) {
      this.panels[j].info = "";
    }
  }

  panelMouseOver(i: number){
    $("#infowells"+i).fadeOut();
    console.log("something")
  }

  panelMouseOut(i: number){

  }
}