import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
  title = 'CV';

  public panels = [
    { id: 1, name: 'Profile', pnlTextArea: ''},
    { id: 2 ,name: 'Experience', pnlTextArea: '' },
    { id: 3 ,name: 'Education', pnlTextArea: '' },
    { id: 4 ,name: 'Interests', pnlTextArea: '' }
  ];

  private getText(event: any, i: number){   
    this.panels[i].pnlTextArea = event.target.value;
    console.log(this.panels[i].pnlTextArea);
  }
}

    //this.panels.forEach(pnlTextArea => {
    //   var i = 0;
    //   this.panels[i].pnlTextArea += `${value}`;      
    //   console.log(i);
    //   console.log(this.panels[i].pnlTextArea);
    //   i++;
    // });    